<!-- This is the global layout file; it "wraps" every page on the site. (Or more accurately: is the parent component to every page component on the site.) -->
<script>
  import '$lib/assets/scss/global.scss'
  import Header from '$lib/components/Header.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import { currentPage, isMenuOpen } from '$lib/assets/js/store'
  import { navItems } from '$lib/config'
  import { prefetch } from '$app/navigation'
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'
  // import SecondaryNav from '$lib/components/SecondaryNav.svelte';


  export let data

  const transitionIn = { delay: 150, duration: 150 }
  const transitionOut = { duration: 100 }

  /**
   * Updates the global store with the current path. (Used for highlighting
   * the current page in the nav, but could be useful for other purposes.)
   **/
  $: currentPage.set(data.path)

   // let displaySecondaryNav = false;
   // $: displaySecondaryNav = data.path === '/work' || '/work/category';

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


<div class="layout" class:open={$isMenuOpen}>
  <Header />
<!--todo fix secondary nav-->
<!--      {#if displaySecondaryNav}-->
<!--        <SecondaryNav />-->
      <!--{/if}-->


  {#key data.path}
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


  .layout {
    @media (min-width: vars.$for-tablet-landscape-up) {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      grid-template-rows: minmax(min-content, max-content) vars.$xl6 auto;
    }

    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }


  main {
    
    grid-column: 1/-1;
    grid-row: 3/-2;
    margin: auto;
    width: 100%;

    @media (min-width: vars.$for-tablet-landscape-up) {
      grid-row: 2/-1
    }
  }


  img {
    width: 100%;
    max-width: 100%;
    height: auto;
  }



  li { margin-bottom: 0.25rem;}


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


        @media (min-width: vars.$smMin) { left: -1.5rem; }
      }


      &:hover::before { opacity: 1; }
    }
  }
</style>