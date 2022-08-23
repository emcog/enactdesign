<script>
	export let slug,
						 coverImage,
						 alt,
						 coverWidth,
						 coverHeight,
						 title,
						 excerpt,
						 categories;
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

  a { text-decoration: none;}

  a:hover { text-decoration: underline;}

	article {
     transition: all .25s;

     @media (min-width: vars.$for-tablet-landscape-up) {
       display: grid;
       grid-template-columns: repeat(6, 1fr);
       margin: 0 0 vars.$xs2 0;
			 border-top-left-radius: vars.$xs5;
			 height: 485px;
     }

		display: flex;
		flex-direction: column-reverse;
		max-width: 100%;
		margin: vars.$xs 0;
		border-bottom-left-radius: vars.$xs3;
		color: white;
		background: black;

     img {
			 grid-column: 3/-1;
			 width: 100%;
			 height: 485px;
       margin-bottom: 0;
       padding-bottom: 0;
     }
   }

	.card__copy {
		grid-column: 1/3;
    @media (min-width: vars.$for-tablet-landscape-up) { margin: auto vars.$base; }

		margin: 0 vars.$base;
		padding-bottom: vars.$base;

		h2 {
      @media (min-width: vars.$for-desktop-up) {
				font-size: vars.$xl2;
        margin-top: vars.$xs2;
			}
			color: white;
			font-size: vars.$xl;
			margin-top: vars.$xs4;

		}

		p {font-size: vars.$lg;}

		span {font-size: vars.$sm;}
   }



	 .card:hover {
		 filter:drop-shadow(0 vars.$xs6 vars.$xs vars.$slate-200);
	 }

</style>