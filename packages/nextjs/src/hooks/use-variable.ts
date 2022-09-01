import { useState, useEffect } from 'react';
import { useEvolv } from '../components/index.js';

export function useVariable<T = any>(key: string, initialState: T): T {
	const client = useEvolv();

	const [value, setValue] = useState(client.evolvState[key] || initialState);
	const initalSt = client.evolvState[key] || initialState;

	useEffect(() => {
		client.subscribeToKey(key, (result: T) => {
			const newValue = result === undefined ? initalSt : result;
			setValue(newValue);
		});
	}, [client, client.evolvState]);

	return value;
}
