import { useTranslations } from 'next-intl'

function InfoBlock() {
	const t = useTranslations('About.infoBlock')
	return (
		<div className='max-w-[550px]'>
			<h3>{t('title')}</h3>
			<p>{t.rich('paragraph1', { important: chunks => <b>{chunks}</b> })}</p>
			<br />
			<p>{t.rich('paragraph2', { important: chunks => <b>{chunks}</b> })}</p>
			<a href='#contact' className='btn mt-5 py-3 px-7'>
				{t('link')}
			</a>
		</div>
	)
}

export default InfoBlock
