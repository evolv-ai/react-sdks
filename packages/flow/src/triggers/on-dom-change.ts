import { flowInstance } from "../evolv-flow";
import { createObserver } from "../utils"

export const onDomChange = (callback: Function, container?: Element) => {
  if(container) {
    createObserver(callback, {
      element: container
    });
  } else {
    flowInstance.subscribe(callback);
  }
}