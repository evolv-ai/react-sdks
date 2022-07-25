import * as React from 'react';
import React__default from 'react';
import EvolvClient$1 from '@evolv/javascript-sdk';

interface EvolvContextInterface {
    client?: EvolvClient$1;
}
interface IEvolvGroups {
    [groupKey: string]: IEvolvVariables;
}
interface IEvolvVariables {
    [variableKey: string]: any;
}
interface variableIsType {
    [key: string]: boolean;
}
interface variableDataInterface {
    exists: boolean;
    activeVariant: string | null;
    is: variableIsType;
}
interface EvolvSdkOptions {
    environment: string;
    endpoint: string;
    lazyUid: boolean;
    requireConsent: boolean;
    js: boolean;
    css: boolean;
    pushstate: boolean;
    version: number;
    autoConfirm: boolean;
    analytics: boolean;
    bufferEvents: boolean;
    clientName: string;
    uid?: string;
    sid?: string;
    useCookies?: boolean;
    timeout?: number;
    hooks: {};
}
interface EvolvClientOptions {
    environmentId: string;
    userId?: string;
    generateUid: boolean;
    isServer?: Boolean;
    initialState?: any;
    serverContext?: any;
}
declare global {
    namespace React {
        interface ComponentClass<P = {}> {
            getInitialProps?(ctx: any): any;
        }
        interface FunctionComponent<P = {}> {
            getInitialProps?(ctx: any): any;
        }
    }
}

declare const EvolvContext: React__default.Context<EvolvContextInterface>;
interface EvolvProviderProps {
    client?: EvolvClient$1;
}
declare const EvolvProvider: ({ children, client }: React__default.PropsWithChildren<EvolvProviderProps>) => JSX.Element;
declare const useEvolvClient: () => EvolvContextInterface;

declare function withEvolvServer<T>(options: EvolvClientOptions): (WrappedComponent: React.ComponentType<T>) => React.ComponentType<T>;
declare function withEvolvSSR<T>(options: EvolvClientOptions): (WrappedComponent: React.ComponentType<T>) => React.ComponentType<T>;
declare function withEvolv<T>(options: EvolvClientOptions): (WrappedComponent: React.ComponentType<T>) => React.ComponentType<T>;

declare function useVariable<T = any>(key: string, initialState: T): T;

declare class EvolvClient {
    client: EvolvClient$1;
    context: any;
    options: EvolvClientOptions;
    environmentId: string;
    userId?: string;
    isServer?: Boolean;
    evolvState: any;
    serverContext: any;
    subscribers: {
        [key: string]: Function[];
    };
    constructor(options: EvolvClientOptions);
    setCidCookie: () => void;
    getKeys: () => Promise<void>;
    getVariableByKey: (key: string) => Promise<any>;
    subscribeToKey: (key: string, cb: Function) => void;
    listenToKeys: () => void;
    emit: (event: string) => void;
}
declare function generateId(): string;

export { EvolvClient, EvolvClientOptions, EvolvContext, EvolvContextInterface, EvolvProvider, EvolvProviderProps, EvolvSdkOptions, IEvolvGroups, IEvolvVariables, generateId, useEvolvClient, useVariable, variableDataInterface, variableIsType, withEvolv, withEvolvSSR, withEvolvServer };
