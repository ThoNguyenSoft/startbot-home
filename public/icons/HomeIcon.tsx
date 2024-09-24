import { FC } from 'react'

import { IconProps } from './type'

const HomeIcon: FC<IconProps> = ({ size = 18 }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={size} height={size} fill='none' viewBox='0 0 18 19'>
      <path
        fill='#F5F5F5'
        fillRule='evenodd'
        d='M10.558 2.534a2.25 2.25 0 00-3.116 0l-4.626 4.44a.748.748 0 00-.218.405 27.344 27.344 0 00-.121 9.15l.112.721h2.977v-6.211a.75.75 0 01.75-.75h5.368a.75.75 0 01.75.75v6.211h2.977l.112-.72c.474-3.036.433-6.13-.12-9.151a.748.748 0 00-.219-.405l-4.626-4.44zM6.404 1.452a3.75 3.75 0 015.192 0l4.627 4.44c.34.326.57.752.655 1.216.584 3.188.627 6.451.127 9.653l-.18 1.157a.983.983 0 01-.972.832h-4.169a.75.75 0 01-.75-.75v-6.211H7.066V18a.75.75 0 01-.75.75H2.147a.983.983 0 01-.971-.832l-.181-1.157c-.5-3.202-.457-6.465.127-9.653.086-.464.315-.89.655-1.217l4.627-4.44z'
        clipRule='evenodd'
      ></path>
    </svg>
  )
}

export default HomeIcon
