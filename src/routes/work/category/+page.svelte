<script>
	export let data
	const { uniqueCategories } = data
</script>


<svelte:head>
	<title>Blog | Categories</title>
</svelte:head>


<div className="compressed-content">
	<h1 className="h2">All blog categories</h1>

	<ul>
		{#each uniqueCategories as category}
			<li>
				<a href="/work/category/{category.title}">
					{ category.title }
				</a>
				({category.count})
			</li>
		{/each}
	</ul>
</div>