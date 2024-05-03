import { useTranslations } from 'next-intl'
import Link from 'next/link'
import Screen from '../Screen'
import Title from '../Title'
import { projectsKeys } from './projects.keys'

function Projects() {
	const t = useTranslations('Projects')
	return (
		<Screen>
			<div className='py-28 max-sm:py-24'>
				<div className='text-center'>
					<Title>{t('title')}</Title>
					<p className='max-w-[800px] mx-auto'>{t('subtitle')}</p>
				</div>
				<div className='pt-24 flex flex-col gap-16'>
					{projectsKeys.map(key => (
						<div
							key={key}
							className='grid grid-cols-2 items-center gap-10 max-md:grid-cols-1 max-md:text-center max-sm:gap-5'
						>
							<div className=''>
								<img src={t(`${key}.img`)} alt={t(`${key}.name`)} />
							</div>
							<div className=''>
								<h3>{t(`${key}.title`)}</h3>
								<p>{t(`${key}.description`)}</p>
								<Link
									href={t(`${key}.link`)}
									className='btn py-4 px-14 mt-5 max-sm:py-3 max-sm:px-7'
								>
									{t('link')}
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</Screen>
	)
}

export default Projects
