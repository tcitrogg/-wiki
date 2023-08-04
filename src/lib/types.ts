export type Topics = string
export type Contacts = string

export type Post = {
	title: string
	id: string
	nanid: string
	author: string
	description: string
	path: string
	date: string
	topics?: Topics[]
	tableOfContent?: string[]
	published: boolean
	thumbnail: string
	contact: Contacts[]
}
