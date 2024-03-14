import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { keys } from './keys.data'

interface IMenu {
	className?: string
	state?: boolean
}

function Menu({ className, state }: IMenu) {
	const t = useTranslations('Header')
	return (
		<nav
			className={`${className} ${
				state ? 'scale-x-100' : 'scale-x-0'
			} absolute top-0 right-0 min-h-screen min-w-[70%] origin-right transition-all bg-emerald-900`}
		>
			<ul className='flex flex-col items-end pt-20'>
				{keys.map(key => (
					<li key={key} className='w-full text-right'>
						<Link
							href={t(`${key}.link`)}
							className='uppercase font-bold px-6 hover:text-emerald-950 transition-colors text-gray-50 py-4 block border-t border-solid border-emerald-700 hover:bg-emerald-500'
						>
							{t(`${key}.name`)}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Menu
