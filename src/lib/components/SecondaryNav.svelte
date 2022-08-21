<script>
	import { storePosts, storeUniqueCategories } from "$lib/assets/js/store";
	import { onMount } from 'svelte'
	let navPosts;
	onMount(navPosts = storePosts);

	let navUniqueCats;
	onMount(navUniqueCats = storeUniqueCategories);

	setTimeout(() => console.log('navCats',$navUniqueCats), 2000)


</script>

<nav class="secondary-nav">
	<ul>
		{#each $navUniqueCats as navCat}
			<li>{navCat}</li>
		{/each}
	</ul>
	<ul>
		{#each $navPosts as post}
			<!--todo replace hard coded with ref to settings-->
			<li><a href="work/{post.slug}">{post.title}</a></li>
		{/each}
		<li>Project 2</li>
		<li>Project 3</li>
	</ul>
</nav>

<style lang="scss">
	nav {
		z-index: 1;
		grid-column: 1/3;
		grid-row: 3/-1;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		margin: 0;
		padding: 0;
	}

  ul { list-style: none;
    	 padding: 0;
    	 display: flex;
    	 flex-direction: column;
			font-size: vars.$sm;
  }

	ul:first-child {
		grid-column: 1/2;
		margin: 0 vars.$xl;
	}
	ul:nth-child(2) {
		margin: 0 vars.$xl2 0 vars.$xs*-1 ;
		grid-column: 2/3;
	}

 li {
	margin: vars.$xs6 0;
	 border-radius: vars.$xs6;
   padding: vars.$xs6 vars.$xs4;
	 color: black;
	 line-height: 1.25;

  }

   nav li:hover, a:hover {
		color: white;
    background: black;
  }

	a {
		text-decoration: none;
		display: block;
	}


</style>