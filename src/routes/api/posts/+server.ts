import { json } from '@sveltejs/kit'
import type { Post } from '$lib/types'
import { nanoid } from 'nanoid';

const key = "t/bnierimi"

const genCipher = ()=>{
  // return createCipheriv("aes-128-ccm", key, null).toString()
  return "aes-128-ccm"
}

async function getPosts() {
	let posts: Post[] = []

	const paths = import.meta.glob('/src/posts/*.md', { eager: true })

	for (const path in paths) {
		const file = paths[path]
		const id = `${path.split('/').at(-1)?.replace('.md', '')}` // converted the `undefined` to a string
    const fileId = id.replaceAll(" ", "-").toLowerCase()

		if (file && typeof file === 'object' && 'metadata' in file && id) {
			const metadata = file.metadata as Omit<Post, 'id'>
			const post = { ...metadata, id, nanid: fileId } satisfies Post
			post.published && posts.push(post)
		}
	}

	posts = posts.sort((first, second) =>
    new Date(second.date).getTime() - new Date(first.date).getTime()
	)

	return posts
}

export async function GET() {
	const posts = await getPosts()
	return json(posts)
}
