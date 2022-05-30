<script context="module" lang="ts">
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ params, fetch, stuff }) {
		const { status, data } = await getCategories();

		return {
			status,
			props: {
				categories: data,
			},
		};
	}

	export const prerender = true;
</script>

<script lang="ts">
	import Header from "$lib/header/Header.svelte";
	import { getCategories } from "./_wordpress.api";
	import "../app.css";

	export let categories = [];
</script>

<Header {categories} />

<main>
	<slot />
</main>

<footer>
	<p>©</p>
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
