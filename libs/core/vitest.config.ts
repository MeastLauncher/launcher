import { resolve } from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        dir: resolve(__dirname, './tests'),
    }
});