<script context="module" lang="ts">
    /** @type {import('@sveltejs/kit').Load} */
    export async function load({ params, fetch, session, stuff }) {
        const url = import.meta.env.VITE_BASE_URL + "/wp-json/wp/v2/categories";
        const response = await fetch(url);
		
        return {
            status: response.status,
            props: {
                categories: response.ok && (await response.json()),
            },
        };
    }

	export const prerender = true;
</script>

<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
	export let categories: any;
</script>

<Header {categories} />

<main>
	<slot />
</main>

<footer>
	<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
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
