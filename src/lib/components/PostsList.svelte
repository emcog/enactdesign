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
          alt=""
          width={post.coverWidth}
          height={post.coverHeight}
          style="ratio: {post.coverWidth} / {post.coverHeight}"
          />
          <h2>
            {post.title}
          </h2>
        </a>
      </article>

      <p>{post.excerpt}</p>
    </li>
  {/each}
</ul>

<style lang="scss">


  //@use 'src/lib/assets/scss/vars';
  .card {
    article{
      border-radius: vars.$xs;
      background: white;
    image{}
      h2 { font-size: vars.$lg;}
      p{
        font-size: vars.$lg;
      }
      span{ font-size: vars.$xs2;}
    }
  }
</style>