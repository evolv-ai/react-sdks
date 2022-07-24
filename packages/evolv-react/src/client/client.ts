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
  public subscribers: {
    [key: string]: {
      [suscriberKey: string]: Function
    }
  };

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
    const id = Math.random().toString(36).substring(7);
    if (this.subscribers[key]) {
      this.subscribers[key][id] = cb;
    } else {
      this.subscribers[key] = {[id]: cb};
      this.listenToKey(key);
    }
    if (!this.isServer && this.evolvState[key]) {
      cb(this.evolvState[key]);
    }
    return id;
  }

  public unsubscribeFromKey = (key: string, id: string) => {
    if (this.subscribers[key]) {
      delete this.subscribers[key][id];
    }
  }

  public listenToKey = (key: string) => {
    this.client.get(key).listen((value: any) => {
      this.evolvState[key] = value;
      if (this.subscribers[key]) {
        Object.values(this.subscribers[key]).forEach(cb => cb(value));
      }
    })
  }

  public emit = (event: string): void => {
    this.client.emit(event);
  }
}
