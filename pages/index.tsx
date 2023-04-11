import { DesktopMenu } from '@/components/molecules/Menu/DesktopMenu'
import { MobileMenu } from '@/components/molecules/Menu/MobileMenu'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Home() {
  const router = useRouter()
  const PAGES_ROUTES = {
    Home: '/',
    Destination: '/destination',
    Crew: '/crew',
    Technology: 'technology',
  }
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuIsOpen((old) => !old)
  }

  return (
    <div className="h-[100dvh] md:bg-hero-bg-desktop bg-no-repeat bg-center bg-cover sm:bg-hero-bg-tablet bg-hero-bg-mobile ">
      <div className="main-container">
        <header className="flex justify-between items-center pt-10 pl-[55px] max-sm:px-6 max-md:pl-8 max-md:pt-0">
          <div>
            <Image src="./shared/logo.svg" alt="logo" width={48} height={48} />
          </div>
          <button onClick={toggleMobileMenu}>
            <Image
              src="/shared/icon-hamburger.svg"
              height={21}
              width={24}
              alt="Icon burger"
              className="sm:hidden"
            />
          </button>
          <DesktopMenu PAGES_ROUTES={PAGES_ROUTES} currPath={router.pathname} />
          <MobileMenu
            currPath={router.pathname}
            PAGES_ROUTES={PAGES_ROUTES}
            isOpen={mobileMenuIsOpen}
            onCloseMenu={toggleMobileMenu}
          />
        </header>
      </div>
    </div>
  )
}
