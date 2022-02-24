<script context="module" lang="ts">
    /** @type {import('@sveltejs/kit').Load} */
    export async function load({ params, fetch, session, stuff }) {
        const url = import.meta.env.VITE_BASE_URL + "/wp-json/wp/v2/posts?slug=" + params.slug;
        const response = await fetch(url);

        return {
            status: response.status,
            props: {
                article: response.ok && (await response.json()),
            },
        };
    }
</script>

<script lang="ts">
    export let article: any;
</script>

<div>
    {#if article[0]}
    <h1>{article[0].title.rendered}</h1>
    
    <div>{@html article[0].content.rendered}</div>
    {/if}
</div>
