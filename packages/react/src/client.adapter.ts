import EvolvClient, { EvolvClientOptions } from '@evolv/client';


export class ClientAdapter {
	private _client: EvolvClient;

	get client() {
		return this._client;
	}

	private _hydratedState: Record<string, any> = {};

	get hydratedState() {
		return this._hydratedState;
	}

	get isBrowser() {
		return typeof window !== 'undefined';
	}

	constructor(
		private readonly options: EvolvClientOptions,
		hydratedState?: Record<string, any>
	) {
		this._hydratedState = hydratedState ?? {};

		this._client = new EvolvClient({
			autoConfirm: this.isBrowser,
			analytics: true,
			clientName: 'react-sdk',
			omitClientContext: this.isBrowser,
			...options
		});
	}

	initialize(uid: string, remoteContext?: Record<string, any>, localContext?: Record<string, any>) {
		this.client.initialize(uid, remoteContext, localContext);
	}

	async hydrate(): Promise<void> {
		const keys = await this.client.getActiveKeys();

		for (const key of keys.current ?? []) {
			this.hydratedState[key] = await this.client.get(key);
		}
	}

	emit(event: string): void {
		this.client.emit(event);
	}
}
