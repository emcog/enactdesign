<!-- This file renders each individual blog post for reading. Be sure to update the svelte:head below -->

<script context="module">

  export const load = async ({ params }) => {
    try {
      const post = await import(`../../lib/posts/${params.post}.md`)

      return {
        props: {
          PostContent: post.default,
          meta: { ...post.metadata, slug: params.post }
        }
      }
    } catch(error) {
      return {
        status: 404,
        error: error.message
      }
    }
  }


</script>


<script>
  export let PostContent
  export let meta

  const { title, excerpt, date, updated, coverImage, coverWidth, coverHeight, categories } = meta

</script>


<svelte:head>
  <!-- Be sure to add your image files and un-comment the lines below -->
  <title>{title}</title>
  <meta data-key="description" name="description" content="{excerpt}">
  <meta property="og:type" content="article" />
  <meta property="og:title" content={title} />
  <meta name="twitter:title" content={title} />
  <meta property="og:description" content={excerpt} />
  <meta name="twitter:description" content={excerpt} />
<!--   <meta property="og:image" content="https://enact.design/image_path" /> -->
  <meta property="og:image:width" content={coverWidth} />
  <meta property="og:image:height" content={coverHeight} />
  <!-- <meta name="twitter:image" content="https://enact.design/image_path" /> -->
</svelte:head>


<article class="post">
  <!-- You might want to add an alt frontmatter attribute. If not, leaving alt blank here works, too. -->
<!--  <img-->
<!--    class="cover-image"-->
<!--    src="{coverImage}"-->
<!--    alt=""-->
<!--    style="aspect-ratio: {coverWidth} / {coverHeight};"-->
<!--    width={coverWidth}-->
<!--    height={coverHeight}-->
<!--  />-->

  <h1>{ title }</h1>
  
<!--  <div class="meta">-->
<!--    <b>Published:</b> {date}-->
<!--    <br>-->
<!--    <b>Updated:</b> {updated}-->
<!--  </div>-->
  
  <svelte:component this={PostContent} />

  {#if categories}
    <aside class="post-footer">
      <h2>Posted in</h2>
      <ul>
        {#each categories as category}
          <li class="category">
            <a href="/work/category/{category}/">
              { category }
            </a>
          </li>
        {/each}
      </ul>
    </aside>
  {/if}
</article>

<style lang="scss">

// todo this is awful, pure css with where is likely much better

  :global article.post {
    grid-template-rows: vars.$xl6 auto;
    grid-column: 1/-1;
    margin: 0 vars.$base;
    max-width: 1200px;



    h1 + p {
      margin: 0 0 vars.$xs2 0;
      font-weight: 500;
    }

    h2, h3, h4, h5, h6, p, span, section, div, pre, ul {
      margin: 0 0 vars.$sm 0;
    }

    h2 {
      font-size: vars.$xl;
      font-weight: 500;
    }

    h3, h4, h5, h6 {
      font-size: vars.$lg;
      font-weight: 500;
    }

    @media (min-width: vars.$for-tablet-portrait-up) {
      display: grid;
      grid-template-columns: repeat(12, 1fr);

      h2, h3, h4, h5, h6, p, span, section, div, pre, ul {
        grid-column: 2/-2;
        margin: vars.$xs4 0 vars.$base 0;
      }


      p {
        font-size: vars.$lg;
        margin: 0 0 vars.$xl 0;
      }
    }

    @media (min-width: vars.$for-tablet-landscape-up) {
      h2, h3, h4, h5, h6, p, span, section, div, pre, ul {
        grid-column: 3/-3;
      }
      margin: 0 auto;
    }

    .meta {
      font-size: 0.8rem;
      margin-bottom: 4rem;
    }

    h1 {
      grid-column: 1/1;
      align-self: end;
      font-size: vars.$xl2;
      @media(min-width: vars.$for-tablet-portrait-up) {
        grid-column: 2/-2
      }
      @media(min-width: vars.$for-tablet-landscape-up) {
        grid-column: 3/-2;
        font-size: vars.$xl3;
      }
    }

    img + h1 {
      margin-top: 1rem;
    }

  }



  .post-footer {

    border-top: 3px solid var(--bright-green);
    grid-column: 1/-1;
    margin: vars.$xl3 0 vars.$xl4 0 ;
    padding: vars.$base 0 0 0;
    width: 100%;

    @media(min-width: vars.$for-tablet-portrait-up) {grid-column: 3/-3;}

    ul {
      padding: 0;
      margin: vars.$xs3 0 0 vars.$xs4*-1;
    }

    li {
      display: inline-block;
      font-size: 0.8rem;

      a {
        font-family: var(--headings);
        font-size: vars.$base;
        font-weight: 500;
        text-decoration: none;
        display: block;
        line-height: 1.25;
        //margin: vars.$xs6 0;
        padding: vars.$xs4 vars.$xs2;
      }

    }
  }

  //todo duplicated over several files
  .category {
    margin: 0 vars.$xs6 vars.$xs6 0;
    font-size: vars.$sm;
    font-weight: 500;
    letter-spacing: vars.$xs9;
    text-transform: uppercase;
    background: var(--soft-green);

    @media(min-width: vars.$for-tablet-landscape-up) {
      min-width: auto;
    }

    a:hover {
      background: var(--bright-green);
    }

    a:visited {
      background: var(--mid-grey)
    }

    a:visited:hover {
      background: var(--bright-green)
    }
  }


</style>