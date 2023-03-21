<script>
	import { currentPage } from '$lib/assets/js/store';
	import { onMount } from 'svelte';

	export let categories = []

		let url = "";
		currentPage.subscribe(value => {url = value;});
		let cat = url.slice(15);

</script>

<nav class="secondary-nav">
	<h2>Categories</h2>
	<ul>
		<li class="secondary-nav__categories">
			{#each categories as category}
					<li class="{ category.title === cat ? 'active' : '' }">
						<a href="/work/category/{category.title}">
							{category.title}
						</a>
					</li>
			{/each}
		</li>
	</ul>
</nav>






<style lang="scss">
	.secondary-nav {
    border-top: 3px solid var(--bright-green);
	}

	.active { background: #E63946}

	h2 {
		text-transform: uppercase;
    font-size: var(--base);
    margin: var(--xs2) 0;
	}

</style>