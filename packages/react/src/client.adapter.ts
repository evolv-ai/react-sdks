import EvolvClient, { EvolvClientOptions } from '@evolv/client';
import { debug, Debugger } from './utils/index.js';


export class ClientAdapter {
	private debug: Debugger;
	private _client: EvolvClient;

	get client() {
		return this._client;
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	private _hydratedState: Record<string, any> = {};

	get hydratedState() {
		return this._hydratedState;
	}

	get isBrowser() {
		return typeof window !== 'undefined';
	}

	constructor(
		private readonly options: EvolvClientOptions,
		hydratedState?: Record<string, any> // eslint-disable-line @typescript-eslint/no-explicit-any
	) {
		this.debug = debug('client-adapter');
		this._hydratedState = hydratedState ?? {};

		this._client = new EvolvClient({
			autoConfirm: this.isBrowser,
			analytics: this.isBrowser,
			clientName: 'react-sdk',
			clientType: this.isBrowser ? 'direct' : 'proxied',
			pollForTimeUpdates: this.isBrowser,
			...options
		});
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	initialize(uid: string, remoteContext?: Record<string, any>, localContext?: Record<string, any>) {
		this.client.initialize(uid, remoteContext, localContext);
		this.debug('Client initialized: uid=%s (message will appear once for EvolvProvider and once for getEvolvServerSideProps())', uid);
	}

	async hydrate(): Promise<void> {
		const { current: keys = [] } = await this.client.getActiveKeys();

		this.debug('Active Keys: %o', keys);

		for (const key of keys) {
			const value = await this.client.get(key);

			if (value !== undefined) {
				this.hydratedState[key] = value;
				this.debug('Hydrated key "%s" with value: %o', key, value);
			}
		}
	}

	emit(event: string): void {
		this.client.emit(event);
	}
}
