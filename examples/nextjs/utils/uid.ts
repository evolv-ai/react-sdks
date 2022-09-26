import { useEvolv } from '@evolv/nextjs';
import { getCookie, setCookie } from 'cookies-next';
import { GetServerSidePropsContext } from 'next';
import { FC, useEffect } from 'react';
import { generateId } from './generate-id';


const UID_COOKIE_KEY = 'evolv:uid';
const CID_COOKIE_KEY = 'evolv:cid';

export interface UserIdProps {
	uid: string;
}

interface Result {
	props: UserIdProps;
}

export async function getUserIdProps({ req, res }: GetServerSidePropsContext): Promise<Result> {
	const isServer = !!req;
	let uid: string = isServer
		? req.cookies[UID_COOKIE_KEY]
		: getCookie(UID_COOKIE_KEY) as string;

	if (!uid) {
		uid = generateId();
		setCookie(UID_COOKIE_KEY, uid, { req, res, maxAge: 60 * 6 * 24 });
	}

	return {
		props: { uid }
	};
}

export function useCidCookie() {
	const { client, isBrowser } = useEvolv();

	useEffect(() => {
		if (isBrowser) {
			client.on('confirmed', () => {
				const cid = client.context.remoteContext.confirmations?.[0]?.cid;
				setCookie(CID_COOKIE_KEY, cid, { maxAge: 60 * 6 * 24 });
			});
		}
	}, []);
}

export const StoreCidCookie: FC = () => {
	useCidCookie();
	return null;
};
