/**
 * Returns whether code is running in browser.
 */
export function isBrowser(): boolean {
	return typeof window !== 'undefined';
}
