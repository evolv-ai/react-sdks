import { EvolvProvider as ReactEvolvProvider, EvolvProviderProps } from '@evolv/react';
import React, { FC } from 'react';

import { getClientName } from './utils/index.js';


export const EvolvProvider: FC<EvolvProviderProps> =
	({ options, ...props }) => (
		<ReactEvolvProvider
			{...props}
			options={{
				...options,
				clientName: getClientName(),
				pollForTimeUpdates: false,
			}}
		/>
	);
