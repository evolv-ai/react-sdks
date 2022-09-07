import { useEffect, useState } from 'react';
import { useEvolv } from '../components/index.js';

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
