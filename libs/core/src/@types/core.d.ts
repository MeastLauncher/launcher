import decompress from 'decompress';
import {RouteObject} from 'react-router-dom';

/*
 * Configuration
 */

export declare type ConfigurationFile<T> = {
    path: string;
    namespace: T;
}

export declare type ParsedConfig<T extends string | number | symbol> = {
    [namespace in T]?: object;
}

export declare type MeastModule = {
    name: string,
    identifier: string,
    version: string,
    routes: RouteObject[],
    onModuleLoad: (setMessage: (message: string) => void) => void,
    onModuleUnload: () => void
}

/**
 * This class is used to manage the configuration of the launcher
 */
export declare class ConfigurationManager<Namespaces extends string> {
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


/*
 * Module loading
 */
export declare class ModuleLoader {
    constructor (
        filePath: string,
        extractPath: string | undefined
    );

    /**
     * Extract the given module to a directory
     *
     * @param extractPath The path where to extract the module
     * @param onFinish a function called when the extract finish
     * @param onError a function called when error occurred
     * @param deleteBeforeIfExists If the folder needs to be deleted before extraction if exists
     */
    extractModule (
        extractPath: string,
        onFinish: (files: decompress.File[]) => void,
        onError: (error: Error) => void,
        deleteBeforeIfExists: boolean
    ): Promise<void>;

    /**
     * Check if the extracted modules files are valid according to its hash in the integrity.json file
     */
    checkModuleIntegrity (): boolean;

    /**
     * Run the module loading function used to register the electron handler's or any backend code
     *
     * @param setMessage The function to display message on the splash screen
     */
    runModuleLoadFunction (setMessage: (message: string) => void): Promise<void>;

    /**
     * Run the unload module function
     */
    runModuleUnloadFunction (): Promise<void>;

    /**
     * Register the routes used to navigate between the screens of the module (react-router-dom)
     */
    registerModuleRoutes (routes: RouteObject[]): Promise<RouteObject[]>;
}

/*
 * Helpers
 */

/**
 * List all files recursively in a folder
 */
export declare const listFilesRecursively: (dirPath, arrayOfFiles: string[]) => string[];

/**
 * Create the SHA-256 hash of a file
 */
export declare const createFileHash: (filePath: string) => string;

/**
 * Validate the SHA-256 hash of a file
 */
export declare const checkFileHash: (filePath: string, hash: string) => boolean;
