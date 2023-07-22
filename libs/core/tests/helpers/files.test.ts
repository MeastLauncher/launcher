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

import { describe, expect, it } from 'vitest';
import {
    checkFileHash,
    createFileHash,
    listFilesRecursively
} from '@/helpers/files';
import { join } from 'path';

describe('Files helpers tests', () => {
    it('should list all files in the folder with relative path', () => {
        const filesList = listFilesRecursively(__dirname);

        expect(filesList[0]).not.toContain(__dirname);
    });

    it('should create the hash of the file', () => {
        const file = join(__dirname, './test_files/hello.txt');
        const fileHash: string =
            'a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e';

        expect(createFileHash(file)).toEqual(fileHash);
    });

    it('should validate file hash', () => {
        const file = join(__dirname, './test_files/hello.txt');
        const fileHash: string =
            'a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e';

        expect(checkFileHash(file, fileHash)).toBeTruthy();
    });
});
