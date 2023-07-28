export type Categories = string
export type Contacts = string

export type Post = {
	title: string
	id: string
	nanid: string
	description: string
	date: string
	categories?: Categories[]
	published: boolean
	author: string
	thumbnail: string
	contact: Contacts[]
}
