// @TODO passing options to customize the observer and element (callback, params: {element, options})

export const createObserver = (callback: Function, element?: Element) => {
  const domObserver = new MutationObserver(() => {
    callback();
  })
  domObserver.observe(element || document.body, {
    childList: true,
    subtree: true
  })
}