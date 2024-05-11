import { useTranslations } from 'next-intl'
import Link from 'next/link'

function Logo() {
	const t = useTranslations('Header')
	return (
		<Link href={t('home.link')} className='flex items-center gap-6'>
			<div className='bg-sky-950 rounded-[50px] w-[50px] h-[50px] overflow-hidden dark:bg-sky-900'>
				<img
					src='/flaer.png'
					alt='Flaer'
					width='50px'
					height='50px'
					className='object-cover object-center'
				/>
			</div>
			<span className='uppercase font-bold tracking-[1px]'>Flaer</span>
		</Link>
	)
}

export default Logo
