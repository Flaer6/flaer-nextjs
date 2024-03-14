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
		<header className='px-[50px] py-4 max-[820px]:px-[20px]'>
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
