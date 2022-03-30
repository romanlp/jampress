<script lang="ts">
	import { page } from "$app/stores";
	export let categories = [];

	$: topLevelCategories = categories?.reduce((prev, cur) => {
		(prev[cur.parent.toString()] = prev[cur.parent.toString()] || []).push(
			cur
		);
		return prev;
	}, {});
</script>

<header>
	<nav>
		<ul>
			<li class:active={$page.url.pathname === "/"}>
				<a sveltekit:prefetch href="/">Home</a>
			</li>

			{#each topLevelCategories["0"] as categorie (categorie.id)}
				<li
					class="menu"
					class:active={$page.url.pathname ===
						"/blog/" + categorie.slug}
				>
					<a href={"/?category=" + categorie.id}>
						{categorie.name}
					</a>

					{#if topLevelCategories[categorie.id]}
						<ul class="sub-menu">
							{#each topLevelCategories[categorie.id] ?? [] as subCat (subCat.id)}
								<li>
									<a href={"/?category=" + subCat.id}>
										{subCat.name}
									</a>
								</li>
							{:else}
								<li>No subcategories</li>
							{/each}
						</ul>
					{/if}
				</li>
			{/each}

			<li class:active={$page.url.pathname === "/about"}>
				<a sveltekit:prefetch href="/about">About</a>
			</li>
			<li class:active={$page.url.pathname === "/todos"}>
				<a sveltekit:prefetch href="/todos">Todos</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	nav {
		display: flex;
		width: 100%;
		flex-direction: row;
		justify-content: center;
		--background: rgba(131, 0, 0, 0.7);
	}

	ul {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	@media (min-width: 720px) {
		ul {
			position: relative;
			flex-direction: row;
		}
	}

	li {
		position: relative;
		height: 100%;
	}

	li.active::before {
		--size: 6px;
		content: "";
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--accent-color);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 1em 1em;
		color: var(--heading-color);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--accent-color);
	}

	.menu:hover .sub-menu {
		display: flex;
	}

	.sub-menu {
		display: none;
		position: absolute;
		flex-direction: column;
		top: 3rem;
		width: 100%;
		height: auto;
		z-index: 10;
	}

	.sub-menu > li {
		padding: 0.5em 0;
	}
</style>
