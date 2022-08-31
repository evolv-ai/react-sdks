import { useState, useEffect } from 'react';
import { useEvolv } from '../components';


export function useVariable<T = any>(key: string, initialState: T): { value: T, error: Error | null } {
  const client = useEvolv();
  const [value, setValue] = useState(initialState);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() =>
	  client.get(key).listen((valueOrError) => {
		  if (valueOrError instanceof Error) {
			  setError(valueOrError);
			  return;
		  }

		  setValue(valueOrError ?? initialState);
	  })
  , [key]);

  return { value, error };
}
