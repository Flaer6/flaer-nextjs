import { useTranslations } from 'next-intl'
import Screen from '../Screen'
import Title from '../Title'
import Form from './Form'
import styles from './contact.module.scss'

function Contact() {
	const t = useTranslations('Contact')
	return (
		<Screen className={`${styles.contact} py-28 max-sm:py-20`} id='contact'>
			<div className='text-center'>
				<Title>{t('title')}</Title>
				<p className='info'>{t('subtitle')}</p>
			</div>
			<Form />
		</Screen>
	)
}

export default Contact
