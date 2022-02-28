<script context="module" lang="ts">
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ params, fetch, session, stuff }) {
		const { status, data } = await getPosts();

		return {
			status,
			props: {
				articles: data,
			},
		};
	}

	export const prerender = true;
</script>

<script lang="ts">
	import Counter from "$lib/Counter.svelte";
	import { getPosts } from "./_wordpress.api";
	export let articles: any;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<h1>
		<div class="welcome">
			<picture>
				<source srcset="svelte-welcome.webp" type="image/webp" />
				<img src="svelte-welcome.png" alt="Welcome" />
			</picture>
		</div>
	</h1>

	{#each articles as article (article.id)}
		<h3>{@html article.title}</h3>
		<div class="content">{@html article.excerpt}</div>
		<a href="blog/{article.slug}" class="readmore slide">Read more ⟶</a>
	{/each}

	<Counter />
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

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
