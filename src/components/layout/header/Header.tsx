import dynamic from 'next/dynamic'
import Burger from './Burger'
import LanguageSwitcher from './LanguageSwitcher'
import Logo from './Logo'
import Navigation from './Navigation'

const DynamicThemeSwitcher = dynamic(() => import('./ThemeSwitcher'), {
	ssr: false,
})
// text-zinc-700
function Header() {
	return (
		<header className='px-[50px] py-4 max-[820px]:px-[20px] fixed top-0 left-0 right-0 z-50 bg-sky-900 bg-opacity-30 shadow-xl'>
			<div className='flex justify-between items-center'>
				<div className=''>
					<Logo />
				</div>
				<div className='flex items-center'>
					<Navigation />
					<LanguageSwitcher />
					<DynamicThemeSwitcher />
					<Burger />
				</div>
			</div>
		</header>
	)
}

export default Header
