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
	import { storePosts } from '$lib/assets/js/store';
	export let posts;
  export let total;
	// storePosts.set(posts)
	// storePosts.set(posts)
	// console.log('storePosts', $storePosts)
	// let categories = [];
	// posts.map(e => console.log(e.categories));


	let arraysOfCategories = [];
	let duplicateCategories = []
	let categories = new Set()
	posts.map(e => arraysOfCategories.push(e.categories))
	duplicateCategories = arraysOfCategories.flat(2);
	duplicateCategories.forEach(e => categories.add(e));


	setTimeout(function() {
		console.log('single', categories)}, 1000);

	// posts.forEach(post => duplicateCategories.concat(post.categories))



</script>


<svelte:head>
	<title>Work</title>
	<meta data-key="description" name="description" content={siteDescription}>
</svelte:head>

<!--todo use h1 for seo-->
<!--<h1>Work</h1>-->

<PostsList {posts} />

<Pagination currentPage={1} totalPosts={total} />