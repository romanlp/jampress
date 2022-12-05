import type { LayoutLoad } from './$types';
import { getCategories } from "./_wordpress.api";

export const load: LayoutLoad = async () => {
	const { status, data } = await getCategories();

	return {
		status,
		categories: data,
	};
}

export const prerender = true;
