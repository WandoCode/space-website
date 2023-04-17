import { LargeMenu } from '@/components/molecules/Menu/LargeMenu'
import { SmallMenu } from '@/components/molecules/Menu/SmallMenu'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { PropsWithChildren, useState } from 'react'

interface Props extends PropsWithChildren {
  mainClassName?: string
}
export const LayoutPage = ({ mainClassName, children }: Props) => {
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
      <header className="flex justify-between items-center py-6 px-6 sm:pt-0 sm:pr-0 sm:pl-10  md:pl-[55px] md:pt-10">
        <div className="before:hidden relative flex-grow z-10 before:md:block before:md:h-[1px] before:md:content-[''] before:md:absolute before:md:bg-white before:md:right-[-30px] before:md:bottom-[50%] before:md:left-[112px] before:md:opacity-25 ">
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
        <LargeMenu PAGES_ROUTES={PAGES_ROUTES} currPath={router.pathname} />
        <SmallMenu
          currPath={router.pathname}
          PAGES_ROUTES={PAGES_ROUTES}
          isOpen={mobileMenuIsOpen}
          onCloseMenu={toggleMobileMenu}
        />
      </header>
      <main className={mainClassName}>{children}</main>
    </>
  )
}
