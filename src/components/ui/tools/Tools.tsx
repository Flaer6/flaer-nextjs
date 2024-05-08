function Tools({ data }: { data: string[] }) {
	return (
		<div className='flex flex-wrap gap-3'>
			{data.map(item => (
				<div
					className='rounded bg-gray-300 dark:bg-gray-500 py-2 px-4 font-semibold'
					key={item}
					translate='no'
				>
					{item}
				</div>
			))}
		</div>
	)
}

export default Tools
