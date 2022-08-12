<script>
  export let posts = []
</script>


<ul class="posts-list">
  {#each posts as post}
    <li class="card">
      <article>
<!--        todo refactor so not hard coded-->
        <a href="/work/{post.slug}">
          <img
          src={post.coverImage}
          alt="{post.alt}"
          width={post.coverWidth}
          height={post.coverHeight}
          style="ratio: {post.coverWidth} / {post.coverHeight}"
          />
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
          <span>{post.categories}</span>
        </a>
      </article>


    </li>
  {/each}
</ul>

<style lang="scss">

// todo add _layout.svelte for work update config to match

.posts-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
}

  .card {
    article{
      max-width: 291px;
      border-radius: vars.$xs;
      background: white;
    image{}
      h2 { font-size: vars.$lg;}
      p{
        font-size: vars.$lg;
      }
      span{ font-size: vars.$sm;}
    }
  }
</style>