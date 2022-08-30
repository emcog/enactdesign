<!-- This file just here to prevent 404s with the /work/category/x/page/y route where y is not defined -->
<script context="module">
	export const load = async () => {
    return {
      status: 301,
      redirect: `/work/category`
    }
  }
</script>