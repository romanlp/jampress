/*
	This module is used by the /todos endpoint to
	make calls to api.svelte.dev, which stores todos
	for each user. The leading underscore indicates that this is
	a private module, _not_ an endpoint — visiting /todos/_api
	will net you a 404 response.

	(The data on the todo app will expire periodically; no
	guarantees are made. Don't use it to organise your life.)
*/

const base =  import.meta.env.VITE_BASE_URL;

export function getBlogDetails() {
	return fetch(`${base}/wp-json`, {
		method: 'GET',
	});
}
 
export function getCategories() {
	return fetch(`${base}/wp-json/wp/v2/categories`, {
		method: 'GET',
	});
}

export async function getPosts() {
	const response = await fetch(`${base}/wp-json/wp/v2/posts`);
	const data = (await response.json()).map((post) => ({
		id: post.id,
		slug: post.slug,
		title: post.title.rendered,
		excerpt: post.excerpt.rendered,
	}));
	return { status: response.status, data };
}

export async function getPost(slug: string) {
	const response = await fetch(`${base}/wp-json/wp/v2/posts?slug=${slug}`);
	const data = (await response.json()).map((post) => ({
		id: post.id,
		title: post.title.rendered,
		content: post.content.rendered,
	}))[0];
	return { status: response.status, data };
}
