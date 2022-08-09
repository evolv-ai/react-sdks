import React, { useContext } from 'react'
import EvolvClient from "@evolv/javascript-sdk";

import { EvolvContextInterface } from '../';

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
export const useEvolvClient = () => {
  const client = useContext(EvolvContext);
  return client;
}