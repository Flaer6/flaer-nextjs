import Social from '@/components/ui/social/Social'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import Container from '../Container'

function Footer() {
	const year: number = new Date().getFullYear()
	const t = useTranslations('Footer')
	return (
		<footer className='bg-gray-50 dark:bg-gray-950'>
			<Container>
				<div className='flex justify-between items-center gap-4 py-20 max-md:flex-col max-md:py-16 max-md:gap-7 max-md:items-start'>
					<div className=''>
						<h3 className='uppercase'>{t('title')}</h3>
						<p className='m max-w-[600px]'>{t('subtitle')}</p>
					</div>
					<div className=''>
						<h3 className='uppercase'>{t('social')}</h3>
						<Social className='flex gap-4 text-2xl' />
					</div>
				</div>
				<div className='py-10 border-t border-gray-500 border-solid text-center max-md:p-6'>
					<span>
						© Copyright {year}. Made by{' '}
						<Link className='font-bold underline' href='/'>
							Flaer YV
						</Link>
					</span>
				</div>
			</Container>
		</footer>
	)
}

export default Footer
