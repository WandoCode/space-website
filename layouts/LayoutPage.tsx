import { DesktopMenu } from '@/components/molecules/Menu/DesktopMenu'
import { MobileMenu } from '@/components/molecules/Menu/MobileMenu'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { PropsWithChildren, useState } from 'react'

export const LayoutPage = ({ children }: PropsWithChildren) => {
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
    <>
      <header className="flex justify-between items-center pt-6 px-6 sm:pt-0 sm:pr-0 sm:pl-10  md:pl-[55px] md:pt-10">
        <div>
          <Image src="/shared/logo.svg" alt="logo" width={48} height={48} />
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
      <main className="flex-grow flex justify-center items-center sm:mt-10">
        {children}
      </main>
    </>
  )
}
