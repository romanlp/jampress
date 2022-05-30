<script context="module" lang="ts">
	import { browser } from "$app/env";
	import { getPage } from "./_wordpress.api";

	/** @type {import('@sveltejs/kit').Load} */
	export async function load() {
		const { status, data } = await getPage("about");

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
</script>

<script lang="ts">
	export let article: any;
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<div class="content">
	{#if article}
		<h1>{@html article.title}</h1>

		<div>{@html article.content}</div>
	{/if}
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
