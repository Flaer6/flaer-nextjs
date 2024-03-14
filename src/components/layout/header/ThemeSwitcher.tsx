'use client'

import { useTheme } from 'next-themes'
import { FiSun } from 'react-icons/fi'
import { MdOutlineDarkMode } from 'react-icons/md'

function ThemeSwitcher() {
	const { theme, setTheme } = useTheme()

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light')
	}
	return (
		<button
			onClick={toggleTheme}
			className='p-2 text-xl transition-colors hover:text-emerald-600'
		>
			{theme === 'light' ? <MdOutlineDarkMode /> : <FiSun />}
		</button>
	)
}

export default ThemeSwitcher
