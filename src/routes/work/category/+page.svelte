<script>
  throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

  export let uniqueCategories
</script>


<svelte:head>
  <title>Blog | Categories</title>
</svelte:head>


<div class="compressed-content">
  <h1 class="h2">All blog categories</h1>
  
  <ul>
    {#each uniqueCategories as category}
    <li>
      <a href="/work/category/{category.title}">
        { category.title }
      </a>
      ({category.count})
    </li>
    {/each}
  </ul>
</div>