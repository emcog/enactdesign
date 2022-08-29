<script>
	export let name,
						 caption,
						 hasControls = false;

	let controls = hasControls ? "controls" : null;

</script>

<figure>

	<video autoplay muted loop {controls} >
		<source src="/media/{name}.webm" type="video/webm">
		<source src="/media/{name}.mp4" type="video/mp4">
		Your browser does not support the video tag.
	</video>
	{#if caption}
		<figcaption>{caption}</figcaption>
	{/if}
</figure>

<style lang="scss">
	figure {
		grid-column: 3/7;
		margin: 0;
	}

	video {width: 100%}
</style>