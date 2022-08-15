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

<article class="card">
	<div class="card__copy">
		<h2>{title}</h2>
		<p>{excerpt}</p>
		<span>{categories}</span>
	</div>

	<!--        todo refactor /work/ so not hard coded, i.e. linked to config.js-->
	<a href="/work/{slug}">
		<img
			src={coverImage}
			alt="{alt}"
			width={coverWidth}
			height={coverHeight}
			style="ratio: {coverWidth} / {coverHeight}"
		/>
	</a>
</article>

<style lang="scss">

	 .card {
     transition: all .25s;
     //transition-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1);

     display: grid;
     grid-template-columns: 1fr 2fr;

     max-width: 100%;
     height: 485px;
     margin: vars.$xs6 0;
     border-top-left-radius: vars.$xs;
     border-bottom-left-radius: vars.$xs;
     background: vars.$slate-100;

     a { text-decoration: none; }

     a:hover {
       text-decoration: underline;
     }

     img {
       grid-column: 2/-1;
			 width: 100%;
			 height: 100%;
       margin-bottom: 0;
       padding-bottom: 0;
     }
   }

	.card__copy {
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