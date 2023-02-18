<script>

	export let categories = []

	// let arraysOfCategories = [];
	// let duplicateCategories = [];
	// let setCategories = /* @__PURE__ */ new Set();
	// let uniqueCategories = [];
	// posts.map((e) => arraysOfCategories.push(e.categories));
	// duplicateCategories = arraysOfCategories.flat(2);
	// duplicateCategories.forEach((e) => setCategories.add(e));
	// uniqueCategories = [...setCategories];
	// uniqueCategories.sort();
	// console.log('secondary nav', uniqueCategories);
	console.log('secondary nav', categories)
</script>

<nav class="secondary-nav">
	<ul>
		<li class="secondary-nav__categories">
			<p class="label">Categories</p>
			{#each categories as category}
				<li>{category.title}</li>
			{/each}
		</li>
	</ul>
</nav>

<style lang="scss">

	.secondary-nav {
    grid-column: 1/-1;
    grid-row: 2/3;
		z-index: 1;

		@media(min-width: vars.$for-tablet-portrait-up) {
      margin: 14px 0 0 0;
			grid-column: 1/5;
      grid-row: 2/-1;
      padding: 0;
      top: 0;
      height: 100vh;
      position: sticky;
		}

    @media (min-width: vars.$for-tablet-landscape-up) {
			grid-column: 1/4;
      margin: 3px 0 0 0;
		}


		&__categories,
    &__case-studies {
			border-top: 3px solid var(--bright-green);
//<<<<<<< HEAD
//
//			.label {
//				margin: vars.$xs3 0 vars.$sm 0;
//				padding: 0;
//				font-size: vars.$base;
//				color: var(--mid-grey);
//
//			}
//=======
//      margin: 0 vars.$xs;
//			width: 100%;
//>>>>>>> main

			@media(min-width: vars.$for-tablet-portrait-up) {
				min-width: auto;
      	margin: 0 vars.$xs 0 vars.$xs;
			}



    }

    &__categories {
      @media(min-width: vars.$for-tablet-landscape-up) {
				grid-column: 1/-1;
				margin: 0 0 0 vars.$xl;
			}
    }


    &__case-studies {
      @media(min-width: vars.$for-tablet-landscape-up) {
				grid-column: 2/3;
      	margin: 0 vars.$xl2 0 vars.$xs*-1 ;
			}
    }

    li > p { padding: vars.$xs6 vars.$xs4; }
  }

	.secondary-nav ul {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 0;
    font-size: vars.$sm;
    list-style: none;
  }


	.secondary-nav > ul {  margin-bottom: 0; }

	.secondary-nav a {
    text-decoration: none;
    display: block;
    line-height: 1.25;
    padding: vars.$xs4;
  }

  .secondary-nav .label {
    margin: vars.$xs6 0 vars.$sm 0;
    padding-left: 0;
    font-family: var(--headings);
    font-size: vars.$base;
    color: var(--grey);
    background: none;
  }

	.secondary-nav__category, .secondary-nav__case-studies {
      margin: 0 vars.$xs6 vars.$xs6 0;
      font-size: vars.$sm;
      font-weight: 500;
      letter-spacing: vars.$xs9;
      text-transform: uppercase;
      background: var(--soft-green);

      @media(min-width: vars.$for-tablet-landscape-up) { min-width: auto; }

      a:hover { background: var(--bright-green); }
      a:visited { background: var(--mid-grey) }
      a:visited:hover { background: var(--bright-green) }
    }

  .secondary-nav__category:nth-child(-n+2) > a { font-weight: 600;}

</style>