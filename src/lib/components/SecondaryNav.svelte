<script>
	export let categories = []
	export let activeCategory



	console.log('activeCategory', typeof activeCategory, typeof categories[0].title)



	/*
	take activeCategory value
	loop through categories
	add class to the category which matches active categories

	if activeCategory === category.title in categories
	then
	 */
</script>

<nav class="secondary-nav">
	<p>Secondary Nav</p>
	<ul>
		<li class="secondary-nav__categories">
			{#each categories as category}
					<li class="{ activeCategory === category.title ? 'active': ''}" ><a href="/work/category/{category.title}"> {category.title}</a> </li>
			{/each}
		</li>
	</ul>
	{#if activeCategory}
		<span>{activeCategory}</span>
	{/if}
</nav>



<style lang="scss">

	.active {
		color: #E63946;
	}

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





<!--<style lang="scss">-->

<!--	.secondary-nav {-->
<!--    grid-column: 1/-1;-->
<!--    grid-row: 2/3;-->
<!--		z-index: 1;-->

<!--		@media(min-width: vars.$for-tablet-portrait-up) {-->
<!--      margin: 14px 0 0 0;-->
<!--			grid-column: 1/5;-->
<!--      grid-row: 2/-1;-->
<!--      padding: 0;-->
<!--      top: 0;-->
<!--      height: 100vh;-->
<!--      position: sticky;-->
<!--		}-->

<!--    @media (min-width: vars.$for-tablet-landscape-up) {-->
<!--			grid-column: 1/4;-->
<!--      margin: 3px 0 0 0;-->
<!--		}-->


<!--		&__categories,-->
<!--    &__case-studies {-->
<!--			border-top: 3px solid var(&#45;&#45;bright-green);-->
<!--//<<<<<<< HEAD-->
<!--//-->
<!--			.label {-->
<!--				margin: vars.$xs3 0 vars.$sm 0;-->
<!--				padding: 0;-->
<!--				font-size: vars.$base;-->
<!--				color: var(&#45;&#45;mid-grey);-->

<!--			}-->
<!--//=======-->
<!--      margin: 0 vars.$xs;-->
<!--			width: 100%;-->
<!--//>>>>>>> main-->

<!--			@media(min-width: vars.$for-tablet-portrait-up) {-->
<!--				min-width: auto;-->
<!--      	margin: 0 vars.$xs 0 vars.$xs;-->
<!--			}-->
<!--    }-->

<!--    &__categories {-->
<!--      @media(min-width: vars.$for-tablet-landscape-up) {-->
<!--				grid-column: 1/-1;-->
<!--				margin: 0 0 0 vars.$xl;-->
<!--			}-->
<!--    }-->


<!--    &__case-studies {-->
<!--      @media(min-width: vars.$for-tablet-landscape-up) {-->
<!--				grid-column: 2/3;-->
<!--      	margin: 0 vars.$xl2 0 vars.$xs*-1 ;-->
<!--			}-->
<!--    }-->

<!--    li > p { padding: vars.$xs6 vars.$xs4; }-->
<!--  }-->

<!--	.secondary-nav ul {-->
<!--    display: flex;-->
<!--    flex-wrap: wrap;-->
<!--    flex-direction: row;-->
<!--    padding: 0;-->
<!--    font-size: vars.$sm;-->
<!--    list-style: none;-->
<!--  }-->


<!--	.secondary-nav > ul {  margin-bottom: 0; }-->

<!--	.secondary-nav a {-->
<!--    text-decoration: none;-->
<!--    display: block;-->
<!--    line-height: 1.25;-->
<!--    padding: vars.$xs4;-->
<!--  }-->

<!--  .secondary-nav .label {-->
<!--    margin: vars.$xs6 0 vars.$sm 0;-->
<!--    padding-left: 0;-->
<!--    font-family: var(&#45;&#45;headings);-->
<!--    font-size: vars.$base;-->
<!--    color: var(&#45;&#45;grey);-->
<!--    background: none;-->
<!--  }-->

<!--	.secondary-nav__category, .secondary-nav__case-studies {-->
<!--      margin: 0 vars.$xs6 vars.$xs6 0;-->
<!--      font-size: vars.$sm;-->
<!--      font-weight: 500;-->
<!--      letter-spacing: vars.$xs9;-->
<!--      text-transform: uppercase;-->
<!--      background: var(&#45;&#45;soft-green);-->

<!--      @media(min-width: vars.$for-tablet-landscape-up) { min-width: auto; }-->

<!--      a:hover { background: var(&#45;&#45;bright-green); }-->
<!--      a:visited { background: var(&#45;&#45;mid-grey) }-->
<!--      a:visited:hover { background: var(&#45;&#45;bright-green) }-->
<!--    }-->

<!--  .secondary-nav__category:nth-child(-n+2) > a { font-weight: 600;}-->

<!--</style>-->