<script>
	import PostsList from '$lib/components/PostsList.svelte'
	import Pagination from '$lib/components/Pagination.svelte'
	import { siteDescription } from '$lib/config'
	// import SecondaryNav from '$lib/components/SecondaryNav.svelte';

	export let data
	console.log('these cats',data.categories)
</script>


<svelte:head>
	<title>Blog</title>
	<meta data-key="description" name="description" content={siteDescription}>
</svelte:head>

<!--todo update below-->
<h1>Work</h1>
<!--<SecondaryNav posts= {data.posts}/>-->
<PostsList posts={data.posts} />


<Pagination currentPage={1} totalPosts={data.total} />

