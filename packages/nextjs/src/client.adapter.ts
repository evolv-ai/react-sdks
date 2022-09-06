import { EvolvClient, EvolvClientOptions } from '@evolv/react';


export class ClientAdapter {
	private _client: EvolvClient;

	get client() {
		return this._client;
	}

	private _evolvState: Record<string, any> = {};

	get evolvState() {
		return this._evolvState;
	}

	get isBrowser() {
		return typeof window !== 'undefined';
	}

	get isServer() {
		return !this.isBrowser;
	}

	public subscribers: Record<string, Function[]> = {};

	constructor(
		private readonly options: EvolvClientOptions,
		public readonly hydratedState?: Record<string, any>
	) {
		this._evolvState = hydratedState ?? {};

		this._client = new EvolvClient({
			autoConfirm: this.isBrowser,
			analytics: true,
			clientName: 'react-sdk',
			...options
		});
	}

	initialize(uid: string, remoteContext?: any, localContext?: any) {
		this.client.initialize(uid, remoteContext, localContext);
	}

	async getKeys(): Promise<void> {
		const keys = await this.client.getActiveKeys();

		if (keys.current) {
			for (const key of keys.current) {
				this.evolvState[key] = await this.client.get(key);
			}
		}
	}

	public subscribeToKey(key: string, cb: Function) {
		if (this.subscribers[key]) {
			this.subscribers[key].push(cb);
		} else {
			this.subscribers[key] = [cb];
		}
		if (!this.isServer && this.evolvState[key]) {
			cb(this.evolvState[key]);
		}
		this.listenToKeys();
	}

	public listenToKeys() {
		Object.keys(this.subscribers).forEach(key => {
			this.client.get(key).listen((result: any) => {
				this.subscribers[key].forEach(c => c(result));
			});
		});
	}

	emit(event: string): void {
		this.client.emit(event);
	}
}
