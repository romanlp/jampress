/** @type {import('@sveltejs/kit').LayoutLoad} */
throw new Error("@migration task: Migrate the load function input (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693)");
export async function load({ params, fetch, stuff }) {
	const { status, data } = await getCategories();

	throw new Error("@migration task: Migrate this return statement (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693)");
	return {
		status,
		props: {
			categories: data,
		},
	};
}

export const prerender = true;
