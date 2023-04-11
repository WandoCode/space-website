import { DesktopMenu } from '@/components/molecules/Menu/DesktopMenu'
import { MobileMenu } from '@/components/molecules/Menu/MobileMenu'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const PAGES = ['Home', 'Destination', 'Crew', 'Technology']
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuIsOpen((old) => !old)
  }

  return (
    <div className="h-[100dvh] md:bg-hero-bg-desktop bg-no-repeat bg-center bg-cover sm:bg-hero-bg-tablet bg-hero-bg-mobile ">
      <div className="main-container">
        <header className="flex justify-between items-center pt-10 pl-[55px]">
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
          <DesktopMenu PAGES={PAGES} />
          <MobileMenu
            PAGES={PAGES}
            isOpen={mobileMenuIsOpen}
            onCloseMenu={toggleMobileMenu}
          />
        </header>
      </div>
    </div>
  )
}
