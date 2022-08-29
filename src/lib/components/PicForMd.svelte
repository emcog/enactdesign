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
    grid-template-columns: repeat(6, 1fr);
    display: grid;
    grid-column: 3/-1;
    grid-gap: vars.$xs4;
    margin: 0;
  }

  figcaption {
    grid-column: 1/-2;
  }

  img {
    width: 100%;
    object-fit: cover;
		grid-column: 1/5;
  }

  .hairline { border: 1px solid #EDF2F1 }



</style>
