import { ulid } from 'ulid'

import EvolvSdk from '@evolv/javascript-sdk';

export interface getSdkOptions {
  enviromentId: string;
  sessionId?: string;
  userId?: string;
  useSessions?: boolean;
}

const sdkDefaultConfig = {
  endpoint: 'https://participants.evolv.ai/',
  uid: undefined,
  sid: undefined,
  lazyUid: false,
  requireConsent: false,
  useCookies: undefined,
  js: false,
  css: false,
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
  console.log('options:', options);

  console.log('useSessions:', options.useSessions);
  let sessionId, userId;
  if (options.useSessions) {
    sessionId = sessionStorage.getItem('evolv:sid');
    if (!sessionId) {
      sessionId = ulid();
      sessionStorage.setItem('evolv:sid', sessionId);
    }
    userId = sessionStorage.getItem('evolv:uid');
    if (!userId) {
      userId = ulid();
      sessionStorage.setItem('evolv:uid', userId);
    }
    console.log('useSessionssss:', userId, sessionId);
  } else {
    sessionId = sdkOptions.sid || ulid();
    userId = sdkOptions.uid || ulid();

    console.log('nooope:', userId, sessionId);
  }

  sdk.initialize(sessionId, userId);
  return {
    sdk,
    sessionId,
    userId,
  }
}