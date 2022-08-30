import { redirect } from '@sveltejs/kit';
import { postsPerPage, siteDescription } from '$lib/config'
import fetchPosts from '$lib/assets/js/fetchPosts'

export const load = async ({ fetch, params }) => {
  try {
    const page = params.page ? params.page : 1

    // Keeps from duplicationg the blog index route as page 1
    if (page <= 1) {
      throw redirect(301, '/work');
    }
    
    let offset = (page * postsPerPage) - postsPerPage
  
    const totalPostsRes = await fetch('/api/posts/count.json')
    const { total } = await totalPostsRes.json()
    const { posts } = await fetchPosts({ offset, page })
    
    return {
  posts,
  page,
  totalPosts: total
}
  } catch(error) {
    throw new Error("@migration task: Migrate this return statement (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693)");
    return {
      status: 404,
      error: error.message
    }
  }
}
