import type { GetServerSidePropsContext, NextPage } from 'next';
import { EvolvClientOptions, LocalContext, RemoteContext } from '@evolv/client';
import { EvolvProvider, EvolvServerSideProps, getEvolvServerSideProps } from '@evolv/nextjs';
import Button from '../components/Button';
import { getUserIdProps, UserIdProps } from '../utils';


const options: EvolvClientOptions = {
	environment: 'a925240014'
};

const Home: NextPage<EvolvServerSideProps & UserIdProps> = (props) => {
	return (
		<EvolvProvider
			options={options}
			uid={props.uid}
			hydratedState={props.hydratedState}
			remoteContext={props.remoteContext}
		>
			<Button/>
		</EvolvProvider>
	);
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
	const remoteContext: Partial<RemoteContext> = {
		customizeButton: false
	};
	const localContext: LocalContext = {};

	const { props: { uid }} = await getUserIdProps(ctx);
	const { props: evolvProps } = await getEvolvServerSideProps({
		client: options,
		uid,
		remoteContext,
	}, ctx);

	return {
		props: {
			...evolvProps,
			uid
		}
	};
}

export default Home;
