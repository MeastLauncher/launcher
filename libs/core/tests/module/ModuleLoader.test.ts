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

import { describe, expect, it, vi } from 'vitest';
import { ModuleLoader } from '@/module/ModuleLoader';
import { join } from 'path';
import { listFilesRecursively } from '@/helpers/files';
import type { RouteObject } from 'react-router-dom';
import { createElement } from 'react';
import { RedirectToMainModuleRoute } from '@/module/routes/RedirectToMainModuleRoute';

describe('ModuleLoader test suite', () => {
    it('should extract modules to directory', async () => {
        const onFinish = vi.fn();
        const onError = vi.fn();
        const moduleLoader = new ModuleLoader(
            join(__dirname, './test_files/module1')
        );
        await moduleLoader
            .extractModule(join(__dirname, './test_files/module1.zip'), true)
            .then(onFinish)
            .catch(onError);

        expect(onFinish).toHaveBeenCalled();
        expect(onError).not.toHaveBeenCalled();
        expect(
            listFilesRecursively(join(__dirname, './test_files/module1')).length
        ).toEqual(3);
    });

    it('should check module files integrity', () => {
        const moduleLoader = new ModuleLoader(
            join(__dirname, './test_files/module1')
        );
        const integrity = moduleLoader.checkModuleIntegrity();

        expect(integrity).toBeTruthy();
    });

    it('should return false when files integrity is invalid', async () => {
        const moduleLoader = new ModuleLoader(
            join(__dirname, './test_files/module_invalid_hash')
        );
        await moduleLoader.extractModule(
            join(__dirname, './test_files/module_invalid_hash.zip'),
            true
        );
        const integrity = moduleLoader.checkModuleIntegrity();

        expect(integrity).toBeFalsy();
    });

    it('should execute the onModuleLoadFunction', async () => {
        const moduleLoader = new ModuleLoader(
            join(__dirname, './test_files/module1')
        );
        const consoleSpy = vi
            .spyOn(console, 'log')
            .mockImplementation(() => {});
        await moduleLoader.runModuleLoadFunction(() => {});

        expect(consoleSpy).toHaveBeenLastCalledWith('Hello from Module 1');
    });

    it('should execute the onModuleUnloadFunction', async () => {
        const moduleLoader = new ModuleLoader(
            join(__dirname, './test_files/module1')
        );
        const consoleSpy = vi
            .spyOn(console, 'log')
            .mockImplementation(() => {});
        await moduleLoader.runModuleUnloadFunction();

        expect(consoleSpy).toHaveBeenLastCalledWith('Goodbye from Module 1');
    });

    it('should successfully register routes', async () => {
        const routes: RouteObject[] = [
            {
                path: '/',
                element: createElement('h1')
            }
        ];
        const moduleRoutes: RouteObject[] = [
            {
                path: '/',
                element: createElement('h1')
            },
            {
                path: '/module/frmeastmodule1',
                element: createElement(RedirectToMainModuleRoute, {
                    moduleRouteIdentifier: 'frmeastmodule1'
                }),
                children: [
                    {
                        path: '',
                        element: createElement('h1')
                    }
                ]
            }
        ];
        const moduleLoader = new ModuleLoader(
            join(__dirname, './test_files/module1')
        );
        const newRoutes = await moduleLoader.registerModuleRoutes(routes);

        expect(newRoutes).toMatchObject(moduleRoutes);
    });
});
