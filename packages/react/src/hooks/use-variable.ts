import { useState, useEffect } from 'react';

import { useEvolv } from '../components/index.js';


export function useVariable<T = any>(key: string, initialState: T): T {
  const { client, hydratedState } = useEvolv();
  const initialValue = hydratedState[key] ?? initialState;

  const [value, setValue] = useState(initialValue);

  useEffect(() =>
	  client.get(key).listen((val) => {
		  setValue(val ?? initialValue);
	  })
  , [key]);

  return value;
}
