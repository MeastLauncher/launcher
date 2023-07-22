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

import { readdirSync, readFileSync, statSync } from 'fs';
import { join } from 'path';
import { createHash } from 'crypto';

export const listFilesRecursively = (dirPath, arrayOfFiles = []): string[] => {
    const fileList = readdirSync(dirPath);

    arrayOfFiles = arrayOfFiles || [];

    fileList.forEach(function (file) {
        if (statSync(dirPath + '/' + file).isDirectory()) {
            arrayOfFiles = listFilesRecursively(
                dirPath + '/' + file,
                arrayOfFiles
            );
        } else {
            arrayOfFiles.push(
                join(dirPath, '/', file)
                    .replace(dirPath, '')
                    .replaceAll('\\', '/')
            );
        }
    });

    return arrayOfFiles;
};

export const createFileHash = (filePath: string): string => {
    const fileBuffer = readFileSync(filePath);
    const hashSum = createHash('sha256');
    hashSum.update(fileBuffer);

    return hashSum.digest('hex');
};

export const checkFileHash = (filePath: string, hash: string): boolean => {
    const fileBuffer = readFileSync(filePath);
    const hashSum = createHash('sha256');
    hashSum.update(fileBuffer);
    const generatedHash = hashSum.digest('hex');

    return generatedHash === hash;
};
