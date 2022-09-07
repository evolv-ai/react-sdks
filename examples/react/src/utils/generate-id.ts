export function generateId() {
	const prefix = Math.round(Math.random() * 100000000);
	const date = Date.now();

	return `${prefix}_${date}`;
}
