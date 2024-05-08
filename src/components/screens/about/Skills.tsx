import Tools from '@/components/ui/tools/Tools'
import { skillsData } from './skills.data'

function Skills() {
	return (
		<div className='max-w-[550px]'>
			<h3>My Skills</h3>
			<Tools data={skillsData} />
		</div>
	)
}

export default Skills
