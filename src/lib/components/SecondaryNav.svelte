<script>
	export let categories = []
	export let activeCategory
</script>

<nav class="secondary-nav">
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


</style>