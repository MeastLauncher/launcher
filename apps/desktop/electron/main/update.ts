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

import { app, ipcMain } from 'electron';
import {
    autoUpdater,
    type ProgressInfo,
    type UpdateDownloadedEvent
} from 'electron-updater';

export function update(win: Electron.BrowserWindow) {
    // When set to false, the update download will be triggered through the API
    autoUpdater.autoDownload = false;
    autoUpdater.disableWebInstaller = false;
    autoUpdater.allowDowngrade = false;

    // start check
    autoUpdater.on('checking-for-update', function () {});
    // update available
    autoUpdater.on('update-available', arg => {
        win.webContents.send('update-can-available', {
            update: true,
            version: app.getVersion(),
            newVersion: arg?.version
        });
    });
    // update not available
    autoUpdater.on('update-not-available', arg => {
        win.webContents.send('update-can-available', {
            update: false,
            version: app.getVersion(),
            newVersion: arg?.version
        });
    });

    // Checking for updates
    ipcMain.handle('check-update', async () => {
        if (!app.isPackaged) {
            const error = new Error(
                'The update feature is only available after the package.'
            );
            return { message: error.message, error };
        }

        try {
            return await autoUpdater.checkForUpdatesAndNotify();
        } catch (error) {
            return { message: 'Network error', error };
        }
    });

    // Start downloading and feedback on progress
    ipcMain.handle('start-download', event => {
        startDownload(
            (error, progressInfo) => {
                if (error) {
                    // feedback download error message
                    event.sender.send('update-error', {
                        message: error.message,
                        error
                    });
                } else {
                    // feedback update progress message
                    event.sender.send('download-progress', progressInfo);
                }
            },
            () => {
                // feedback update downloaded message
                event.sender.send('update-downloaded');
            }
        );
    });

    // Install now
    ipcMain.handle('quit-and-install', () => {
        autoUpdater.quitAndInstall(false, true);
    });
}

function startDownload(
    callback: (error: Error | null, info: ProgressInfo | null) => void,
    complete: (event: UpdateDownloadedEvent) => void
) {
    autoUpdater.on('download-progress', info => callback(null, info));
    autoUpdater.on('error', error => callback(error, null));
    autoUpdater.on('update-downloaded', complete);
    autoUpdater.downloadUpdate();
}
