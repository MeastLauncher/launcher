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

import { rmSync } from 'node:fs';
import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import electron from 'vite-plugin-electron';
import renderer from 'vite-plugin-electron-renderer';
import pkg from './package.json';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
    rmSync('dist-electron', { recursive: true, force: true });

    const isServe = command === 'serve';
    const isBuild = command === 'build';
    const sourcemap = isServe || !!process.env.VSCODE_DEBUG;

    return {
        resolve: {
            alias: {
                '@': path.join(__dirname, 'src')
            }
        },
        plugins: [
            react(),
            electron([
                {
                    // Main-Process entry file of the Electron App.
                    entry: 'electron/main/index.ts',
                    onstart(options) {
                        if (process.env.VSCODE_DEBUG) {
                            console.log(
                                /* For `.vscode/.debug.script.mjs` */ '[startup] Electron App'
                            );
                        } else {
                            options.startup();
                        }
                    },
                    vite: {
                        build: {
                            sourcemap,
                            minify: isBuild,
                            outDir: 'dist-electron/main',
                            rollupOptions: {
                                external: Object.keys(
                                    'dependencies' in pkg
                                        ? pkg.dependencies
                                        : {}
                                )
                            }
                        }
                    }
                },
                {
                    entry: 'electron/preload/index.ts',
                    onstart(options) {
                        // Notify the Renderer-Process to reload the page when the Preload-Scripts build is complete,
                        // instead of restarting the entire Electron App.
                        options.reload();
                    },
                    vite: {
                        build: {
                            sourcemap: sourcemap ? 'inline' : undefined, // #332
                            minify: isBuild,
                            outDir: 'dist-electron/preload',
                            rollupOptions: {
                                external: Object.keys(
                                    'dependencies' in pkg
                                        ? pkg.dependencies
                                        : {}
                                )
                            }
                        }
                    }
                }
            ]),
            // Use Node.js API in the Renderer-process
            renderer()
        ],
        server:
            process.env.VSCODE_DEBUG &&
            (() => {
                const url = new URL(pkg.debug.env.VITE_DEV_SERVER_URL);
                return {
                    host: url.hostname,
                    port: +url.port
                };
            })(),
        clearScreen: false
    };
});
