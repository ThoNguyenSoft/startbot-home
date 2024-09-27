'use client'

import { ThemeProvider } from '@/core/components/template/theme-provider'
// import '@/core/configs/i18n'
import dynamic from 'next/dynamic'
import { ReactNode } from 'react'

const ProgressBar = dynamic(() => import('next-nprogress-bar').then(mod => mod.AppProgressBar), {
  ssr: false
})

const MasterProvider = ({ children }: { children: ReactNode }) => {
  // useEffect(() => {
  //   setTheme('dark')
  // }, [theme])
  return (
    <>
      <ProgressBar height='2px' color='#dcf593' options={{ showSpinner: false }} shallowRouting />

      <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
        {children}
      </ThemeProvider>
    </>
  )
}

export default MasterProvider
