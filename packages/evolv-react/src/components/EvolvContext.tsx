import React from 'react'

import type { EvolvClient } from '@evolv-delivery-tools/client';

import { EvolvContextInterface } from '@types';

const defaultStore: EvolvContextInterface = {
}

export const EvolvContext = React.createContext<EvolvContextInterface>(defaultStore)

export interface EvolvProviderProps {
  client?: EvolvClient
}

export const EvolvProvider = ({ children, client }: React.PropsWithChildren<EvolvProviderProps>) => {
  return (
    <EvolvContext.Provider value={{ client }}>
      {children}
    </EvolvContext.Provider>
  )
}