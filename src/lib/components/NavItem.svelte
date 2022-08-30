<script>
  import { currentPage, isMenuOpen } from '$lib/assets/js/store'

  export let href

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
  a {
    margin: 0 calc(vars.$xs2 * -1) 0 0;
    padding: vars.$xs4 vars.$xs2;

    &:hover {
      background: #00E596;
      text-decoration: none;
    }
  }
</style>