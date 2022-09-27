import { useEffect, useState } from 'react';
import { useEvolv } from '../components/index.js';

/**
 * Hook that returns the value of the given configuration key.
 *
 * @param key Name of configuration value
 * @param initialState Value to use before Evolv initializes or in the event of an error
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useConfig<T = any>(key: string, initialState: T): T {
	const { client } = useEvolv();
	const [value, setValue] = useState(initialState);

	useEffect(() =>
		client.getConfig(key).listen((val) => {
			setValue(val ?? initialState);
		})
	, [key]);

	return value;
}
