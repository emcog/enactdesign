<!--<script context="module">-->
<!--  export const load = async () => {-->
<!--		const ReadMeFile = await import('../../README.md');-->
<!--    const ReadMe = ReadMeFile.default;-->

<!--		return {-->
<!--			props: {-->
<!--				ReadMe-->
<!--			}-->
<!--		}-->
<!--	}-->
<!--</script>-->

<script context="module">
	export async function load() {
		return {
			status: 302,
			redirect: "/work"
		};
	}
</script>

<script>
  export let ReadMe
</script>


<svelte:head>
	<title>Relatable story</title>
</svelte:head>

<h1>Welcome to enact design, please checkout my <a href="/work">work</a></h1>
<!--<svelte:component this={ReadMe} />-->
<!-- This is the README.md file in the root of the repo. It serves double duty as the homepage's content. If you'd rather use your own HTML and/or Svelte, you can delete/modify everything above this line. -->