import Footer from '@/components/layout/footer/Footer'
import Header from '@/components/layout/header/Header'
import Providers from '@/providers/Providers'
import { useMessages, useTimeZone } from 'next-intl'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'
import './globals.scss'

const locales = ['en', 'ru']

export function generateStaticParams() {
	return locales.map(locale => ({ locale }))
}

export async function generateMetadata({
	params: { locale },
}: {
	params: { locale: any }
}) {
	const t = await getTranslations({ locale, namespace: 'Metadata' })
	return {
		title: t('title'),
		description: t('description'),
	}
}

export default function RootLayout({
	children,
	params: { locale },
}: {
	children: React.ReactNode
	params: { locale: any }
}) {
	unstable_setRequestLocale(locale)
	const messages = useMessages()
	const timeZone = useTimeZone()
	return (
		<html lang={locale}>
			<body>
				<Providers locale={locale} messages={messages} timeZone={timeZone}>
					<div className='flex flex-col min-h-full'>
						<Header />
						<main className='flex-grow'>{children}</main>
						<Footer />
					</div>
				</Providers>
			</body>
		</html>
	)
}
