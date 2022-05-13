import { flowInstance } from "./evolv-flow";

export type WaitQueryAllCallback = (newElements: Element[], elements) => void
export type WaitQueryAll = (query: string, callback: WaitQueryAllCallback) => void
export const waitQueryAll: WaitQueryAll = (query, callback) => {
  const uuid = flowInstance.getUuid()
  const elements: Element[] = [];
  const matchCallback = () => {
    const newElements = [...document.querySelectorAll(`${query.trim()}:not([data-evolv-flow-id="${uuid}"])`)];
    if(newElements.length > 0) {
      newElements.forEach(element => {
        element.setAttribute('data-evolv-flow-id', uuid);
        elements.push(element);
      });
      callback(newElements, elements)
    }
  }
  flowInstance.subscribe(matchCallback);
}