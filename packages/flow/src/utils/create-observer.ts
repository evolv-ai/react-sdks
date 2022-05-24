export type CreateObserver = (element: Element, callback: Function, options?: MutationObserverInit) => MutationObserver;

export const createObserver: CreateObserver = (
  element,
  callback,
  options
  ) => {
  const domObserver = new MutationObserver(() => {
    callback();
  })
  domObserver.observe(element, options || {
    childList: true,
    subtree: true,
    attributes: true
  })
  return domObserver;
}