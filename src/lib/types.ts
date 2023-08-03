export type Categories = string
export type Contacts = string

export type Post = {
	title: string
	id: string
	nanid: string
	author: string
	description: string
	domain: string
	date: string
	categories?: Categories[]
	tableOfContent?: string[]
	published: boolean
	thumbnail: string
	contact: Contacts[]
}
