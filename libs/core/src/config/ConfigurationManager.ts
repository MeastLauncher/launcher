import {ConfigurationFile, ParsedConfig} from '@/@types/core';
import * as fs from 'fs';

export class ConfigurationManager<Namespaces extends string> {
    private files: Map<Namespaces, string> = new Map<Namespaces, string>();
    private parsedConfig: ParsedConfig<Namespaces> = {};

    constructor (
        private defaultNamespace: Namespaces
    ) {
    }

     addFile (path: string, namespace: Namespaces): this {
        if (!fs.existsSync(path)) {
            throw new Error(`The specified file "${path}" does not exists`)
        }

        this.files.set(namespace, path);

        return this;
    }

     addFiles (...files: ConfigurationFile<Namespaces>[]): this {
        files.forEach(f => {
            this.addFile(f.path, f.namespace);
        })

        return this;
    }

     parseConfig (): void {
        this.files.forEach((f, k) => {
            const buffer = fs.readFileSync(f, 'utf8');
            this.parsedConfig[k] = JSON.parse(buffer.toString());
        });
    }

     get<T> (key: string, namespace: Namespaces = this.defaultNamespace): T {
        return key.split('.').reduce((prev, cur) => prev[cur], this.parsedConfig[namespace]);
    }

     set (key: string, value: unknown, queue: boolean = false, namespace: Namespaces = this.defaultNamespace): void {
        const keys = key.split('.');
        const last = keys.pop();
        keys.reduce((o, k) => o[k] ??= {}, this.parsedConfig[namespace])[last] = value;

        if (!queue) {
            this.flush(namespace);
        }
    }

     flush (namespace: Namespaces | Namespaces[] = null): void {
        const write = (namespace: Namespaces) => {
            fs.writeFileSync(
                this.files.get(namespace),
                JSON.stringify(this.parsedConfig[namespace], null, 4)
            );
        }

        if (namespace && typeof namespace !== 'object') {
            write(namespace);
            return;
        } else if (namespace && typeof namespace === 'object') {
            namespace.forEach(n => {
                write(n);
            });
        }

        Object.entries(this.parsedConfig).forEach(c => {
            fs.writeFileSync(
                this.files.get((c[0] as Namespaces)),
                JSON.stringify(c[1], null, 4)
            );
        });
    }
}