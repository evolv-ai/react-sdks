class EvolvFlow {
  constructor() {
    const domObserver = new MutationObserver(() => {
      this.runCallbacks()
    })
    domObserver.observe(document.body, {
      childList: true,
      subtree: true
    })
  }

  private runCallbacks = () => {
    this.handlers.forEach(handler => {
      try {
        handler();
      } catch (e) {
        this.reportCallbackError(e);
      }
    })
  }

  private reportCallbackError = (error: Error) => {
    console.error(error)
  }

  private handlers: Function[] = [];

  public subscribe = (callback) => {
    this.handlers.push(callback);
  }

  public unsubscribe = (callback) => {
    this.handlers = this.handlers.filter(handler => handler !== callback);
  }

  public getUuid = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

}

export const flowInstance = new EvolvFlow();