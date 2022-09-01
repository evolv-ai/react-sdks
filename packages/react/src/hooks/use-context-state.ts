import { Dispatch, useEffect, useState } from 'react';
import { useEvolv } from '../components/index.js';


export function useContextState<T = any>(key: string): [T, Dispatch<T>] {
	const client = useEvolv();
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
