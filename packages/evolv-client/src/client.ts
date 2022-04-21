import { getSdk } from './getSdk';

import { EvolvClientOptions, IAllocationsGroups } from '@types';
import type EvolvSdk from '@evolv/javascript-sdk';

export class EvolvClient {
  private sdk: EvolvSdk;

  public options: EvolvClientOptions;
  public enviromentId: string;
  public sessionId: string;
  public userId: string;
  public groups: IAllocationsGroups = {};

  constructor(options: EvolvClientOptions) {
    this.options = options;
    this.enviromentId = options.enviromentId;
    const {
      sdk,
      sessionId,
      userId,
    } =  getSdk({
      enviromentId: options.enviromentId,
      sessionId: options.sessionId,
      userId: options.userId,
    });
    this.sdk = sdk;
    this.sessionId = sessionId;
    this.userId = userId;
  }

  public getGroups = (): IAllocationsGroups => {
    return this.groups;
  }

  public fetchGroups = async (groups: string[]): Promise<any> => {
    const groupsToFetch: string[] = [];
    const groupsObject: {[key: string]: Promise<any>} = {};
    groups.forEach(group => {
      if(!(group in this.groups)) {
        groupsToFetch.push(group);
        groupsObject[group] = this.sdk.get(group);
      }
    });
    const groupsResult = await Promise.all(Object.values(groupsObject));
    groupsResult.forEach((groupResult, index) => {
      this.groups[groupsToFetch[index]] = groupResult;
    });
    return this.groups;
  }

  public confirm = async (): Promise<any> => {
    return this.sdk.confirm();
  }

  public emit = async (event: string): Promise<any> => {
    return this.sdk.emit(event);
  }
}

export type IEvolvClient = typeof EvolvClient;
