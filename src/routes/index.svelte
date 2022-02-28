<script context="module" lang="ts">
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ params, fetch, session, stuff }) {
		const blogDetails = await getBlogDetails();
		const { status, data } = await getPosts();
console.log(blogDetails);

		return {
			status,
			props: {
				blogDetails: blogDetails.data,
				articles: data,
			},
		};
	}

	export const prerender = true;
</script>

<script lang="ts">
	import { getBlogDetails, getPosts } from "./_wordpress.api";
	export let articles: any;
	export let blogDetails: any;
</script>

<svelte:head>
	<title>Home | {blogDetails?.name}</title>
</svelte:head>

<section>
	<h1>
		<div class="welcome">
			<div>{blogDetails?.name}</div>
			<div>{blogDetails?.description}</div>
		</div>
	</h1>


	{#each articles as article (article.id)}
		<h3>{@html article.title}</h3>
		<div class="content">{@html article.excerpt}</div>
		<a href="blog/{article.slug}" class="readmore slide">Read more ⟶</a>
	{/each}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}
</style>
