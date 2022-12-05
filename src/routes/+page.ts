/** @type {import('@sveltejs/kit').PageLoad} */
export async function load({ url }) {
	let posts;

	if (url.searchParams.has("category")) {
		console.log(url.searchParams.get("category"));
		posts = await getPostsForCategory(url.searchParams.get("category"));
	} else {
		posts = await getPosts();
	}
	const blogDetails = await getBlogDetails();
	const { status, data } = posts;
	throw new Error("@migration task: Migrate this return statement (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693)");
	return {
		status,
		props: {
			blogDetails: blogDetails.data,
			articles: data,
		},
	};
}
