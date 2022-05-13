export type SetContext = (key: string, value: string) => void
export const setContext: SetContext = (key, value) => {
  (window as any).evolv.setContext(key, value);
}