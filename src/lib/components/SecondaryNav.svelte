<script>
	import { storePosts } from "$lib/assets/js/store";
	import { onMount } from 'svelte'
		let navPosts;
	// import posts from "./PostsList.svelte"
	console.log('2ndnav',$storePosts)
	onMount(()=>{console.log('2ndnav Mount',$storePosts)})
	onMount(navPosts = storePosts)
	setTimeout(
		()=>{console.log('2ndnav Timeout',$storePosts)}, 2000);
</script>

<nav class="secondary-nav">
	<ul>

		<li>Category 2</li>
		<li>Category 3</li>
	</ul>
	<ul>
		{#each $navPosts as post}
			<li>{post.title}</li>
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

	ul:first-child {
		grid-column: 1/2;
		margin: 0 vars.$xl;
	}
	ul:nth-child(2) {
		margin: 0 vars.$xl2 0 vars.$xs*-1 ;
		grid-column: 2/3;
	}

	ul { list-style: none;
			padding: 0;
		display: flex;
		flex-direction: column;
	}

 .secondary-nav li {
   padding: vars.$xs6 vars.$xs;
	 	color: black;
  }

  .secondary-nav li:hover {
	 	border-radius: vars.$xs6;
		color: white;
    background: black;

  }


	a { text-decoration: none }
</style>