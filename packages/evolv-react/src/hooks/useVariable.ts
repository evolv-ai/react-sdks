import React, { useContext, useState, useEffect } from "react"
// import { EvolvContextInterface } from "@types";
import { EvolvContext } from "../components/EvolvContext"

export function useVariable<T = any>(key: string, initialState: T): T {
  const { client }: any = useContext(EvolvContext);
  const [value, setValue] = useState(client.evolvState[key] || initialState);
  const initalSt = client.evolvState[key] || initialState; 

  useEffect(() => {
    client.subscribeToKey(key, (result: T) => {
      console.log(key, result);
      const newValue = result === undefined ? initalSt : result;
      setValue(newValue);
    });
  }, [client, client.evolvState]);

  return value;
}
