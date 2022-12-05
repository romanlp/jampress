<script lang="ts">
	throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

	import {
		getBlogDetails,
		getPosts,
		getPostsForCategory,
	} from "./_wordpress.api";
	export let articles: any;
	export let blogDetails: any;
</script>

<svelte:head>
	<title>Home | {blogDetails?.name}</title>
</svelte:head>

<section>
	<div class="welcome">
		<h1>{blogDetails?.name}</h1>
		<h3>{blogDetails?.description}</h3>
	</div>

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
		text-align: center;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}
</style>
