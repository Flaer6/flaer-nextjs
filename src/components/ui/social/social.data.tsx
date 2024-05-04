import { ILink } from '@/interfaces/interfaces'
import { FaGithub, FaInstagram, FaTelegramPlane, FaVk } from 'react-icons/fa'

export const socialData: ILink[] = [
	{
		name: 'Telegram',
		link: 'https://t.me/Flaerar',
		img: <FaTelegramPlane />,
	},
	{
		name: 'GitHub',
		link: 'https://github.com/Flaer6',
		img: <FaGithub />,
	},
	{
		name: 'VK',
		link: 'https://m.vk.com/id597028138',
		img: <FaVk />,
	},
	{
		name: 'Instagram',
		link: 'https://www.instagram.com/flaerar?igsh=YTZqcWUxMGNmNm1m',
		img: <FaInstagram />,
	},
]
