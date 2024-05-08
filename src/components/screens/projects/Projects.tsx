import Tools from '@/components/ui/tools/Tools'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import Screen from '../Screen'
import Title from '../Title'
import { projectsKeys } from './projects.keys'

function Projects() {
	const t = useTranslations('Projects')
	return (
		<Screen id='projects'>
			<div className='py-28 max-sm:py-24'>
				<div className='text-center'>
					<Title>{t('title')}</Title>
					<p className='info'>{t('subtitle')}</p>
				</div>
				<div className='pt-24 flex flex-col gap-16 max-sm:pt-12'>
					{projectsKeys.map(key => (
						<div
							key={key.name}
							className='grid grid-cols-2 items-center gap-10 max-md:grid-cols-1 max-md:text-center max-sm:gap-5'
						>
							<div className=''>
								<img src={t(`${key.name}.img`)} alt={t(`${key.name}.title`)} />
							</div>
							<div className=''>
								<h3>{t(`${key.name}.title`)}</h3>
								<p>{t(`${key.name}.description`)}</p>
								<div className='pt-10 max-sm:pt-7'>
									<h3>{t('toolsUsed')}</h3>
									<Tools data={key.tools} />
								</div>
								<Link
									href={t(`${key.name}.link`)}
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
