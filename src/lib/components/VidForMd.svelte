<script>
	export let name,
						 caption;
						 // mute = true,
						 // autoplay = true,
						 // controls = false,
						 // loop = true;
</script>

<figure>
	<video width="320" height="240" autoplay muted loop>
		<source src="/media/{name}.webm" type="video/webm">
		<source src="/media/{name}.mp4" type="video/mp4">
		Your browser does not support the video tag.
	</video>
	{#if caption}
		<figcaption>{caption}</figcaption>
	{/if}
</figure>

<style lang="scss">
	figure { grid-column: 3/7; }
</style>