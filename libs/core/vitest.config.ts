import { resolve } from 'path';
import { defineConfig } from 'vitest/config';
export default defineConfig({
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src')
        }
    },
    test: {
        dir: resolve(__dirname, 'tests/'),
        setupFiles: resolve(__dirname, 'tests/setupTests.ts')
    }
});