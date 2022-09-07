import { generateId } from './generate-id';

const UID_COOKIE_KEY = 'evolv:uid';

export function getUid() {
	const stored = localStorage.getItem(UID_COOKIE_KEY);

	if (stored) {
		return stored;
	}

	const uid = generateId();

	localStorage.setItem(UID_COOKIE_KEY, uid);

	return uid;
}
