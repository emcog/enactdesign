<!-- This file renders each individual blog post for reading. Be sure to update the svelte:head below -->
<script>
  export let data
  const { title, excerpt, date, updated, coverImage, coverWidth, coverHeight, categories } = data.meta
  import SecondaryNav from '$lib/components/SecondaryNav.svelte';
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
  <!-- <meta property="og:image" content="https://yourdomain.com/image_path" /> -->
  <meta property="og:image:width" content={coverWidth} />
  <meta property="og:image:height" content={coverHeight} />
  <!-- <meta name="twitter:image" content="https://yourdomain.com/image_path" /> -->
</svelte:head>


<article class="post primary-12-grid">
  <!-- You might want to add an alt frontmatter attribute. If not, leaving alt blank here works, too. -->
  <div class="content-wrapper">
  <img
    class="cover-image"
    src="{coverImage}"
    alt=""
    style="aspect-ratio: {coverWidth} / {coverHeight};"
    width={coverWidth}
    height={coverHeight}
  />

  <h1>{ title }</h1>

  <div class="meta">
    <b>Published:</b> {date}
    <br>
    <b>Updated:</b> {updated}
  </div>

  {@html data.PostContent}
  </div>

  {#if categories}
    <aside class="secondary-nav">
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
  aside {
    border-top: 3px solid var(--bright-green);
  }
    h2 {
      text-transform: uppercase;
      font-size: var(--base);
      margin: var(--xs2) 0;
    }

  .content-wrapper { grid-column: 4/-4; }





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

</style>