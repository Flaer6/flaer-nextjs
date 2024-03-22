import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { keys } from './keys.data'

function Navigation() {
	const t = useTranslations('Header')
	return (
		<nav className='max-[820px]:hidden'>
			<ul className='flex items-center'>
				{keys.map(key => (
					<li key={key}>
						<Link
							href={t(`${key}.link`)}
							className='uppercase font-bold py-5 px-6 hover:text-sky-600 transition-colors'
						>
							{t(`${key}.name`)}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Navigation
