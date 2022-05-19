export type SetContext = (key: string, value: string) => void
export const setContext: SetContext = (key, value) => {
  if((window as any).evolv) {
    (window as any).evolv.setContext(key, value);
  } else {
    console.warn(`EvolvFlow: setContext() called but no window.evolv is present.`);
  }
}