<script context="module">
	// pre render the data before page loads so it can exported and used in a component
	export const prerender = true;
</script>

<script>
	export let data
	const { uniqueCategories } = data
	//only renders when page is loaded, ie. /work/category
	//therefore write an api endpoint that servs unique categories
	console.log(uniqueCategories, 'uniqueCategories')

	import {currentPage} from '$lib/assets/js/store';
	import SecondaryNav from '$lib/components/SecondaryNav.svelte';
</script>




<svelte:head>
	<title>Blog | Categories</title>
</svelte:head>


<div className="compressed-content">
	<h1 className="h2">All blog categories</h1>
<!--	todo conditionally render on url (ie not on this page)-->
	{ #if currentPage !== '/work/category' }
		<SecondaryNav categories={ data }/>
	{/if}

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