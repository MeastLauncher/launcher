import { describe, expect, it } from 'vitest';
import {
    listFilesRecursively,
    createFileHash,
    checkFileHash
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
