import {RouteObject} from 'react-router-dom';

export type MeastModule = {
    name: string,
    identifier: string,
    version: string,
    routes: RouteObject[],
    onModuleLoad: (setMessage: (message: string) => void) => void,
    onModuleUnload: () => void
}

export type ConfigurationFile<T> = {
    path: string;
    namespace: T;
}

export type ParsedConfig<T extends string | number | symbol> = {
    [namespace in T]?: object;
}