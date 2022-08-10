import EvolvSdk from "@evolv/client";
import { EvolvClientOptions } from '@types';
import { getCookie, setCookie } from 'cookies-next';

const UID_COOKIE_KEY = 'evolv:uid';
const CID_COOKIE_KEY = 'evolv:cid';

export class EvolvClient {
  public client: EvolvSdk;
  public context: any;

  public options: EvolvClientOptions;
  public environmentId: string;
  public userId?: string;
  public isServer?: Boolean;
  public evolvState: any = {};
  public serverContext: any = null;
  public subscribers: { [key: string]: Function[] };

  constructor(options: EvolvClientOptions) {
    this.options = options;
    this.isServer = options.isServer || false;
    this.environmentId = options.environmentId;
    this.userId = options.userId;
    this.evolvState = options.initialState || {};
    this.serverContext = options.serverContext || {};
    this.subscribers = {};

    if (!options.environmentId || `${options.environmentId}` === 'false' || `${options.environmentId}` === 'null') {
      throw new Error(`EvolvClient: Must pass 'environmentId'`);
    }

    if ((!options.userId || `${options.userId}` === 'false' || `${options.userId}` === 'null') && !options.generateUid && !this.isServer) {
        throw new Error(`EvolvClient: Must pass 'userId'`);
    }

    this.client = new EvolvSdk({
        environment: this.environmentId,
        autoConfirm: true,
        analytics: true,
        clientName: 'react-sdk'
    });

    if (options.generateUid) {
      if (this.isServer) {
        this.userId = this.serverContext?.ctx?.req?.cookies[UID_COOKIE_KEY] || undefined;
      } else {
        this.userId = getCookie(UID_COOKIE_KEY) as string;
      }

      if (!this.userId) {
        this.userId = generateId();
        setCookie(UID_COOKIE_KEY, this.userId, { maxAge: 60 * 6 * 24 });
      }
    }
    this.client.initialize(this.userId as string, this.userId as string);
    this.setCidCookie();
  }

  public setCidCookie = () => {
    this.client.on("confirmed", (type: string) => {
        const cid = this.client?.context?.remoteContext?.confirmations?.[0]?.cid;
        setCookie(CID_COOKIE_KEY, cid, { maxAge: 60 * 6 * 24 });
    });
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

export function generateId() {
  const prefix = Math.round(Math.random() * 100000000);
  const date = Date.now();

  return `${prefix}_${date}`;
}
