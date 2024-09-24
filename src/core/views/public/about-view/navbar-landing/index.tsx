'use client'

import { APP_CONFIG } from '@/core/configs/app-config'
import Link from 'next/link'
import LogoStockIcon from 'public/icons/LogoStockIcon'
import { Fragment, useEffect } from 'react'

const NavbarLanding = () => {
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const section = document.getElementById(hash.substring(1)) // Remove the '#' from the hash
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [])

  return (
    <Fragment>
      {/* content */}
      <div className='fixed top-0 z-[1000] flex w-full justify-center'>
        {/* desktop */}
        <div className='w-full max-w-[1274px] border-b-[0.4px] border-white px-4 py-6 backdrop-blur-sm'>
          <div className='flex w-full items-center justify-between'>
            <Link href='#' className=''>
              <LogoStockIcon fill='#EBEBEB' size={106} />
            </Link>
            <div className='flex items-center justify-center gap-[56px] text-2xl text-[#FFFFFF]'>
              {arrListRef.map((item, index) => (
                <Link
                  href={item.link}
                  className={`flex gap-1 ${index === 0 ? 'border-b border-white px-2' : ''}`}
                  key={item.title}
                >
                  <div className='flex items-center gap-2'>{item.title}</div>
                </Link>
              ))}
            </div>

            <Link
              className='rounded-[12px] bg-[#F5F5F5] p-3 text-2xl font-bold leading-[29px] text-[#1D1D1D] hover:bg-[#D7F67D]'
              href={`${APP_CONFIG.link.PRODUCT}`}
            >
              {'LAUNCH APP'}
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default NavbarLanding

export const arrListRef = [
  { title: 'About us', extent: <LogoStockIcon fill='#EBEBEB' size={136} />, link: '#' },
  { title: 'Solutions', link: '#' },
  { title: 'Technology', link: '#' },
  { title: 'Team', link: '#' }
]
