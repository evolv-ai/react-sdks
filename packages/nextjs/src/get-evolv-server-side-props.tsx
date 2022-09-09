import { ClientAdapter, EvolvClientOptions, LocalContext, RemoteContext } from '@evolv/react';
import { GetServerSidePropsContext } from 'next';
import { GetServerSidePropsResult } from 'next/types';


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
 *
 * @example
 * export const getServerSideProps = getEvolvServerSideProps(options);
 *
 * @example
 * export function getServerSideProps(ctx) {
 *     const { props: evolvProps } = await getEvolvServerSideProps(options, ctx);
 *     return {
 *         props: evolvProps
 *     };
 * }
 */
export function getEvolvServerSideProps(options: EvolvOptions): PropsFactory<Result>;
export function getEvolvServerSideProps(options: EvolvOptions, ctx: GetServerSidePropsContext): Promise<Result>;
export function getEvolvServerSideProps(options: EvolvOptions, ctx?: GetServerSidePropsContext): Promise<Result> | PropsFactory<Result> {
	const factory = async (ctx: GetServerSidePropsContext) => {
		const adapter = new ClientAdapter(options.client);

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
