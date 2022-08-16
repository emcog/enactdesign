<script>
  export let posts = []
  import Card from './Card.svelte';
</script>

<!--todo LeftNav shouldn't be inside main, its poor accessability-->
<ul class="posts-list">
  {#each posts as post}

    <li class="posts-list__post">
      <Card slug="{post.slug}"
            coverImage="{post.coverImage}"
            alt="{post.alt}"
            coverWidth="{post.coverWidth}"
            coverHeight="{post.coverHeight}"
            title="{post.title}"
            excerpt="{post.excerpt}"
            categories="{post.categories}"
      />
    </li>
  {/each}
</ul>

<style lang="scss">

.posts-list {
  display: grid;
  grid-template-columns: vars.$primary-grid;
  //flex-direction: row;
  //flex-wrap: wrap;
  //justify-content: flex-start;
  list-style-type: none;
  padding: 0;
}

li {
  grid-column: 3/-1;
  width: 100%;
}
</style>