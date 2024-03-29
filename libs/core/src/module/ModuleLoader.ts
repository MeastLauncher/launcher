/*
 * Copyright (C) 2023 Meast Team & its contributors
 *
 * This file is part of the Meast Launcher.
 *
 * Meast is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Meast is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Meast.  If not, see <http://www.gnu.org/licenses/>.
 */

import { existsSync, lstatSync, readFileSync } from 'fs';
import { checkFileHash, listFilesRecursively } from '@/helpers/files';
import { join } from 'path';
import decompress from 'decompress';
import { rimraf } from 'rimraf';
import type { RouteObject } from 'react-router-dom';
import type { MeastModule } from '@/types';
import { RedirectToMainModuleRoute } from '@/module/routes/RedirectToMainModuleRoute';
import { createElement } from 'react';

export class ModuleLoader {
    private module: MeastModule;

    constructor(private modulePath: string) {}

    async extractModule(
        zipFile: string,
        deleteBeforeIfExists: boolean = false
    ): Promise<decompress.File[]> {
        if (!existsSync(zipFile)) {
            throw new Error(`The specified file ${zipFile}" does not exists`);
        }

        if (deleteBeforeIfExists) {
            await rimraf(this.modulePath).catch(e => {
                throw e;
            });
        }

        return await decompress(zipFile, this.modulePath);
    }

    checkModuleIntegrity(): boolean {
        if (
            !existsSync(this.modulePath) &&
            !lstatSync(this.modulePath).isDirectory()
        ) {
            throw new Error(
                `The specified path ${this.modulePath} does not exists or is not a directory`
            );
        }

        const files = listFilesRecursively(this.modulePath);
        if (!existsSync(join(this.modulePath, 'integrity.json'))) {
            throw new Error(
                'The specified folder does not contain integrity.json file'
            );
        }

        const json = JSON.parse(
            readFileSync(join(this.modulePath, 'integrity.json')).toString()
        );

        return !files
            .filter(f => f !== '/integrity.json')
            .map(f => {
                return checkFileHash(join(this.modulePath, f), json[f]);
            })
            .includes(false);
    }

    async runModuleLoadFunction(
        setMessage: (message: string) => void
    ): Promise<void> {
        if (this.module === undefined) {
            await this.importModule();
        }

        this.module.onModuleLoad(setMessage);
    }

    async runModuleUnloadFunction(): Promise<void> {
        if (this.module === undefined) {
            await this.importModule();
        }

        this.module.onModuleUnload();
    }

    async registerModuleRoutes(routes: RouteObject[]): Promise<RouteObject[]> {
        if (this.module === undefined) {
            await this.importModule();
        }

        if (routes.some(r => r.path.startsWith(`/${this.module.identifier}`))) {
            throw new Error(
                `A module is already registered with the same identifier "${this.module.identifier}"`
            );
        }

        const moduleRouteIdentifier = this.module.identifier.replaceAll(
            '.',
            ''
        );

        return [
            ...routes,
            {
                path: `/module/${moduleRouteIdentifier}`,
                element: createElement(RedirectToMainModuleRoute, {
                    moduleRouteIdentifier: moduleRouteIdentifier
                }),
                children: this.module.routes
            }
        ] as RouteObject[];
    }

    private async importModule(): Promise<void> {
        this.module = (
            await import(join(this.modulePath, 'module.mjs'))
        ).default;
    }
}
