import { flowInstance } from "../evolv-flow";

export type WaitQueryCallback = (element: Element) => void
export type WaitQuery = (query: string, callback: WaitQueryCallback) => void
export const waitQuery: WaitQuery = (query, callback) => {
  const matchCallback = () => {
    const element = document.querySelector(query);
    if(element) {
      callback(element);
      flowInstance.unsubscribe(matchCallback);
    }
  }
  flowInstance.subscribe(matchCallback);
}