<script>
  import { currentPage, isMenuOpen } from '$lib/assets/js/store'

  export let href

  let isCurrentPage;

  $: isCurrentPage = $currentPage.startsWith(href)

  const maybeCloseMenu = () => {
    if (href != $currentPage) {
      isMenuOpen.set(false)
    }
  }
</script>


<li>
  <a
    href={href}
    on:click={maybeCloseMenu}
    class:active={isCurrentPage}
    aria-current={isCurrentPage ? 'page' : false}
  >
    <slot />
  </a>
</li>

<style lang="scss">


  li {
    margin: 0 0 0 var(--base)
  }

  a {
    padding: var(--xs4) var(--xs2);

    &:hover {
      background: #00E596;
      text-decoration: none;
    }

    & .active {
      border-top: solid 2px var(--bright-green);
    }

  }
</style>