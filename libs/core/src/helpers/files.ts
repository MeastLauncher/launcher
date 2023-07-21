import {readdirSync, readFileSync, statSync} from 'fs';
import {join} from 'path';
import {createHash} from 'crypto';

export const listFilesRecursively = (dirPath, arrayOfFiles = []): string[] => {
    const fileList = readdirSync(dirPath);

    arrayOfFiles = arrayOfFiles || [];

    fileList.forEach(function(file) {
        if (statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = listFilesRecursively(dirPath + "/" + file, arrayOfFiles);
        } else {
            arrayOfFiles.push(join(dirPath, "/", file).replace(dirPath, '').replaceAll('\\', '/'));
        }
    });

    return arrayOfFiles;
}

export const createFileHash = (filePath: string): string => {
    const fileBuffer = readFileSync(filePath);
    const hashSum = createHash('sha256');
    hashSum.update(fileBuffer);

    return hashSum.digest('hex');
}

export const checkFileHash = (filePath: string, hash: string): boolean => {
    const fileBuffer = readFileSync(filePath);
    const hashSum = createHash('sha256');
    hashSum.update(fileBuffer);
    const generatedHash = hashSum.digest('hex');

    return generatedHash === hash;
}