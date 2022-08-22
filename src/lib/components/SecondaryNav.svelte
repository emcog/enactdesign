<script>
	import { storePosts, storeUniqueCategories } from "$lib/assets/js/store";
	import { onMount} from 'svelte';

	let navPosts;
	let navUniqueCats;
	onMount(navUniqueCats = storeUniqueCategories)
	onMount(navPosts = storePosts)

	onMount(() => console.log("mounted"))

</script>

<nav>
	<ul class="secondary-nav">
		<li class="categories-nav">
			<p>Categories</p>
				{#if $navUniqueCats}
					<ul>
						{#each $navUniqueCats as navCat}
							<li><a href="/work/category/{navCat}">{navCat}</a></li>
					{/each}
				</ul>
			{/if}
		</li>
		<li class="case-studies-nav">
			<p>Case studies</p>
				<ul>
					{#if $navPosts }
					{#each $navPosts as post}
					<!--todo replace hard coded with ref to settings-->
					<li><a href="/work/{post.slug}">{post.title}</a></li>
				{/each}
						{/if}
			</ul>
		</li>
	</ul>
</nav>

<style lang="scss">
	nav {
    z-index: 1;
    grid-column: 1/3;
    grid-row: 3/-1;
	}

	.secondary-nav {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		margin: 0;
		padding: 0;
	}

  ul {
    list-style: none;
    padding: 0;
    font-size: vars.$sm;
  }

	.categories-nav {
		grid-column: 1/2;
		margin: 0 vars.$xl;
	}

	.case-studies-nav {
		margin: 0 vars.$xl2 0 vars.$xs*-1 ;
		grid-column: 2/3;
	}


 .case-studies-nav,
 .categories-nav {
   ul li a:hover {
       background: black;
			 color: white;
		 }

	 ul li a:visited {
       background: white;
			 color: gray;
		 }
	 ul li a:visited:hover {
       background: black;
			 color: white;
		 }
   }

 li > p { padding: vars.$xs6 vars.$xs4; }

	a {
		text-decoration: none;
		display: block;
    border-radius: vars.$xs6;
    line-height: 1.25;
    margin: vars.$xs6 0;
    padding: vars.$xs6 vars.$xs4;
	}


</style>