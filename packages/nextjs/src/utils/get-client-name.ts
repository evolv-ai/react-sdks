import { isBrowser } from './is-browser.js';

export function getClientName(): string {
	return isBrowser()
		? 'next-sdk/browser'
		: 'next-sdk/server';
}
