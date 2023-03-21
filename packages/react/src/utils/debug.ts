import Debug from 'debug';

/**
 * Wrapper around {@link Debug debug} library.
 */
export function debug(namespace?: string) {
	return namespace
		? Debug('evolv').extend(namespace)
		: Debug('evolv');
}

export { Debugger } from 'debug';
