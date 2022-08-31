import EvolvClient, { EvolvClientOptions, RemoteContext, LocalContext } from '@evolv/client';
import React, { createContext, FC, useContext, useState } from 'react';


const EvolvContext = createContext<EvolvClient | null>(null);

interface BaseProps {
	options: EvolvClientOptions;
	uid: string;
	remoteContext?: RemoteContext;
	localContext?: LocalContext;
}

type Props =
	| BaseProps
	| { client: EvolvClient };

export const EvolvProvider: FC<Props> =
    (props) => {
		const [client] = useState(() => {
			if ('client' in props) {
				return props.client;
			}

			const { options, uid, remoteContext, localContext } = props;
			const instance: EvolvClient = new EvolvClient(options);

			instance.initialize(uid, remoteContext, localContext);

			if (typeof window !== 'undefined') {
				window.evolv ??= {} as any;
				window.evolv.client = instance;
				window.evolv.context = instance.context;
			}

			return instance;
		});

        return (
            <EvolvContext.Provider value={client}>
                {props.children}
            </EvolvContext.Provider>
        );
    };

export const EvolvConsumer: FC<{ children: (client: EvolvClient) => JSX.Element }> =
    ({ children }) => (
        <EvolvContext.Consumer>
            {client => {
                if (!client) {
                    throw new Error('EvolvConsumer must be used within an EvolvProvider');
                }

                return children(client);
            }}
        </EvolvContext.Consumer>
    );

export function useEvolv(): EvolvClient {
    const client = useContext(EvolvContext);

    if (!client) {
        throw new Error('useEvolv() must be used within an EvolvProvider');
    }

    return client;
}
