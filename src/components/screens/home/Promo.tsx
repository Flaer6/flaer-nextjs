import BgStars from '@/components/ui/animation/BgStars'
import { useTranslations } from 'next-intl'
import Screen from '../Screen'
import styles from './promo.module.scss'

function Promo() {
	const t = useTranslations('Promo')
	return (
		<Screen className={styles.promo}>
			<div className='min-h-screen relative flex flex-col items-center justify-center text-center'>
				<BgStars />
				<div className='z-10'>
					<h1 className='text-7xl uppercase tracking-wide font-bold max-md:text-6xl max-sm:text-[40px]'>
						{t('title')}
					</h1>
					<p className='max-w-4xl pt-12 text-2xl font-medium max-md:text-xl max-md:pt-10 max-sm:text-lg max-sm:text-left'>
						{t('subtitle')}
					</p>
					<a
						href='#projects'
						className='mt-12 bg-white uppercase font-bold rounded transition-all shadow-2xl hover:-translate-y-1 text-zinc-950 inline-block py-4 px-20 tracking-wider'
					>
						{t('link')}
					</a>
				</div>
			</div>
		</Screen>
	)
}

export default Promo
