/**
 * Returns a promise that resolves after {@link duration} elapses. Function uses setTimeout() under the hood.
 */
export async function wait(duration: number): Promise<void> {
	return new Promise((resolve) => {
		setTimeout(resolve, Math.max(0, duration));
	});
}
