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

  a { text-decoration: none; }

  a:hover { text-decoration: underline;}

	.card {
     transition: all .25s;
     //transition-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1);


     @media (min-width: vars.$for-tablet-landscape-up) {
       display: grid;
       grid-template-columns: 1fr 2fr;
     }

		 display: flex;
		 flex-direction: column-reverse;

     max-width: 100%;
     height: 485px;
     margin: vars.$xs6 0;
     border-top-left-radius: vars.$xs;
     border-bottom-left-radius: vars.$xs;
     background: vars.$slate-100;



     img {
			 grid-column: 2/-1;
			 width: 100%;
			 height: 100%;
       margin-bottom: 0;
       padding-bottom: 0;
     }
   }

	.card__copy {
		grid-column: 1/-2;
		margin: auto vars.$base;
		padding-bottom: vars.$base;

		h2 {
			font-size: vars.$xl2;
			//margin-top: vars.$xs2;
		}

		p {font-size: vars.$lg;}

		span {font-size: vars.$sm;}
   }



	 .card:hover {
		 background: vars.$slate-300;
		 //filter:drop-shadow(0 vars.$xs6 vars.$xs vars.$slate-200);
	 }

</style>