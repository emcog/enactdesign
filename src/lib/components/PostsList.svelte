<script>
  export let posts = []
  import Card from './Card.svelte';
</script>


<ul class="posts-list">
  {#each posts as post}

    <li>
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
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  list-style-type: none;
  padding: 0;
}
</style>