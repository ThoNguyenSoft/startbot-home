'use client'
import AboutIntro from './about-intro'
import Contact from './contact'
import Footer from './footer'
import NavbarLanding from './navbar-landing'
import Offer from './offer'
import Platform from './Platform'
import Solutions from './Solutions'
import Technologies from './Technologies'

const AboutView = () => {
  return (
    <div className='size-full bg-[#0D0D0D]'>
      <NavbarLanding />

      <div className='relative mt-[120px] flex size-full flex-col items-center overflow-auto'>
        <div className='flex w-full max-w-[1440px] flex-col items-center justify-center text-center text-[#f2f2f2]'>
          <AboutIntro />
          <Offer />
          <Technologies />
          <Solutions />
          <Platform />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default AboutView
