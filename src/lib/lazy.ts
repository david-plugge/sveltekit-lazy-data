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
 *
 * @param promise A promise that is awaited on the server or when the criterias match
 * @param options.awaitInitial Await the promise on the client before hydrating
 * @param options.timeout Return the promise data if the promise is resolved within the timeout, otherwise return the promise
 *
 * @returns
 */
export async function lazy<T>(
	promise: Promise<T>,
	options: {
		awaitInitial?: boolean;
	} = {}
): Promise<{ promise: T | Promise<T> }> {
	const { awaitInitial } = options;

	if (awaitInitial && initial) {
		await promise;
	}

	return {
		promise: !browser ? await promise : promise
	};
}
