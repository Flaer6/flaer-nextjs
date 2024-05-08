import Social from '@/components/ui/social/Social'
import { useTranslations } from 'next-intl'
import styles from './contact.module.scss'

function Form() {
	const t = useTranslations('Contact.form')
	return (
		<div className='bg-gray-100 rounded p-10 max-sm:p-7 mt-12 max-w-[800px] mx-48 max-[880px]:mx-36 max-md:mx-20 max-sm:mx-4 dark:bg-gray-800 shadow-2xl'>
			<form
				className={styles.form}
				action='https://formkeep.com/f/410a98a8c104'
				accept-charset='UTF-8'
				encType='multipart/form-data'
				method='POST'
			>
				<div className={styles.inputWrapper}>
					<label htmlFor='name'>{t('name')}</label>
					<input
						className={`${styles.input}`}
						id='name'
						type='text'
						placeholder={t('placeholderName')}
					/>
				</div>
				<div className={styles.inputWrapper}>
					<label htmlFor='email'>{t('email')}</label>
					<input
						className={`${styles.input}`}
						id='email'
						type='mail'
						placeholder={t('placeholderEmail')}
					/>
				</div>
				<div className={styles.inputWrapper}>
					<label htmlFor='message'>{t('message')}</label>
					<textarea
						className={`${styles.input} resize-none`}
						name='message'
						id='message'
						cols={30}
						rows={3}
						placeholder={t('placeholderMessage')}
					></textarea>
				</div>
				<div className='flex justify-between items-center max-md:flex-col-reverse gap-7'>
					<div>
						<Social className='flex items-center gap-5 text-3xl ' />
					</div>
					<div className=''>
						<button className='btn py-3 px-8 '>{t('button')}</button>
					</div>
				</div>
			</form>
		</div>
	)
}

export default Form
