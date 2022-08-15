import type EvolvClient from '@evolv/client';

export interface EvolvContextInterface {
  client?: EvolvClient
}

export interface IEvolvGroups {
  [groupKey: string]: IEvolvVariables
}

export interface IEvolvVariables {
  [variableKey: string]: any
}

export interface variableIsType {
  [key: string]: boolean
}

export interface variableDataInterface {
  exists: boolean
  activeVariant: string | null
  is: variableIsType
}
export interface EvolvSdkOptions {
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

export interface EvolvClientOptions {
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
