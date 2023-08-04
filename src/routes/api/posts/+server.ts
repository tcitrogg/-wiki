import { json } from '@sveltejs/kit'
import type { Post } from '$lib/types'
import { nanoid } from 'nanoid';

async function getPosts() {
	let posts: Post[] = []

	const paths = import.meta.glob(`/src/posts/**/*.md`, { eager: true })

	for (const path in paths) {
		const file = paths[path]
		const id = `${path.split('/').at(-1)?.replace('.md', '')}` // converted the `undefined` to a string
    	const fileId = id.replaceAll(" ", "-")

		if (file && typeof file === 'object' && 'metadata' in file && id) {
			const metadata = file.metadata as Omit<Post, 'id'>
			let m = {
				...metadata,
        path
			}
			const post = { ...m, id, nanid: fileId } satisfies Post
			post.published && posts.push(post)
		}
	}

	// posts = posts.sort((first, second) =>
	//     new Date(second.date).getTime() - new Date(first.date).getTime()
	// )

	posts = posts.sort((first:any) => first.title)

	return posts
}

export async function GET() {
	const posts = await getPosts()
	return json(posts)
}
