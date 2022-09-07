import { ClientAdapter, EvolvClientOptions } from '@evolv/react';
import { GetServerSidePropsContext } from 'next';
import { GetServerSidePropsResult } from 'next/types';

//import { ClientAdapter } from '../client.adapter.js';


export interface EvolvOptions {
	uid: string;
	client: EvolvClientOptions;
}

type PropsFactory<T extends GetServerSidePropsResult<any>> = (ctx: GetServerSidePropsContext) => Promise<T>;

export interface EvolvServerSideProps {
	hydratedState: Record<string, any>;
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

		adapter.initialize(options.uid);

		await adapter.hydrate();

		return {
			props: {
				hydratedState: adapter.hydratedState
			}
		};
	};

	return ctx
		? factory(ctx)
		: factory;
}
