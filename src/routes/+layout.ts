import type { Post } from '$lib/types'
import { error } from '@sveltejs/kit'

export async function load({ fetch }: any) {
	try {
		const response = await fetch('api/posts')
		const posts: Post[] = await response.json()
		return { posts }
	} catch (e) {
    throw error(404, `(x) Error: Could not load posts, ${e} "`)
  }
}
