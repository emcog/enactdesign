<script>
	export let caption;
	export let images = [{}];
	export let hasBorder = false;
	console.log('PicsForMd',images.length);
	$: gridColumn = images.length === 1 ? "grid-column: 3/-1;": "";

</script>

<figure style="grid-template-columns: repeat({images.length}, 1fr)">
	{ #each images as image, i }
			<img  src="/media/{image.name}" alt="{image.alt}"
						class:hairline={hasBorder}
						style="grid-column: {i+1}/{-images.length+i}"
			/>
		{ /each }

	{#if caption}
		<figcaption>{caption}</figcaption>
	{/if}


</figure>

<style lang="scss">
	figure {
		display: grid;
		grid-column: 2/-1;
		grid-gap: vars.$xs4;
		margin: 0;
		//@media (min-width: vars.$for-tablet-portrait-up) { grid-column: 2/-1; }
		@media (min-width: vars.$for-tablet-portrait-up) { grid-column: 3/-1; }
	}

	figcaption {
		grid-column: 1/-2;
	}

	img {
		width: 100%;
		object-fit: cover;
	}

	.hairline { border: 1px solid #EDF2F1 }



</style>
