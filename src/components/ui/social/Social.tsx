import { IProps } from '@/interfaces/interfaces'
import { socialData } from './social.data'

function Social({ className }: IProps) {
	return (
		<ul className={className}>
			{socialData.map(item => (
				<li key={item.link}>
					<a
						href={item.link}
						className='hover:text-sky-900 dark:hover:text-sky-600'
					>
						{item.img}
					</a>
				</li>
			))}
		</ul>
	)
}

export default Social
