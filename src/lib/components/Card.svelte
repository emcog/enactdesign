<script>
	export let slug,
						 coverImage,
						 alt,
						 coverWidth,
						 coverHeight,
						 title,
						 excerpt,
						 categories;
	console.log(`the cover image is ${coverImage}`)
</script>
<a href="/work/{slug}">
	<article class="card">
	<div class="card__copy">
		<h2>{title}</h2>
		<p>{excerpt}</p>
		<span>{categories}</span>
	</div>

		<img
			src={coverImage}
			alt="{alt}"
			width={coverWidth}
			height={coverHeight}
			style="ratio: {coverWidth} / {coverHeight}"
		/>
</article>
</a>

<style lang="scss">

	article {
		transition: all .25s;
		display: flex;
		flex-direction: column-reverse;
		max-width: 100%;
		margin: vars.$xs 0;


     @media (min-width: vars.$for-tablet-landscape-up) {
       grid-column: 1/-1;
			 display: grid;
			 grid-template-columns: repeat(12, 1fr);
			 grid-gap: 8px;
       margin: 0 vars.$xl5 vars.$xs2 vars.$xl5;
			 //height: 485px;
       border-top: 3px solid var(--bright-green);
       color: var(--black);
       background: var(--soft-green);
     }

    	&:hover{ background: var(--mid-green); }


    img {
			 grid-column: 3/-1;
			 height: 100%;
			 width: 100%;
			 object-fit: cover;
       margin-bottom: 0;
       padding-bottom: 0;
       @media (min-width: vars.$for-tablet-landscape-up) {
         grid-column: 7/-1;
       }
     }
   }

  a { text-decoration: none; }

  a:hover { text-decoration: none;}

	.card__copy {
		grid-column: 1/7;
		@media (min-width: vars.$for-tablet-landscape-up) { padding: vars.$lg 0 0 0; }

		margin: 0;
		padding: 0 vars.$base vars.$base 0;

		h2 {
      margin-top: vars.$xs4;
      font-size: vars.$xl;
			font-weight: bold;

      @media (min-width: vars.$for-tablet-landscape-up) { font-size: vars.$xl2; }
		}

		p {
			font-size: vars.$lg;
      @media (min-width: vars.$for-tablet-landscape-up) {
				font-size: vars.$lg;
				line-height: 1.2;
				margin-top: vars.$xl;
      }
		}

		span {font-size: vars.$base;}
   }

</style>