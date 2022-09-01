import { useEffect, useState } from 'react';
import { useEvolv } from '../components/index.js';

export function useConfig<T = any>(key: string, initialState: T): { value: T, error: Error | null } {
	const client = useEvolv();
	const [value, setValue] = useState(initialState);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() =>
		client.getConfig(key).listen((valueOrError) => {
			if (valueOrError instanceof Error) {
				setError(valueOrError);
				return;
			}

			setValue(valueOrError ?? initialState);
		})
	, [key]);

	return { value, error };
}
