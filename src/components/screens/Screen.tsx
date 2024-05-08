import { IProps } from '@/interfaces/interfaces'
import Container from '../layout/Container'

function Screen({ children, className, id }: IProps) {
	return (
		<section className={`relative ${className}`} id={id}>
			<Container>{children}</Container>
		</section>
	)
}

export default Screen
