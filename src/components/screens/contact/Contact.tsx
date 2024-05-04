import Screen from '../Screen'
import Title from '../Title'
import styles from './contact.module.scss'
import Form from './Form'

function Contact() {
	return (
		<Screen className={`${styles.contact} py-28 max-sm:py-20`}>
			<div className='text-center'>
				<Title>CONTACT</Title>
				<p className='info'>
					Feel free to Contact me by submitting the form below and I will get
					back to you as soon as possible
				</p>
			</div>
			<Form />
		</Screen>
	)
}

export default Contact
