import { browser } from "$app/env";
import { getPage } from "../_wordpress.api";

/** @type {import('@sveltejs/kit').PageLoad} */
export async function load() {
	const { status, data } = await getPage("about");

	throw new Error("@migration task: Migrate this return statement (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693)");
	return {
		status,
		props: {
			article: data,
		},
	};
}

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement...
// export const hydrate = dev;

// ...but if the client-side router is already loaded
// (i.e. we came here from elsewhere in the app), use it
export const router = browser;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in prod
export const prerender = true;
