<script context="module" lang="ts">
    throw new Error("@migration task: Check code was safely removed (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292722)");

    // import { getPost } from "../../_wordpress.api";

    // /** @type {import('@sveltejs/kit').Load} */
    // export async function load({ params, fetch, stuff }) {
    //     const { status, data } = await getPost(params.slug);

    //     return {
    //         status,
    //         props: {
    //             article: data,
    //         },
    //     };
    // }
</script>

<script lang="ts">
    throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

    export let article: any;
</script>

<div>
    {#if article}
        <h1>{@html article.title}</h1>

        <div>{@html article.content}</div>
    {/if}
</div>
