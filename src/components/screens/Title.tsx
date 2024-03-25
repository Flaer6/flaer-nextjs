import { IProps } from '@/interfaces/interfaces'

function Title({ children, className }: IProps) {
	return (
		<h2
			className={`${className} relative text-4xl uppercase tracking-widest mb-9 font-bold after:w-8 after:h-1 after:rounded-md after:bg-[#0062b9] after:absolute after:top-[55px] after:left-[50%] after:-translate-x-[50%]`}
		>
			{children}
		</h2>
	)
}

export default Title
