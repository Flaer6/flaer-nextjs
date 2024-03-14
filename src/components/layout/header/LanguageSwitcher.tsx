'use client'
import { ILink } from '@/interfaces/interfaces'
import Link from 'next/link'
import { useState } from 'react'
import { MdTranslate } from 'react-icons/md'

function LanguageSwitcher() {
	const [isActive, setIsActive] = useState<boolean>(false)
	const languageData: ILink[] = [
		{
			name: 'Русский',
			link: 'ru',
		},
		{
			name: 'English',
			link: 'en',
		},
	]
	return (
		<div className='relative'>
			<button
				onClick={() => setIsActive(!isActive)}
				className='p-2 hover:text-emerald-600 text-lg relative'
			>
				<MdTranslate />
			</button>
			<div
				className={`absolute top-10 -left-5 border border-solid border-emerald-500 dark:border-emerald-800 rounded-sm transition-all origin-top ${
					isActive ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
				}`}
			>
				<ul>
					{languageData.map(lang => (
						<li key={lang.link}>
							<Link
								href={lang.link}
								onClick={() => setIsActive(false)}
								className='block py-3 px-2 text-center transition-colors hover:bg-emerald-100 dark:hover:bg-emerald-900'
							>
								{lang.name}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default LanguageSwitcher
