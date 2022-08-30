
export const load = async ({ params }) => {
  try {
    const post = await import(`../../../lib/posts/${params.post}.md`)

    return {
  PostContent: post.default,
  meta: { ...post.metadata, slug: params.post }
}
  } catch(error) {
    throw new Error("@migration task: Migrate this return statement (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693)");
    return {
      status: 404,
      error: error.message
    }
  }
}


