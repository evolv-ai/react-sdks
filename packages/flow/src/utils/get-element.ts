export const getElement = (query: string, container?: Element): Element | null => {
  if( typeof container === 'undefined' ) {
    return document.querySelector(query)
  }
  return container.querySelector(query)
}