<!-- This is the global layout file; it "wraps" every page on the site. (Or more accurately: is the parent component to every page component on the site.) -->
<script context="module">
	export const load = async({ url, fetch }) => {
    /**
     * This fetch call is not used in this file, but the route won't be pre-rendered 
     * and routed properly unless it's called inside a `load` function. ¯\_(ツ)_/¯
     * */ 
    const rss = await fetch(`/api/rss.xml`)

    return {
      props: {
        path: url.pathname
      }
    }
  }
</script>

<script>
  import '$lib/assets/scss/global.scss'
  import Header from '$lib/components/Header.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import { currentPage, isMenuOpen } from '$lib/assets/js/store'
  import { navItems } from '$lib/config'
	import { prefetch } from '$app/navigation'
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'
  import LeftNav from '$lib/components/LeftNav.svelte';
  import Callout from '$lib/components/Callout.svelte';

  const transitionIn = { delay: 150, duration: 150 }
  const transitionOut = { duration: 100 }

  export let path
  
  /**
   * Updates the global store with the current path. (Used for highlighting 
   * the current page in the nav, but could be useful for other purposes.)
   **/
  $: currentPage.set(path)

  /**
   * This pre-fetches all top-level routes on the site in the background for faster loading.
   * https://kit.svelte.dev/docs#modules-$app-navigation
   * 
   * Any route added in src/lib/config.js will be prefetched automatically. You can add your
   * own prefetch() calls here, too.
   **/
  onMount(() => {
    navItems.forEach(item => prefetch(item.route))
  })
</script>


<!-- 
  The below markup is used on every page in the site. The <slot> is where the page's
  actual contents will show up.
-->
<div class="layout" class:open={$isMenuOpen}>
  <Header />
  <LeftNav />
  {#key path}
    <!-- as-->
    <main
      id="main"
      tabindex="-1"
      in:fade={transitionIn}
      out:fade={transitionOut}
    >
      <slot />
    </main>
  {/key}
  <Footer />
</div>


<style lang="scss">

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    font-family: inherit;
    max-width: 100%;
  }

  main {
    width: 100%;
    grid-column: 2/-1;
    //max-width: 68rem;
    //margin: 6rem auto;
    //padding: 0 1rem;
  }

  .layout {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
  }



  img {
    width: 100%;
    max-width: 100%;
    height: auto;
  }



  li {
    margin-bottom: 0.25rem;
  }




  :where(h2, h3, h4, h5, h6) {
    .icon-link {
      position: relative;

      &::before {
        content: url('/link.svg');
        fill: currentColor;
        position: absolute;
        left: -1rem;
        width: 1rem;
        height: 1rem;
        top: 0;
        opacity: 0.2;
        transition: opacity .2s;

        @media (min-width: vars.$smMin) {
          left: -1.5rem;
        }
      }

      &:hover::before {
        opacity: 1;
      }
    }
  }
</style>