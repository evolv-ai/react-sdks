import { createObserver } from "./utils";

class EvolvFlow {
  constructor() {
    createObserver(this.runCallbacks)
  }

  private runCallbacks = () => {
    this.handlers.forEach(handler => {
      try {
        handler();
      } catch (e: any) {
        this.reportCallbackError(e as Error);
      }
    })
  }

  private reportCallbackError = (error: Error) => {
    console.error(error)
  }

  private handlers: Function[] = [];

  public subscribe = (callback: Function) => {
    this.handlers.push(callback);
  }

  public unsubscribe = (callback: Function) => {
    this.handlers = this.handlers.filter(handler => handler !== callback);
  }

  public getUuid = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

}

export const flowInstance = new EvolvFlow();