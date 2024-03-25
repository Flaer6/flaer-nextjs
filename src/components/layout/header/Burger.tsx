'use client'

import { useState } from 'react'
import Menu from './Menu'
import styles from './header.module.scss'

function Burger() {
	const [isActive, setIsActive] = useState<boolean>(false)
	const lineActive = (className: string) => (isActive ? className : '')
	return (
		<div className='min-[820px]:hidden pl-5'>
			<button onClick={() => setIsActive(!isActive)} className={styles.button}>
				<span
					className={`dark:bg-gray-400 top-0 ${lineActive('scale-0')}`}
				></span>
				<span
					className={`dark:bg-gray-400 top-[9px] ${lineActive('rotate-45')}`}
				></span>
				<span
					className={`dark:bg-gray-400 top-[9px] ${lineActive('-rotate-45')}`}
				></span>
				<span
					className={`dark:bg-gray-400 bottom-0 ${lineActive('scale-0')}`}
				></span>
			</button>
			<Menu state={isActive} />
		</div>
	)
}

export default Burger
