export const getElementAll = (query: string, container?: Element): Element[] => {
  if( typeof container === 'undefined' ) {
    return Array.from(document.querySelectorAll(query))
  }
  return Array.from(container.querySelectorAll(query))
}