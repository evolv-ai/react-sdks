declare module '@evolv/javascript-sdk' {

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
  
  class EvolvSdk {
    constructor(options: EvolvSdkOptions): EvolvSdk;
    get: (key: string) => Promise<any>
    initialize: (sessionId: string, userId: string) => void
    confirm: () => Promise<any>
    emit: (event: string) => Promise<any>
  }

  export default EvolvSdk;
}