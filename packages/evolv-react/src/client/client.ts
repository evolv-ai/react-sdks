import EvolvSdk from "@evolv/javascript-sdk";
import { EvolvClientOptions } from '@types';

export class EvolvClient {
  public client: EvolvSdk;
  public context: any;

  public options: EvolvClientOptions;
  public environmentId: string;
  public userId: string;
  public isServer?: Boolean;
  public evolvState: any = {};
  public subscribers: { [key: string]: Function[] };

  constructor(options: EvolvClientOptions) {
    this.options = options;
    this.isServer = options.isServer || false;
    this.environmentId = options.environmentId;
    this.userId = options.userId;
    this.evolvState = options.initialState || {};
    this.subscribers = {};

    if (!options.environmentId || `${options.environmentId}` === 'false' || `${options.environmentId}` === 'null') {
      throw new Error(`EvolvClient: Must pass 'environmentId'`);
    }

    if (!options.userId || `${options.userId}` === 'false' || `${options.userId}` === 'null') {
        throw new Error(`EvolvClient: Must pass 'userId'`);
    }

    this.client = new EvolvSdk({
        environment: this.environmentId,
        autoConfirm: true,
        analytics: true,
        clientName: 'react-sdk'
    });

    this.client.initialize(this.userId, this.userId);
  }

  public getKeys = async () => {
    const keys = await this.client.getActiveKeys();
    if (keys.current) {
      for (let i = 0; i < keys.current.length; i++) {
        const key = keys.current[i];
        this.evolvState[key] = await this.client.get(key);
      }
    }
  }

  public getVariableByKey = async (key: string) => await this.client.get(key);

  public subscribeToKey = (key:string, cb: Function) => {
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

  public listenToKeys = () => {
    Object.keys(this.subscribers).forEach(key => {
      this.client.get(key).listen((result: any) => {
        this.subscribers[key].forEach(c => c(result));
      });
    });
  }

  public emit = (event: string): void => {
    this.client.emit(event);
  }
}
