export const load = async ({ url }) => {
	const postRes = await fetch(`${url.origin}/api/posts.json`)
	const posts = await postRes.json()

	const totalRes = await fetch(`${url.origin}/api/posts/count.json`)
	const total = await totalRes.json()

	const uniqueCategories = await fetch(`${url.origin}/api/posts/categories.json`)
	const categories = uniqueCategories.json()


	return { posts, total, categories }
}
