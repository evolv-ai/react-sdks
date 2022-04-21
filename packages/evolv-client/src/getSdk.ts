import { ulid } from 'ulid'

import EvolvSdk from '@evolv/javascript-sdk';

export interface getSdkOptions {
  enviromentId: string;
  sessionId?: string;
  userId?: string;
}

const sdkDefaultConfig = {
  endpoint: 'https://participants.evolv.ai/',
  uid: undefined,
  sid: undefined,
  lazyUid: false,
  requireConsent: false,
  useCookies: undefined,
  js: true,
  css: true,
  pushstate: false,
  timeout: undefined
};

export const getSdk = (options: getSdkOptions) => {
  let sdkOptions = {
    ...sdkDefaultConfig,
    environment: options.enviromentId,
    version: 1,
    autoConfirm: false,
    analytics: false,
    bufferEvents: false,
    clientName: 'react-sdk',
    hooks: {}
  };
  const sdk = new EvolvSdk(sdkOptions);
  const sessionId = options.sessionId || ulid();
  const userId = options.enviromentId ||  ulid();
  sdk.initialize(sessionId, userId);
  return {
    sdk,
    sessionId,
    userId,
  }
}