<script>
  import MainNav from './MainNav.svelte'
  import HamburgerMenuButton from './HamburgerMenuButton.svelte'
  import { siteTitle } from '$lib/config'

  const focusMain = () => {
		const main = document.querySelector('main');
		main.focus();
	}
</script>


<header>
  <a on:click|preventDefault={focusMain} class="skip-to-content-link" href="#main">
    Skip to main content
  </a>
  
  <a href="/" class="site-title">{siteTitle}</a>
  
<!--  <HamburgerMenuButton />-->
  <MainNav class="main-nav" />

</header>

<style lang="scss">

  header {
    grid-column: 1/-1;
    display: flex;
    //flex-direction: row;
    border-bottom: 4px vars.$blue-600;

    @media (min-width: vars.$smMin) {
      justify-content: center;
      //flex-wrap: wrap;
      height: auto;
    }

    .site-title {
      font-family: var(--bodyFont);
      font-size: 2.1rem;
      //line-height: 1;
      color: inherit;
      //text-align: center;
      margin: 0;
      //display: block;
      font-size: 1.4rem;
      font-weight: bold;

      @media (min-width: vars.$smMin) {
        width: 100%;
        font-size: 1.6rem;
      }
    }

    .main-nav{
      margin-left: auto;
    }

    .menu-button {
      margin: 0;
      background: transparent !important;
      color: inherit;
      padding: 0;
      border: 0;
      width: 2rem;

      @media (min-width: vars.$smMin) {
        display: none;
      }
    }


  }
</style>