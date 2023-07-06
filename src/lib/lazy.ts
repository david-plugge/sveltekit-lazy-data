import { browser } from '$app/environment';

let initial = true;

/**
 * Set initial to false when the client finishes loading.
 *
 * **Call this in your root layout.**
 */
export function initLazy() {
	initial = false;
}

/**
 * @param promise A promise that is awaited on the server or when the criterias match.
 * @param options.awaitInitial Await the promise on the client before hydrating. Defaults to true.
 */
export async function lazy<T>(
	promise: Promise<T>,
	options: {
		awaitInitial?: boolean;
	} = {}
): Promise<{ promise: T | Promise<T> }> {
	const { awaitInitial } = options;

	if (awaitInitial !== false && initial) {
		await promise;
	}

	return {
		promise: !browser ? await promise : promise
	};
}
