import BgStars from '@/components/ui/animation/BgStars'
import Screen from '../Screen'
import styles from './styles/promo.module.scss'

function Promo() {
	return (
		<Screen className={styles.promo}>
			<div className='min-h-screen relative'>
				<BgStars />
			</div>
		</Screen>
	)
}

export default Promo
