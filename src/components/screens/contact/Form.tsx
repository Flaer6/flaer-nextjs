'use client'
import Social from '@/components/ui/social/Social'
import { useTranslations } from 'next-intl'
import { ChangeEvent, FormEvent, useState } from 'react'
import styles from './contact.module.scss'

interface FormState {
	name: string
	email: string
	message: string
}

export default function Form() {
	const [formData, setFormData] = useState<FormState>({
		name: '',
		email: '',
		message: '',
	})

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		try {
			const response = await fetch('https://formkeep.com/f/410a98a8c104', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			})

			if (response.ok) {
				setFormData({
					name: '',
					email: '',
					message: '',
				})
			} else {
				console.error('Ошибка при отправке формы')
			}
		} catch (error) {
			console.error('Ошибка при отправке данных:', error)
		}
	}

	const handleChange = (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = event.target
		setFormData(prevData => ({
			...prevData,
			[name]: value,
		}))
	}

	const t = useTranslations('Contact.form')
	return (
		<div className='bg-gray-100 rounded p-10 max-sm:p-7 mt-12 max-w-[800px] mx-48 max-[880px]:mx-36 max-md:mx-20 max-sm:mx-4 dark:bg-gray-800 shadow-2xl'>
			<form
				className={styles.fr}
				action='https://formkeep.com/f/410a98a8c104'
				acceptCharset='UTF-8'
				encType='multipart/form-data'
				method='POST'
				onSubmit={handleSubmit}
			>
				<div className={styles.inputWrapper}>
					<label htmlFor='name'>{t('name')}</label>
					<input
						className={`${styles.input}`}
						id='name'
						type='text'
						name='name'
						value={formData.name}
						onChange={handleChange}
						required
						placeholder={t('placeholderName')}
					/>
				</div>
				<div className={styles.inputWrapper}>
					<label htmlFor='email'>{t('email')}</label>
					<input
						className={`${styles.input}`}
						id='email'
						type='email'
						name='email'
						value={formData.email}
						onChange={handleChange}
						required
						placeholder={t('placeholderEmail')}
					/>
				</div>
				<div className={styles.inputWrapper}>
					<label htmlFor='message'>{t('message')}</label>
					<textarea
						className={`${styles.input} resize-none`}
						name='message'
						value={formData.message}
						onChange={handleChange}
						id='message'
						cols={30}
						rows={3}
						placeholder={t('placeholderMessage')}
					/>
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
