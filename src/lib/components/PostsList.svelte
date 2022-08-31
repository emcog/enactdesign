<script>
  export let posts = []
  import Card from './Card.svelte';
</script>

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
  grid-template-columns: repeat(12, 1fr);
  list-style-type: none;
  padding: 0;
}

li {
    grid-column: 1/-1;
    width: 100%;

  @media(min-width: vars.$for-tablet-portrait-up) { grid-column: 5/-1; }

    @media(min-width: vars.$for-tablet-landscape-up) { grid-column: 4/-1; }
}
</style>