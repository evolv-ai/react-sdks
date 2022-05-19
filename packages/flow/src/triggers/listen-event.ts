export type ListenEventCallback = (event: Event, element: Element) => void
export interface ListenEventOptions {
  once?: boolean;
}
export type ListenEvent = (event: keyof HTMLElementEventMap, selector: string, callback: ListenEventCallback, options?: ListenEventOptions) => void
export const listenEvent: ListenEvent = (event, selector, callback, options = {}) => {
  const runOnce = typeof options.once === 'boolean' ? options.once : true;
  document.body.addEventListener(event, (e) => {
    const target = e.target as Element;
    if(target.matches(selector)) {
      callback(e, target);
    } else if(target.closest(selector)) {
      callback(e, target.closest(selector) as Element);
    }
  }, {
    once: runOnce
  })
}