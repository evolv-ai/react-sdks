import { useState, useEffect } from 'react';

import { useEvolv } from '../components/index.js';

/**
 * Hook that returns the variant allocated to the current user for the given variable.
 *
 * @param key Name of variable
 * @param initialState Value to use before Evolv initializes or in the event of an error
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
