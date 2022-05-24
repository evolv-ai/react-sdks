export interface createObserverOptions {
  element?: Element
  observerOptions?: MutationObserverInit
}

export type CreateObserver = (callback: Function, options?: createObserverOptions) => MutationObserver;

export const createObserver = (
  callback: Function,
  {
    element,
    observerOptions
  }: createObserverOptions = {}
  ) => {
  const domObserver = new MutationObserver(() => {
    callback();
  })
  domObserver.observe(element || document.body, observerOptions || {
    childList: true,
    subtree: true,
    attributes: true, 
    attributeFilter: ['class']
  })
  return domObserver;
}