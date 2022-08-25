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
	// import SecondaryNav from '$lib/components/SecondaryNav.svelte';
	import { siteDescription } from '$lib/config'
	import { storePosts, storeUniqueCategories } from '$lib/assets/js/store';

	export let posts;
  export let total;

	//save posts to a store
	storePosts.set(posts)
	console.log('routes/blog/index', $storePosts)


	//save unique categories to store
	let arraysOfCategories = []
	let duplicateCategories = []
	let setCategories = new Set()
	let uniqueCategories = []

 // arrange categories into uniques and save in a store
		posts.map(e => arraysOfCategories.push(e.categories))
		duplicateCategories = arraysOfCategories.flat(2)
		duplicateCategories.forEach(e => setCategories.add(e))
		uniqueCategories = [...setCategories]
		uniqueCategories.sort()
		storeUniqueCategories.set(uniqueCategories)
		console.log('routes/blog/index', $storeUniqueCategories);
		console.log(posts);
</script>


<svelte:head>
	<title>Work</title>
	<meta data-key="description" name="description" content={siteDescription}>
</svelte:head>

<!--todo use h1 for seo-->
<!--<h1>Work</h1>-->

<PostsList {posts} />

<Pagination currentPage={1} totalPosts={total} />