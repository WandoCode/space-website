import { LayoutPage } from '@/layouts/LayoutPage'
import React from 'react'

const destination = () => {
  return (
    <div className="min-h-[100dvh] flex flex-col md:bg-destination-bg-desktop bg-no-repeat bg-center bg-cover sm:bg-destination-bg-tablet bg-destination-bg-mobile">
      <LayoutPage></LayoutPage>
    </div>
  )
}

export default destination
