<script>
	export let caption;
	export let image = {};
	export let hasBorder = false;
</script>

<figure style="">
		<img  src="/media/{image.name}" alt="{image.alt}"
					class:hairline={hasBorder}
		/>
	{#if caption}
		<figcaption>{caption}</figcaption>
	{/if}


</figure>

<style lang="scss">
  figure {
    grid-template-columns: repeat(12, 1fr);
    display: grid;
    grid-column: 1/-1;
    grid-gap: vars.$xs4;
    margin: 0;

    @media (min-width: vars.$for-tablet-portrait-up) { grid-column: 2/-2; }
    @media (min-width: vars.$for-tablet-landscape-up) { grid-column: 3/-1; }
  }

  figcaption {
    grid-column: 1/-2;
  }

  img {
    width: 100%;
    object-fit: cover;
		grid-column: 2/-2;
  }

  .hairline { border: 1px solid #EDF2F1 }



</style>
