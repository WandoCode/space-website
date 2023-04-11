import { NavItem } from '@/components/molecules/NavItem/NavItem'
import Image from 'next/image'

export default function Home() {
  const PAGES = ['Home', 'Destination', 'Crew', 'Technology']
  return (
    <>
      <header className="flex justify-between">
        <div>
          <Image src="./shared/logo.svg" alt="logo" width={48} height={48} />
        </div>
        <ul className="h-24 max-w-[830px] w-[57.6%] flex-grow justify-center flex gap-12  bg-gray-600">
          {PAGES.map((page, i) => (
            <NavItem key={page + i} index={i} text={page} />
          ))}
        </ul>
      </header>
    </>
  )
}
