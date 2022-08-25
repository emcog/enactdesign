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

	article {
		transition: all .25s;
		display: flex;
		flex-direction: column-reverse;
		max-width: 100%;
		margin: vars.$xs 0;
		//border-bottom-left-radius: vars.$xs3;
		color: black;
		background: white;

     @media (min-width: vars.$for-tablet-landscape-up) {
       display: grid;
       grid-template-columns: repeat(6, 1fr);
       margin: 0 0 vars.$xs2 0;
			 //border-top-left-radius: vars.$xs5;
			 height: 485px;
     }

		&:hover{
			background: #00E596;
		}

     img {
			 grid-column: 3/-1;
			 width: 100%;
			 height: 485px;
       margin-bottom: 0;
       padding-bottom: 0;
     }
   }

  a {
		//h2 {text-decoration: underline; }
		text-decoration: none;
	}

  a:hover { text-decoration: none;}

	.card__copy {
		grid-column: 1/3;
    @media (min-width: vars.$for-desktop-up) { margin: calc(1em * -1 + 1px ) 0 0 0; }
    @media (min-width: vars.$for-tablet-landscape-up) and (max-width: vars.$for-desktop-up) { margin: calc(1em * -1 + 7px) 0 0 0; }

		margin: 0 vars.$base;
		padding: 0 vars.$base vars.$base 0;

		h2 {
      font-size: vars.$xl;
      margin-top: vars.$xs4;

      @media (min-width: vars.$for-desktop-up) {
				font-size: vars.$xl2;
        margin-top: vars.$xs2;
			}



		}

		p {font-size: vars.$lg;}

		span {font-size: vars.$sm;}
   }



	 //.card:hover {
		// filter:drop-shadow(0 vars.$xs6 vars.$xs vars.$slate-200);
	 //}

</style>