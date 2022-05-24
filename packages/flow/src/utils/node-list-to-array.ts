export const nodeListToArray = (nodes: NodeListOf<Element>): Element[] => (
  Array.prototype.slice.call(nodes)
);