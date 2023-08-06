type DateStyle = Intl.DateTimeFormatOptions['dateStyle']

export function formatDate(date: string, dateStyle: DateStyle = 'full', locales = 'en') {
	const formatter = new Intl.DateTimeFormat(locales, { dateStyle })
	return formatter.format(new Date(date))
}

export const colors = {
	1: "blue-700"
}

export const getPath = (string: string)=>{
	const p = string.split("/src/posts")[1]
  return p.split("/")[1]
}

export const mkLink = (id:string, path:string): string=>{
  const fd = getPath(path)
  const endsMd = fd.endsWith(".md")
  return endsMd ? `/${id}` : `/${id}?fd=${fd.replace(" ", "%20")}`
}

export const genRandomColor = ()=>{
  return `#${Math.random().toString(16).slice(-6)}`
}