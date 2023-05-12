import { ClientAdapter, debug as Debug, EvolvClientOptions, LocalContext, RemoteContext } from '@evolv/react';
import { GetServerSidePropsContext } from 'next';
import { GetServerSidePropsResult } from 'next/types';

import { getClientName, wait } from './utils/index.js';


const DEFAULT_SERVER_SIDE_TIMEOUT = 300; // Milliseconds

export interface EvolvOptions {
	uid: string;
	client: EvolvClientOptions;
	/**
	 * Duration in milliseconds after which server-side hydration of allocated variants will be skipped, and fallback
	 * variants will be used instead for server-side rendering. Variant allocation will still occur on the client-side
	 * but may exhibit flash as the client replaces the values rendered by the server.
	 * @default 200
	 */
	serverSideTimeout?: number;
	remoteContext?: Partial<RemoteContext>;
	localContext?: Partial<LocalContext>;
}

type PropsFactory<T extends GetServerSidePropsResult<any>> = (ctx: GetServerSidePropsContext) => Promise<T>;

export interface EvolvServerSideProps {
	hydratedState: Record<string, any>;
	remoteContext?: Partial<RemoteContext>;
}

interface Result {
	props: EvolvServerSideProps;
}

/**
 * Server-side loader function that builds out the necessary data needed to hydrate page during rendering. The
 * return value of this function will become the value of `props` that is passed to the page component.
 *
 * @description
 * If a page does not need to export its own `getServerSideProps()` function, use the shorter form shown in the first example.
 * If a page does need to export its own `getServerSideProps()` function, use the longer form inside the page's
 * `getServerSideProps()` function to merge together page props and Evolv props.
 *
 * @example
 * export const getServerSideProps = getEvolvServerSideProps(options);
 *
 * @example
 * export function getServerSideProps(ctx) {
 *     const pageProps = {};
 *     const { props: evolvProps } = await getEvolvServerSideProps(options, ctx);
 *
 *     return {
 *         props: {
 *             ...pageProps
 *             ...evolvProps
 *         }
 *     };
 * }
 */
export function getEvolvServerSideProps(options: EvolvOptions): PropsFactory<Result>;
export function getEvolvServerSideProps(options: EvolvOptions, ctx: GetServerSidePropsContext): Promise<Result>;
export function getEvolvServerSideProps(options: EvolvOptions, ctx?: GetServerSidePropsContext): Promise<Result> | PropsFactory<Result> {
	const debug = Debug('server-side-props');

	const factory = async (ctx: GetServerSidePropsContext) => {
		const opts = {
			serverSideTimeout: DEFAULT_SERVER_SIDE_TIMEOUT,
			...options
		};

		const adapter = new ClientAdapter({
			...opts.client,
			clientName: getClientName()
		});

		adapter.initialize(opts.uid, opts.remoteContext, opts.localContext);

		debug('Hydrating');

		const hydrated = await Promise.race([
			adapter.hydrate().then(() => true),
			wait(opts.serverSideTimeout).then(() => false)
		]);

		if (hydrated) {
			debug('Hydrated');
		} else {
			debug('Timeout elapsed before hydration completed. Rendering on server-side will use fallback values instead');
		}

		return {
			props: {
				hydratedState: hydrated ? adapter.hydratedState : {},
				remoteContext: opts.remoteContext ?? {}
			}
		};
	};

	return ctx
		? factory(ctx)
		: factory;
}
