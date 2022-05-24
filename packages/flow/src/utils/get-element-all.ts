import { nodeListToArray } from "./node-list-to-array"

export const getElementAll = (query: string, container?: Element): Element[] => {
  if( typeof container === 'undefined' ) {
    return nodeListToArray(document.querySelectorAll(query))
  }
  return nodeListToArray(container.querySelectorAll(query))
}