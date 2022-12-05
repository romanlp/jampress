import { getPost } from "../../_wordpress.api";

/** @type {import('@sveltejs/kit').PageLoad} */
throw new Error("@migration task: Migrate the load function input (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693)");
export async function load({ params, fetch, stuff }) {
    const { status, data } = await getPost(params.slug);

    throw new Error("@migration task: Migrate this return statement (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693)");
    return {
        status,
        props: {
            article: data,
        },
    };
}
