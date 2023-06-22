import {describe, expect, it} from 'vitest';
import {ConfigurationManager} from '@/config/ConfigurationManager';
import {join} from 'path';
import * as fs from 'fs';

enum ConfigurationNamespaces {
    DEFAULT = 'config',
    USER = 'user',
    MESSAGES = 'translation'
}

describe('ConfigurationManager', () => {
    it('should work', () => {
        const configuration = new ConfigurationManager<ConfigurationNamespaces>(ConfigurationNamespaces.DEFAULT);
        configuration.addFiles({
            path: join(__dirname, './test_files/config.json'),
            namespace: ConfigurationNamespaces.DEFAULT
        }, {
            path: join(__dirname, './test_files/data.json'),
            namespace: ConfigurationNamespaces.USER
        }).parseConfig();

        expect(configuration.get('hello')).toBe('world');
    });

    it('should get value with nested object', () => {
        const configuration = new ConfigurationManager<ConfigurationNamespaces>(ConfigurationNamespaces.DEFAULT);
        configuration.addFiles({
            path: join(__dirname, './test_files/config.json'),
            namespace: ConfigurationNamespaces.DEFAULT
        }, {
            path: join(__dirname, './test_files/data.json'),
            namespace: ConfigurationNamespaces.USER
        }).parseConfig();

        expect(configuration.get<string>('user.name', ConfigurationNamespaces.USER)).toBe('John Doe');
    });

    it('should set a property in a namespace', () => {
        const configuration = new ConfigurationManager<ConfigurationNamespaces>(ConfigurationNamespaces.DEFAULT);
        configuration.addFiles({
            path: join(__dirname, './test_files/config.json'),
            namespace: ConfigurationNamespaces.DEFAULT
        }, {
            path: join(__dirname, './test_files/data.json'),
            namespace: ConfigurationNamespaces.USER
        }).parseConfig();

        configuration.set('name', 'Meast');

        expect(configuration.get('name')).toBe('Meast');
    });

    it('should set a property in a namespace with nested key', () => {
        const configuration = new ConfigurationManager<ConfigurationNamespaces>(ConfigurationNamespaces.DEFAULT);
        configuration.addFiles({
            path: join(__dirname, './test_files/config.json'),
            namespace: ConfigurationNamespaces.DEFAULT
        }, {
            path: join(__dirname, './test_files/data.json'),
            namespace: ConfigurationNamespaces.USER
        }).parseConfig();

        configuration.set('app.name', 'Meast');

        expect(configuration.get('app.name')).toBe('Meast');
    });

    it('should write file when set a property', () => {
        const configuration = new ConfigurationManager<ConfigurationNamespaces>(ConfigurationNamespaces.DEFAULT);
        configuration.addFiles({
            path: join(__dirname, './test_files/config.json'),
            namespace: ConfigurationNamespaces.DEFAULT
        }, {
            path: join(__dirname, './test_files/data.json'),
            namespace: ConfigurationNamespaces.USER
        }).parseConfig();

        const config = {
            hello: 'world',
            name: 'Meast',
            app: {
                name: 'Meast'
            }
        };

        configuration.set('app.name', 'Meast');

        const fileContent = fs.readFileSync(join(__dirname, './test_files/config.json'));

        expect(JSON.parse(fileContent.toString())).toEqual(config);
    });

    it('should not write config file when queue parameter is present', () => {
        const configuration = new ConfigurationManager<ConfigurationNamespaces>(ConfigurationNamespaces.DEFAULT);
        configuration.addFiles({
            path: join(__dirname, './test_files/config.json'),
            namespace: ConfigurationNamespaces.DEFAULT
        }, {
            path: join(__dirname, './test_files/data.json'),
            namespace: ConfigurationNamespaces.USER
        }).parseConfig();

        const config = {
            hello: 'world',
            name: 'Meast',
            app: {
                name: 'Hello'
            }
        };

        configuration.set('app.name', 'Meast', true);

        const fileContent = fs.readFileSync(join(__dirname, './test_files/config.json'));

        expect(JSON.parse(fileContent.toString())).toEqual(config);
    });

    it('should write namespace config file when flush method is called', () => {
        const configuration = new ConfigurationManager<ConfigurationNamespaces>(ConfigurationNamespaces.DEFAULT);
        configuration.addFiles({
            path: join(__dirname, './test_files/config.json'),
            namespace: ConfigurationNamespaces.DEFAULT
        }, {
            path: join(__dirname, './test_files/data.json'),
            namespace: ConfigurationNamespaces.USER
        }).parseConfig();

        const config = {
            hello: 'world',
            name: 'Meast',
            app: {
                name: 'Meast'
            }
        };

        const user = {
            user: {
                id: 1,
                name: 'John Doe',
                email: 'john@doe.fr'
            }
        }

        configuration.set('app.name', 'Meast', true);
        configuration.set('user.name', 'Hello world', true, ConfigurationNamespaces.USER);
        configuration.flush(ConfigurationNamespaces.DEFAULT);

        const defaultContent = fs.readFileSync(join(__dirname, './test_files/config.json'));
        const userContent = fs.readFileSync(join(__dirname, './test_files/data.json'));

        expect(JSON.parse(defaultContent.toString())).toEqual(config);
        expect(JSON.parse(userContent.toString())).toEqual(user);
    });

    it('should write all config files when flush method is called without parameters', () => {
        const configuration = new ConfigurationManager<ConfigurationNamespaces>(ConfigurationNamespaces.DEFAULT);
        configuration.addFiles({
            path: join(__dirname, './test_files/config.json'),
            namespace: ConfigurationNamespaces.DEFAULT
        }, {
            path: join(__dirname, './test_files/data.json'),
            namespace: ConfigurationNamespaces.USER
        }).parseConfig();

        const config = {
            hello: 'world',
            name: 'Meast',
            app: {
                name: 'Meast'
            }
        };

        const user = {
            user: {
                id: 1,
                name: 'Hello world',
                email: 'john@doe.fr'
            }
        }

        configuration.set('app.name', 'Meast', true);
        configuration.set('user.name', 'Hello world', true, ConfigurationNamespaces.USER);
        configuration.flush();

        const defaultContent = fs.readFileSync(join(__dirname, './test_files/config.json'));
        const userContent = fs.readFileSync(join(__dirname, './test_files/data.json'));

        expect(JSON.parse(defaultContent.toString())).toEqual(config);
        expect(JSON.parse(userContent.toString())).toEqual(user);
    });
});