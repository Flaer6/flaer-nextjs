import About from '@/components/screens/about/About'
import Contact from '@/components/screens/contact/Contact'
import Promo from '@/components/screens/home/Promo'
import Projects from '@/components/screens/projects/Projects'
import { unstable_setRequestLocale } from 'next-intl/server'

export default function Home({
	params: { locale },
}: {
	params: { locale: any }
}) {
	unstable_setRequestLocale(locale)
	return (
		<>
			<Promo />
			<About />
			<Projects />
			<Contact />
		</>
	)
}
