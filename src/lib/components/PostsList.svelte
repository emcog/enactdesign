<script>
  export let posts = []
  import Card from './Card.svelte';
</script>


<ul class="posts-list">
  {#each posts as post}

    <li class="">
      <Card slug="{post.slug}"
            coverImage="{post.coverImage}"
            alt="{post.alt}"
            coverWidth="{post.coverWidth}"
            coverHeight="{post.coverHeight}"
            title="{post.title}"
            excerpt="{post.excerpt}"
            categories="{post.categories}"
      />

<!--      <article>-->
<!--&lt;!&ndash;        todo refactor so not hard coded&ndash;&gt;-->
<!--        <a href="/work/{post.slug}">-->
<!--          <img-->
<!--          src={post.coverImage}-->
<!--          alt="{post.alt}"-->
<!--          width={post.coverWidth}-->
<!--          height={post.coverHeight}-->
<!--          style="ratio: {post.coverWidth} / {post.coverHeight}"-->
<!--          />-->
<!--          <div class="card__copy">-->
<!--            <h2>{post.title}</h2>-->
<!--            <p>{post.excerpt}</p>-->
<!--            <span>{post.categories}</span>-->
<!--          </div>-->
<!--        </a>-->
<!--      </article>-->
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
}
</style>