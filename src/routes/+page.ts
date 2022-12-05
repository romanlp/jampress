import type { LayoutLoad } from './$types';
import { getBlogDetails, getPosts, getPostsForCategory } from "./_wordpress.api";

export const load: LayoutLoad = async ({ url }) => {
	let posts;

	if (url.searchParams.has("category")) {
		console.log(url.searchParams.get("category"));
		posts = await getPostsForCategory(url.searchParams.get("category"));
	} else {
		posts = await getPosts();
	}
	const blogDetails = await getBlogDetails();
	const { status, data } = posts;
	return {
		status,
		blogDetails: blogDetails.data,
		articles: data,
	};
}
