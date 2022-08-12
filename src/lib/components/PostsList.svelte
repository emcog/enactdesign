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
          <div class="card__copy">
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <span>{post.categories}</span>
          </div>
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
  list-style-type: none;
  padding: 0;


  .card {
    a {text-decoration: none;}
    a:hover {text-decoration: underline; }

    article {
      max-width: 291px;
      margin: 0 vars.$xs6;
      border-radius: vars.$xs;
      background: white;

      img {
        border-top-left-radius: vars.$xs5;
        border-top-right-radius: vars.$xs5;
        margin-bottom: 0;
        padding-bottom: 0;
      }

      h2 {
        font-size: vars.$lg;
      }

      p {
        font-size: vars.$base;
      }

      span {
        font-size: vars.$sm;
      }

      .card__copy {
        margin: 0 vars.$sm;
        padding-bottom: vars.$base;

        h2 {
          margin-top: vars.$xs2;
        }
      }
    }
  }
}
</style>