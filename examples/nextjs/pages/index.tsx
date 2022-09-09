import { EvolvClientOptions, EvolvProvider, EvolvServerSideProps, getEvolvServerSideProps, RemoteContext } from '@evolv/nextjs';
import { GetServerSidePropsContext } from 'next';
import { FC } from 'react';

import { StoreCidCookie, getUserIdProps, UserIdProps } from '../utils';
import Button from './button';
import Heading from './heading';


const options: EvolvClientOptions = JSON.parse(process.env.NEXT_PUBLIC_EVOLV_CONFIG ?? '{}');

const Home: FC<EvolvServerSideProps & UserIdProps> = (props) => {
	return (
		<EvolvProvider
			options={options}
			uid={props.uid}
			hydratedState={props.hydratedState}
			remoteContext={props.remoteContext}
		>
			{/* Use a component such as this to save the CID in a cookie */}
			<StoreCidCookie />

			<Heading />
			<Button />
		</EvolvProvider>
	);
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
	const remoteContext: Partial<RemoteContext> = {
		browser: 'chrome',
		device: 'desktop',
		geo: {
			city: 'San Francisco',
			country: 'US',
			lat: '37.789640',
			lon: '-122.401450',
			metro: '807',
			postal: '94104',
			region: 'CA',
			tz: 'America/Los_Angeles'
		}
	};

	const { props: { uid } } = await getUserIdProps(ctx);
	const { props: evolvProps } = await getEvolvServerSideProps({ client: options, uid, remoteContext }, ctx);

	return {
		props: {
			...evolvProps,
			uid
		}
	};
}

export default Home;
