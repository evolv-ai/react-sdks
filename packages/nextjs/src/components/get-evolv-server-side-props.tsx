import { EvolvClientOptions } from '@evolv/react';
import { GetServerSidePropsContext } from 'next';
import { GetServerSidePropsResult } from 'next/types';

import { ClientAdapter } from '../client.adapter.js';


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
		const client = new ClientAdapter(options.client);

		client.initialize(options.uid);

		await client.getKeys();

		return {
			props: {
				hydratedState: client.evolvState
			}
		};
	};

	return ctx
		? factory(ctx)
		: factory;
}
