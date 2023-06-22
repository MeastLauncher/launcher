import { join } from 'path';
import { copyFileSync } from 'fs';
import { beforeEach } from 'vitest';

beforeEach(() => {
    /* Reset test application's configuration */
    copyFileSync(join(__dirname, './config/test_files/config_default.json'), join(__dirname, './config/test_files/config.json'));
    copyFileSync(join(__dirname, './config/test_files/data_default.json'), join(__dirname, './config/test_files/data.json'));
});