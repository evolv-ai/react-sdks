import { EvolvClientOptions, EvolvProvider as EvolvClientProvider } from '@evolv/react';
import React, { createContext, FC, useContext, useState } from 'react';

import { ClientAdapter } from '../client.adapter.js';


const EvolvContext = createContext<ClientAdapter | null>(null);

interface Props {
	options: EvolvClientOptions;
	uid: string;
	hydratedState: Record<string, any>;
	debug?: boolean;
}

export const EvolvProvider: FC<Props> =
    ({ children, uid, options, hydratedState, debug = false }) => {
		const [adapter] = useState(() => {
			const instance = new ClientAdapter(options, hydratedState);

			instance.initialize(uid);

			return instance;
		});

	    if (!adapter.isServer) {
		    globalThis.evolv ??= {};
		    globalThis.evolv.client = adapter.client;
		    globalThis.evolv.context = adapter.client.context;

			if (debug) {
				console.group('Evolv NextJS');
				console.debug('Hydrated State:', hydratedState);
				console.groupEnd();
			}
	    }

        return (
			<EvolvClientProvider client={adapter.client} uid={uid}>
				<EvolvContext.Provider value={adapter}>
					{children}
				</EvolvContext.Provider>
			</EvolvClientProvider>
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
