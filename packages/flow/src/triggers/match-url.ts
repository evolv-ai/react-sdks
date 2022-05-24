export type MatchUrlCallback = (bodyElement: Document['body']) => void
export interface MatchUrlOptions {
  negate?: boolean;
}
export type MatchUrl = (query: RegExp | string, callback: MatchUrlCallback, options?: MatchUrlOptions) => void
export const matchUrl: MatchUrl = (
  query,
  callback,
  { negate } = {}) => {
  const url = window.location.pathname + window.location.search;
  const matches = url.match(query);
  if(matches && !negate) {
    callback(document.body);
  } else if(!matches && negate) {
    callback(document.body);
  }
}