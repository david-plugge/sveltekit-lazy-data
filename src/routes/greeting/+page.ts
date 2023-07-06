import { lazy } from '$lib/lazy.js';

export const load = async ({ fetch }) => {
	const greeting = await lazy<{
		hello: string;
	}>(fetch('/api/greeting').then((res) => res.json()));

	return {
		greeting
	};
};
