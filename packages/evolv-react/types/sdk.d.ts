declare module '@evolv/javascript-sdk' {
  export interface EvolvSdkOptions {
    environment: string;
    endpoint?: string;
    lazyUid?: boolean;
    requireConsent?: boolean;
    js?: boolean;
    css?: boolean;
    pushstate?: boolean;
    version?: number;
    autoConfirm: boolean;
    analytics: boolean;
    bufferEvents?: boolean;
    clientName: string;
    uid?: string;
    sid?: string;
    useCookies?: boolean;
    timeout?: number;
    hooks?: {};
  }
  
  class EvolvSdk {
    constructor(options: EvolvSdkOptions): EvolvSdk;
    get: (key: string) => Promise<any> | any
    getActiveKeys(keys?: string[]): Promise<any>
    initialize: (sessionId: string, userId: string, remoteContext: any, localContext: any) => void
    confirm: () => void
    emit: (event: string) => void
  }

  export default EvolvSdk;
}