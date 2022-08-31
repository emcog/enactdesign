<script>
	import { storePosts, storeUniqueCategories } from "$lib/assets/js/store";


$: console.log('lib/components/SecondaryNav ', `store categories${$storeUniqueCategories}`)
</script>

<nav class="secondary-nav">
	<ul>
		<li class="secondary-nav__categories">
			<p class="label">Categories</p>
					<ul>
						{#if $storeUniqueCategories	}
							{#each $storeUniqueCategories as category}
								<li><a href="/work/category/{category}">{category}</a></li>
						{/each}
					{/if}
				</ul>
		</li>
<!--		<li class="secondary-nav__case-studies">-->
<!--			<p>Case studies</p>-->
<!--				<ul>-->
<!--					{#if $storePosts }-->
<!--						{#each $storePosts as post}-->
<!--						&lt;!&ndash;todo replace hard coded with ref to settings&ndash;&gt;-->
<!--						<li><a href="/work/{post.slug}">{post.title}</a></li>-->
<!--						{/each}-->
<!--					{/if}-->
<!--			</ul>-->
<!--		</li>-->
	</ul>
</nav>

<style lang="scss">

	.secondary-nav {
    grid-column: 1/-1;
    grid-row: 2/3;

    @media (min-width: vars.$for-tablet-landscape-up) {
      z-index: 1;
      grid-column: 1/4;
      grid-row: 2/-1;
      margin: 5px 0 0 0;
      padding: 0;
      top: 0;
      height: 100vh;
      position: sticky;
    }

		.label {
			padding-left: 0;
			margin: vars.$xs6 0 vars.$sm 0;
			font-size: vars.$base;
			color: var(--grey)
		}


    ul {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      padding: 0;
      font-size: vars.$sm;
			list-style: none;
    }



		&__categories,
    &__case-studies {

			border-top: 3px solid var(--bright-green);

      li {
				margin: 0 vars.$xs6 vars.$xs6 0;
				font-size: vars.$sm;
				font-weight: 500;
				letter-spacing: vars.$xs9;
				text-transform: uppercase;
				background: var(--soft-green) ;

				@media(min-width: vars.$for-tablet-landscape-up) {
					//margin: 0 0 vars.$xs6 vars.$xs6;
					min-width: auto;
				}
			}

      ul li a:hover { background: #00E596; }

      ul li a:visited { }

      ul li a:visited:hover { }
    }

    &__categories {
      margin: 0 vars.$xl;
      @media(min-width: vars.$for-tablet-landscape-up) {
				grid-column: 1/-1;
				margin: 0 0 0 vars.$xl;
			}
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
      //margin: vars.$xs6 0;
      padding: vars.$xs4 vars.$xs4;
    }
  }
</style>