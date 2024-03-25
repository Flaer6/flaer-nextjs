import { skillsData } from './skills.data'

function Skills() {
	return (
		<div className='max-w-[550px]'>
			<h3>My Skills</h3>
			<div className='flex flex-wrap gap-3'>
				{skillsData.map(skill => (
					<div
						className='rounded bg-gray-300 dark:bg-gray-500 py-2 px-4 font-semibold'
						key={skill}
						translate='no'
					>
						{skill}
					</div>
				))}
			</div>
		</div>
	)
}

export default Skills
