import { ClientAdapter, EvolvClientOptions, LocalContext, RemoteContext } from '@evolv/react';
import { GetServerSidePropsContext } from 'next';
import { GetServerSidePropsResult } from 'next/types';

import { getClientName } from './utils/index.js';


export interface EvolvOptions {
	uid: string;
	client: EvolvClientOptions;
	remoteContext?: Partial<RemoteContext>;
	localContext?: Partial<LocalContext>;
}

type PropsFactory<T extends GetServerSidePropsResult<any>> = (ctx: GetServerSidePropsContext) => Promise<T>;

export interface EvolvServerSideProps {
	hydratedState: Record<string, any>;
	remoteContext?: Partial<RemoteContext>;
	localContext?: Partial<LocalContext>;
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
	const factory = async (ctx: GetServerSidePropsContext) => {
		const adapter = new ClientAdapter({
			...options.client,
			clientName: getClientName()
		});

		adapter.initialize(options.uid, options.remoteContext, options.localContext);

		await adapter.hydrate();

		return {
			props: {
				hydratedState: adapter.hydratedState,
				remoteContext: options.remoteContext ?? {},
				localContext: options.localContext ?? {}
			}
		};
	};

	return ctx
		? factory(ctx)
		: factory;
}
