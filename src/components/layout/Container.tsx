import { IProps } from '@/interfaces/interfaces'

function Container({ children }: IProps) {
	return <div className='max-w-[1240px] mx-auto px-[20px]'>{children}</div>
}

export default Container
