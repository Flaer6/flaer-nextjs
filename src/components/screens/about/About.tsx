import { useTranslations } from 'next-intl'
import Screen from '../Screen'
import Title from '../Title'
import InfoBlock from './InfoBlock'
import Skills from './Skills'

function About() {
	const t = useTranslations('About')
	return (
		<Screen className='bg-[#fafafa] dark:bg-[#0c121e] py-16' id='about'>
			<div className='text-center'>
				<Title>{t('title')}</Title>
				<p className='info'>{t('subtitle')}</p>
			</div>
			<div className='pt-10 flex justify-between gap-x-6 gap-y-12 max-[840px]:flex-col'>
				<InfoBlock />
				<Skills />
			</div>
		</Screen>
	)
}

export default About
