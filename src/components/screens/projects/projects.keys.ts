interface IKey {
	name: string
	tools: string[]
}

export const projectsKeys: IKey[] = [
	{
		name: 'metaV',
		tools: ['Svelte', 'TypeScript', 'SCSS', 'Tailwind', 'SwiperJs'],
	},
	{
		name: 'cryptolly',
		tools: ['ReactJs', 'SCSS', 'Axios', 'Coingecko API'],
	},
	{
		name: 'himo',
		tools: ['HTML', 'CSS', 'JavaScript', 'JQuery', 'SlickJs'],
	},
	{
		name: 'tonBingo',
		tools: ['NextJs', 'TypeScript', 'SCSS', 'Tailwind'],
	},
] as const
