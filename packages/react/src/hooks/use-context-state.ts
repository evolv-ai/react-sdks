import { Dispatch, useEffect, useState } from 'react';
import { useEvolv } from '../components/index.js';

/**
 * Hook similar to React's useState() which returns a tuple containing a getter and setter.
 *
 * @description
 * Hook sets a value on the Evolv context and will trigger a reaction that reevaluates variables based on the new context
 *
 * @param key Name of variable
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useContextState<T = any>(key: string): [T, Dispatch<T>] {
	const { client } = useEvolv();
	const [value, setValue] = useState(() => {
		return client.context.get(key);
	});

	useEffect(() => {
		client.on('context.changed', () => {
			setValue(client.context.get(key));
		});
	}, [key]);

	const setter = (value: T) => {
		client.context.set(key, value);
	};

	return [value, setter];
}
