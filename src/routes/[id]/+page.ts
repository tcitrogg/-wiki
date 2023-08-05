import { error } from '@sveltejs/kit'

export async function load({ params, url }: any) {
  let paramsId: string = params.id.replaceAll("-", " ")   // Replace every `-` in `id` with " " to get the title back
//   const firstLetter: string = paramsId.charAt(0).toUpperCase()             // Convert the first letter to uppercase
//   const paramsName: string = `${firstLetter}${paramsId.slice(1)}`
  let pathId: string = url.searchParams.get("fd")
  let post: any = {}
	try {
    pathId === null
      ? post = await import(`../../posts/${paramsId}.md`)
      : post = await import(`../../posts/${pathId}/${paramsId}.md`)

		return {
			content: post.default,
			meta: {...post.metadata, pathId},
			paramsId: params.id
		}
	} catch (e) {
		throw error(404, `Could not find : <strong>${paramsId}</strong>`)
	}
}
