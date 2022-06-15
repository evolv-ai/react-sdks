import type EvolvClient from "@evolv/javascript-sdk"

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
  sessionId: string;
  userId: string;
  isServer: Boolean;
  initialState?: any;
}
