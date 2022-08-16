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
	import { articles } from '$lib/assets/js/store';
	export let posts;
  export let total;
	articles.set(posts)
	console.log('articles', $articles)
</script>


<svelte:head>
	<title>Work</title>
	<meta data-key="description" name="description" content={siteDescription}>
</svelte:head>

<!--todo use h1 for seo-->
<!--<h1>Work</h1>-->

<PostsList {posts} />

<Pagination currentPage={1} totalPosts={total} />