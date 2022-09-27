import { useState, useEffect } from 'react';
import { useEvolv } from '../components/index.js';

/**
 * Hook that returns whether the given key is active or not.
 *
 * @param key Name of variable
 */
export function useIsKeyActive(key: string): boolean {
	const { client } = useEvolv();
	const [value, setValue] = useState(false);

	useEffect(() =>
		client.isActive(key).listen(active => {
			setValue(active);
		})
	, [key]);

	return value;
}
