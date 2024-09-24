import { FC } from 'react'

import { IconProps } from './type'

const DiscusIcon: FC<IconProps> = ({ size = 21 }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={size} height={(size * 21) / 20} fill='none' viewBox='0 0 20 21'>
      <path
        fill='#F5F5F5'
        fillRule='evenodd'
        d='M.75 1.4C.75.765 1.265.25 1.9.25h16.2c.635 0 1.15.515 1.15 1.15v11.472c0 .305-.121.597-.337.813l-2.722 2.722a1.15 1.15 0 01-.813.337h-4.54l-3.45 3.451c-.6.599-1.622.175-1.622-.672v-2.78H1.9a1.15 1.15 0 01-1.15-1.15V1.4zm1.5.35v13.494h3.866c.635 0 1.15.515 1.15 1.15v1.802L9.88 15.58a1.15 1.15 0 01.814-.337h4.539l2.517-2.517V1.75H2.25zm6.219 3.2a.75.75 0 01.75.75v4.272a.75.75 0 11-1.5 0V5.7a.75.75 0 01.75-.75zm5.016 0a.75.75 0 01.75.75v4.272a.75.75 0 11-1.5 0V5.7a.75.75 0 01.75-.75z'
        clipRule='evenodd'
      ></path>
    </svg>
  )
}

export default DiscusIcon
