<script>
	export let caption;
	export let images = []
</script>

<figure>
	{#each images as image }
		<img alt = {"image.alt"} src="image.src"/>
	{/each}
	<figcaption>{caption}</figcaption>
</figure>

<style lang="scss">
	figure {
		grid-column: 1/-1;
	}
</style>
