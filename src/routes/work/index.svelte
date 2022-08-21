<script context="module">
	export const load = async ({ fetch }) => {
		const postRes = await fetch(`/api/posts.json`)
		const { posts } = await postRes.json()

    const totalRes = await fetch(`/api/posts/count.json`)
    const { total } = await totalRes.json()

		return {
			props: { posts, total }
		}
	}
</script>


<script>
  import PostsList from '$lib/components/PostsList.svelte'
  import Pagination from '$lib/components/Pagination.svelte'
	import { siteDescription } from '$lib/config'
	import { storePosts, storeUniqueCategories } from '$lib/assets/js/store';
	export let posts;
  export let total;

	//save posts to a store
	storePosts.set(posts)
	console.log('storePosts', $storePosts)



	//save unique categories to store
	let arraysOfCategories = []
	let duplicateCategories = []
	let setCategories = new Set()
	let uniqueCategories = []
	posts.map(e => arraysOfCategories.push(e.categories))
	duplicateCategories = arraysOfCategories.flat(2);
	duplicateCategories.forEach(e => setCategories.add(e));
	setCategories.forEach(e => console.log('set entry',e))
	uniqueCategories = [...setCategories]
	storeUniqueCategories.set(uniqueCategories)

	console.log('store uniques', $storeUniqueCategories);

	// setTimeout(function() {
	// 	console.log('unique', uniqueCategories)}, 1000);


</script>


<svelte:head>
	<title>Work</title>
	<meta data-key="description" name="description" content={siteDescription}>
</svelte:head>

<!--todo use h1 for seo-->
<!--<h1>Work</h1>-->

<PostsList {posts} />

<Pagination currentPage={1} totalPosts={total} />