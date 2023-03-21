<script>
	export let categories = []
	export let activeCategory
</script>

<nav class="secondary-nav">
	<h2>Categories</h2>
	<ul>
		<li class="secondary-nav__categories">
			{#each categories as category}
					<li class="{activeCategory === category.title ? 'active': ''} category" >
						<a href="/work/category/{category.title}"> {category.title}</a>
					</li>
			{/each}
		</li>
	</ul>
</nav>






<style lang="scss">
	.secondary-nav {
    border-top: 3px solid var(--bright-green);
	}

	h2 {
		text-transform: uppercase;
    font-size: var(--base);
    margin: var(--xs2) 0;
	}

</style>