import React from 'react';
import { EvolvClient } from '@evolv/client';

interface EvolvContextInterface {
    client?: EvolvClient;
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

declare const EvolvContext: React.Context<EvolvContextInterface>;
interface EvolvProviderProps {
    client?: EvolvClient;
}
declare const EvolvProvider: ({ children, client }: React.PropsWithChildren<EvolvProviderProps>) => JSX.Element;

declare function useVariable<T = any>(variableName: string, control: T): T;

export { EvolvContext, EvolvContextInterface, EvolvProvider, EvolvProviderProps, IEvolvGroups, IEvolvVariables, useVariable, variableDataInterface, variableIsType };
