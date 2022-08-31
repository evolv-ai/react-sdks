import { useState, useEffect } from 'react';
import { useEvolv } from '../components';


export function useIsKeyActive(key: string): boolean {
	const client = useEvolv();
	const [value, setValue] = useState(false);

	useEffect(() =>
		client.isActive(key).listen(active => {
			setValue(active);
		})
	, [key]);

	return value;
}
