import Social from '@/components/ui/social/Social'
import styles from './contact.module.scss'

function Form() {
	return (
		<div className='bg-gray-100 rounded p-10 max-sm:p-7 mt-12 max-w-[800px] mx-48 max-[880px]:mx-36 max-md:mx-20 max-sm:mx-4 dark:bg-gray-800 shadow-2xl'>
			<form action='#' className={styles.form}>
				<div className={styles.inputWrapper}>
					<label htmlFor='name'>Name</label>
					<input
						className={`${styles.input}`}
						id='name'
						type='text'
						placeholder='Enter Your Name'
					/>
				</div>
				<div className={styles.inputWrapper}>
					<label htmlFor='email'>Email</label>
					<input
						className={`${styles.input}`}
						id='email'
						type='mail'
						placeholder='Enter Your Email'
					/>
				</div>
				<div className={styles.inputWrapper}>
					<label htmlFor='message'>Message</label>
					<textarea
						className={`${styles.input} resize-none`}
						name='message'
						id='message'
						cols={30}
						rows={3}
						placeholder='Enter Your Message'
					></textarea>
				</div>
				<div className='flex justify-between items-center max-md:flex-col-reverse gap-7'>
					<div>
						<Social className='flex items-center gap-5 text-3xl ' />
					</div>
					<div className=''>
						<button className='btn py-3 px-8 '>Submit</button>
					</div>
				</div>
			</form>
		</div>
	)
}

export default Form
