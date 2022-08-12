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
	<!--        todo refactor /work/ so not hard coded, i.e. linked to config.js-->
	<a href="/work/{slug}">
		<img
			src={coverImage}
			alt="{alt}"
			width={coverWidth}
			height={coverHeight}
			style="ratio: {coverWidth} / {coverHeight}"
		/>
		<div class="card__copy">
			<h2>{title}</h2>
			<p>{excerpt}</p>
			<span>{categories}</span>
		</div>
	</a>
</article>

<style lang="scss">




	 .card {
     transition: all .125s;
     transition-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1);

		 max-width: 291px;
      margin: 0 vars.$xs6;
      border-radius: vars.$xs;
      background: white;
		  filter: drop-shadow(0 vars.$xs6 vars.$xs vars.$slate-100);

     a { text-decoration: none; }
     a:hover {text-decoration: underline; }

      img {
        border-top-left-radius: vars.$xs5;
        border-top-right-radius: vars.$xs5;
        margin-bottom: 0;
        padding-bottom: 0;
      }

      .card__copy {
        margin: 0 vars.$sm;
        padding-bottom: vars.$base;

        h2 {
          font-size: vars.$lg;
					margin-top: vars.$xs2; }
      }

		 	p {font-size: vars.$base;}

		 	span {font-size: vars.$sm;}
    }

	 .card:hover { filter:drop-shadow(0 vars.$xs6 vars.$xs vars.$slate-200);}

</style>