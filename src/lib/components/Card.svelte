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

	<!--todo refactor /work/ so not hard coded, i.e. linked to config.js-->
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

	.card {
     transition: all .25s;
     //transition-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1);


     @media (min-width: vars.$for-tablet-landscape-up) {
       display: grid;
       grid-template-columns: 1fr 2fr;
       margin: vars.$xs6 0;
			 border-top-left-radius: vars.$xs;
			 height: 485px;
     }

		display: flex;
		flex-direction: column-reverse;

		 max-width: 100%;
     margin: vars.$xs 0;
     border-bottom-left-radius: vars.$xs;
     background: vars.$slate-100;

     img {
			 grid-column: 2/-1;
			 width: 100%;
			 height: 485px;
       margin-bottom: 0;
       padding-bottom: 0;
     }
   }

	.card__copy {
		grid-column: 1/-2;
    @media (min-width: vars.$for-tablet-landscape-up) { margin: auto vars.$base; }
		margin: 0 vars.$base;
		padding-bottom: vars.$base;

		h2 {
      @media (min-width: vars.$for-desktop-up) {
				font-size: vars.$xl2;
        margin-top: vars.$xs2;
			}
			font-size: vars.$xl;
			margin-top: vars.$xs4;

		}

		p {font-size: vars.$lg;}

		span {font-size: vars.$sm;}
   }



	 .card:hover {
		 background: vars.$slate-300;
		 //filter:drop-shadow(0 vars.$xs6 vars.$xs vars.$slate-200);
	 }

</style>