import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

function Logo() {
	const t = useTranslations('Header')
	return (
		<Link href={t('home.link')} className='flex items-center gap-6'>
			<div className='bg-sky-950 rounded-[50px] w-[50px] h-[50px] overflow-hidden dark:bg-sky-900'>
				<Image
					src='/flaer.png'
					alt='Flaer'
					width={50}
					height={50}
					priority={true}
					className='object-cover object-center'
				/>
			</div>
			<span className='uppercase font-bold tracking-[1px]'>Flaer</span>
		</Link>
	)
}

export default Logo
