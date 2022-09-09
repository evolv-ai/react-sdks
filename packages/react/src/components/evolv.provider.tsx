import { EvolvClientOptions, RemoteContext, LocalContext } from '@evolv/client';
import React, { createContext, FC, useContext, useState } from 'react';

import { ClientAdapter } from '../client.adapter.js';


const EvolvContext = createContext<ClientAdapter | null>(null);

interface Props {
	options: EvolvClientOptions;
	uid: string;
	hydratedState?: Record<string, any>;
	remoteContext?: Partial<RemoteContext>;
	localContext?: Partial<LocalContext>;
}

export const EvolvProvider: FC<Props> =
	({ children, options, uid, hydratedState, remoteContext, localContext }) => {
		const [adapter] = useState(() => {
			const instance = new ClientAdapter(options, hydratedState);

			instance.initialize(uid, remoteContext, localContext);

			return instance;
		});

		if (adapter.isBrowser) {
			globalThis.evolv ??= {};
			globalThis.evolv.client = adapter.client;
			globalThis.evolv.context = adapter.client.context;
		}

		return (
			<EvolvContext.Provider value={adapter}>
				{children}
			</EvolvContext.Provider>
		);
	};

export const EvolvConsumer: FC<{ children: (client: ClientAdapter) => JSX.Element }> =
	({ children }) => (
		<EvolvContext.Consumer>
			{adapter => {
				if (!adapter) {
					throw new Error('EvolvConsumer must be used within an EvolvProvider');
				}

				return children(adapter);
			}}
		</EvolvContext.Consumer>
	);

export function useEvolv(): ClientAdapter {
	const adapter = useContext(EvolvContext);

	if (!adapter) {
		throw new Error('useEvolv() must be used within an EvolvProvider');
	}

	return adapter;
}