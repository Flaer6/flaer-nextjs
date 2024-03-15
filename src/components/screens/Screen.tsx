import { IProps } from '@/interfaces/interfaces'
import Container from '../layout/Container'

function Screen({ children, className }: IProps) {
	return (
		<section className={`relative ${className}`}>
			<Container>{children}</Container>
		</section>
	)
}

export default Screen
