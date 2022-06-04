import { getElementAll } from "../utils";
import { flowInstance } from "../core";

export type WaitQueryAllCallback = (newElements: Element[], elements: Element[]) => void
export type WaitQueryAll = (query: string, callback: WaitQueryAllCallback) => void
export const waitQueryAll: WaitQueryAll = (query, callback) => {
  const uuid = flowInstance.getUuid()
  const elements: Element[] = [];
  const matchCallback = () => {
    const newElements = getElementAll(`${query.trim()}:not([data-evolv-flow-${uuid}])`);
    if(newElements.length > 0) {
      newElements.forEach(element => {
        element.setAttribute(`data-evolv-flow-${uuid}`, "");
        elements.push(element);
      });
      callback(newElements, elements)
    }
  }
  flowInstance.subscribe(matchCallback);
}