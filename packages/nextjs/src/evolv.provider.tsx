import { ClientAdapter, EvolvProvider as ReactEvolvProvider, EvolvProviderProps } from '@evolv/react';
import React, { FC, useEffect, useRef } from 'react';

import { getClientName } from './utils/index.js';


export const EvolvProvider: FC<EvolvProviderProps> =
	({ options, ...props }) => {
		const ref = useRef<ClientAdapter>();

		useEffect(() => {
			if (ref.current) {
				globalThis.evolv.onSsrClientInitialized?.();
			}
		}, [ref.current]);

		return (
			<ReactEvolvProvider
				{...props}
				adapterRef={ref}
				options={{
					...options,
					clientName: getClientName()
				}}
			/>
		);
	};
