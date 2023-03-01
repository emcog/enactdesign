<!-- Renders any page at /work/category/* -->
<script>
	import PostsList from '$lib/components/PostsList.svelte'
	import Pagination from '$lib/components/Pagination.svelte'
	import SecondaryNav from '$lib/components/SecondaryNav.svelte';

	export let data
	console.log('category./+page.svelte', data)
</script>


<svelte:head>
	<title>Category: {data.category}</title>
</svelte:head>

<!--todo reinstate H1-->
<!--<h1>Blog category: {data.category}</h1>-->
<SecondaryNav categories={data.categories}/>
<p>{data.category}</p>

{#if data.posts.length}
	<PostsList posts={data.posts} />
	<Pagination currentPage="1" totalPosts={data.total} path="/work/category/{data.category}/page" />
{:else}
	<p><strong>Ope!</strong> Sorry, couldn't find any posts in the category "{data.category}".</p>

	<p><a href="/blog">Back to blog</a></p>
{/if}

<style lang="scss">

  div.category-col {
    border-top: 3px solid var(--bright-green);
    margin: 0 vars.$xs;
    width: auto;

    @media(min-width: vars.$for-tablet-portrait-up) {
      min-width: auto;
      margin: 0 vars.$xs 0 vars.$xs;
    }

    @media(min-width: vars.$for-tablet-landscape-up) {
      grid-column: 1/4;
      margin: 15px 0 vars.$base vars.$xl;
      padding: vars.$xs3 0 0 0;
    }
  }

  h1.category-title {
    font-family: var(--headings);
    font-size: vars.$base;
    background: none;
    width: auto;
    background: var(--bright-green);
    margin: vars.$xs6 0 vars.$sm 0;
    padding-left: 0;
    color: var(--grey);
    background: none;

    @media(min-width: vars.$for-tablet-landscape-up) {
      //grid-column: 1/4;
      //margin: 15px 0 0 vars.$xl;
      //padding: vars.$base 0 0 0;
    }
  }

  .category-col > p {
    font-size: vars.$base;
    margin: vars.$base 0 vars.$xs6 0;
    padding: vars.$xs6;
    text-transform: uppercase;
    width: auto;
    background: var(--bright-green);
  }

  a {
    margin: vars.$xs6 vars.$xs6 vars.$xs6 0;
    font-size: vars.$sm;
    font-weight: 500;
    letter-spacing: vars.$xs9;
    text-transform: uppercase;
    text-decoration: none;
    background: var(--soft-green);
    //display: block;
    line-height: 1.25;
    padding: vars.$xs3;
  }

  a:hover {
    background: var(--bright-green);
  }

</style>