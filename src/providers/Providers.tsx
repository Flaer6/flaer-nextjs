'use client'
import { IProps } from '@/interfaces/interfaces'
import { AbstractIntlMessages, NextIntlClientProvider } from 'next-intl'
import { ThemeProvider } from 'next-themes'

interface IProvider extends IProps {
	messages?: AbstractIntlMessages | undefined
	locale?: string | undefined
	timeZone?: string | undefined
}

function Providers({ children, messages, locale, timeZone }: IProvider) {
	return (
		<NextIntlClientProvider
			locale={locale}
			messages={messages}
			timeZone={timeZone}
		>
			<ThemeProvider attribute='class' defaultTheme='system'>
				{children}
			</ThemeProvider>
		</NextIntlClientProvider>
	)
}

export default Providers
