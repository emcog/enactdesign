<script>
	export let caption;
	export let images = [{}]
</script>

<figure style="grid-template-columns: repeat({images.length}, 1fr)">
	{ #each images as image, i }
		<img src="/media/{image.name}" alt="{image.alt}" style="grid-column: {i+1}/{-images.length+i}"/>
	{ /each }
	<figcaption>{caption}</figcaption>
</figure>

<style lang="scss">
	figure {
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
		//height: 100%;
		object-fit: cover;
	}


</style>
