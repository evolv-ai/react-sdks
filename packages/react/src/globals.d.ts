import type EvolvClient, { Context } from '@evolv/client';

declare global {
	interface Window {
		evolv: {
			client: EvolvClient;
			context: Context;
			ssr: boolean;
			onSsrClientInitialized: () => void;
		};
	}
}

export {};
