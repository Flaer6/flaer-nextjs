import About from '@/components/screens/about/About'
import Contact from '@/components/screens/contact/Contact'
import Promo from '@/components/screens/home/Promo'
import Projects from '@/components/screens/projects/Projects'

export default function Home() {
	return (
		<>
			<Promo />
			<About />
			<Projects />
			<Contact />
		</>
	)
}
