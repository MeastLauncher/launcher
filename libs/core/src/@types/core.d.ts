export = MeastCore;
export as namespace MeastCore;

declare namespace MeastCore {
    /*
     * Configuration
     */

    type ConfigurationFile<T> = {
        path: string;
        namespace: T;
    }

    type ParsedConfig<T extends string | number | symbol> = {
        [namespace in T]?: object;
    }

    /**
     * This class is used to manage the configuration of the launcher
     */
    class ConfigurationManager<Namespaces extends string> {
        constructor (
            defaultNamespace: Namespaces
        );

        /**
         * Add file to the configuration manager
         * Files must be in JSON format
         *
         * @param path
         * @param namespace
         */
        addFile (path: string, namespace: Namespaces): void

        /**
         * Add multiple files to the configuration manager
         * Files must be in JSON format
         *
         * @param {string[]} files The files to append
         */
        addFiles (...files: ConfigurationFile<Namespaces>[]): void

        /**
         * Get a value from the configuration defined in a namespace
         *
         * @param {string} key The key of the value. Can be nested objects separated with a dot
         * @param namespace The namespace (file) where you want to get the value (default is the namespace defined in the constructor)
         */
        get<T> (key: string, namespace: Namespaces): T

        /**
         * Read configurations files & build the config object
         */
        parseConfig (): void

        /**
         * Set a value in a config namespace
         *
         * @param {string} key The key of the value. Can be nested objects separated with a dot
         * @param {string} value The value you want to set.
         * @param {boolean} queue If the config file should be written immediately (if true, call the `flush()` method to write)
         * @param namespace The namespace (file) where you want to set the value (default is the namespace defined in the constructor)
         */
        set (key: string, value: unknown, queue: boolean, namespace: Namespaces): void

        /**
         * Write config files
         *
         * @param namespace If present, it will only write file associated to the namespace
         */
        flush (namespace?: Namespaces[] | Namespaces): void
    }
}