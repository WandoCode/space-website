import { DesktopMenu } from '@/components/molecules/Menu/DesktopMenu'
import { MobileMenu } from '@/components/molecules/Menu/MobileMenu'
import { LayoutPage } from '@/layouts/LayoutPage'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Home() {
  return (
    <div className="h-[100dvh] md:bg-hero-bg-desktop bg-no-repeat bg-center bg-cover sm:bg-hero-bg-tablet bg-hero-bg-mobile ">
      <LayoutPage></LayoutPage>
    </div>
  )
}
