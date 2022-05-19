export type MatchUrlCallback = (bodyElement: Document['body']) => void
export type MatchUrl = (query: RegExp | string, callback: MatchUrlCallback) => void
export const matchUrl: MatchUrl = (query, callback) => {
  if(window.location.pathname.match(query)) {
    callback(document.body);
  }
}