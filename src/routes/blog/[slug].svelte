<script context="module" lang="ts">
    import { getPost } from "../_wordpress.api";

    /** @type {import('@sveltejs/kit').Load} */
    export async function load({ params, fetch, session, stuff }) {
        const { status, data } = await getPost(params.slug);

        return {
            status,
            props: {
                article: data,
            },
        };
    }
</script>

<script lang="ts">
    export let article: any;
</script>

<div>
    {#if article}
        <h1>{@html article.title}</h1>

        <div>{@html article.content}</div>
    {/if}
</div>
