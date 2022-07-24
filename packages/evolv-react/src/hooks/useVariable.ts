import React, { useState, useEffect } from "react";
import { useEvolvClient } from "../components/EvolvContext";

export function useVariable<T = any>(key: string, initialState: T): T {
  const { client }: any = useEvolvClient();

  const [value, setValue] = useState(client.evolvState[key] || initialState);
  const initalSt = client.evolvState[key] || initialState; 

  useEffect(() => {
    const callbackId = client.subscribeToKey(key, (result: T) => {
      console.log(key, result);
      const newValue = result === undefined ? initalSt : result;
      setValue(newValue);
    });
    return () => {
      client.unsubscribeFromKey(key, callbackId);
    }
  }, []);

  return value;
}
