<script>
	import { storePosts, storeUniqueCategories } from "$lib/assets/js/store";
	import { onMount} from 'svelte';



	let navPosts;
	let navUniqueCats;
	onMount(navUniqueCats = storeUniqueCategories)
	onMount(navPosts = storePosts)

console.log('lib/components/SecondaryNav', $navPosts, $navUniqueCats);
</script>

<nav class="secondary-nav">
	<ul>
		<li class="secondary-nav__categories">
			<p>Categories</p>
					<ul>
						{#if $navUniqueCats	}
							{#each $navUniqueCats as navCat}
								<li><a href="/work/category/{navCat}">{navCat}</a></li>
						{/each}
					{/if}
				</ul>
		</li>
		<li class="secondary-nav__case-studies">
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

	.secondary-nav {
    grid-column: 1/-1;
    grid-row: 2/3;

    @media (min-width: vars.$for-tablet-landscape-up) {
      z-index: 1;
      grid-column: 1/3;
      grid-row: 2/-1;
      margin: 0;
      padding: 0;
    }


    ul {
      list-style: none;
      padding: 0;
      font-size: vars.$sm;
    }


    > ul {
      display: flex;
      flex-direction: column;
			margin: 0;

			@media(min-width: vars.$for-tablet-landscape-up)  {
        top: 0;
        display: grid;
        height: 100vh;
        grid-template-columns: repeat(2, 1fr);
        position: sticky;
			}
    }


    li > p {
      margin: vars.$sm 0 ;
      line-height: 1.25;
    }


		&__categories,
    &__case-studies {

      ul {
        display: flex;
        flex-direction: row;
				overflow: scroll;
        scroll-snap-type: both proximity;
				@media(min-width: vars.$for-tablet-landscape-up) { flex-direction: column; }
      }

      li {
				min-width: vars.$xl6;
				@media(min-width: vars.$for-tablet-landscape-up) { min-width: auto; }

			}

      ul li a:hover {
        background: #00E596;
        //color: white;
				//text-decoration: underline;
      }

      ul li a:visited {
        //background: white;
        //color: gray;
      }

      ul li a:visited:hover {
        //background: black;
        //color: white;
      }
    }

    &__categories {
      margin: 0 vars.$xl;
      @media(min-width: vars.$for-tablet-landscape-up) { grid-column: 1/2; }
    }


    &__case-studies {
        margin: 0 vars.$xl;


      @media(min-width: vars.$for-tablet-landscape-up) {
				grid-column: 2/3;
      	margin: 0 vars.$xl2 0 vars.$xs*-1 ;
			}
    }


    li > p { padding: vars.$xs6 vars.$xs4; }


    a {
      text-decoration: none;
      display: block;
      //border-radius: vars.$xs6;
      line-height: 1.25;
      margin: vars.$xs6 0;
      padding: vars.$xs6 vars.$xs4;
    }
  }
</style>