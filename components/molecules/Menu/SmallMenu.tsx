import { NavItem } from '@/components/atoms/NavItem/NavItem'
import Image from 'next/image'

interface Props {
  PAGES_ROUTES: Record<string, string>

  isOpen: boolean
  onCloseMenu: () => void
  currPath: string
}

export const SmallMenu = ({
  PAGES_ROUTES,
  isOpen,
  onCloseMenu,
  currPath,
}: Props) => {
  const PAGES = Object.keys(PAGES_ROUTES)

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 right-0 w-[67%] h-[100dvh] flex flex-col gap-[65px] pl-[32px] back-filter sm:hidden">
          <button
            onClick={onCloseMenu}
            className="pt-[33px] pr-[26px] self-end"
          >
            <Image
              src="/shared/icon-close.svg"
              height={19}
              width={19}
              alt="Logo close"
            />
          </button>
          <ul className="flex flex-col gap-8">
            {PAGES.map((page, i) => (
              <NavItem
                key={page + i}
                index={i}
                text={page}
                isActive={currPath === PAGES_ROUTES[page]}
              />
            ))}
          </ul>
        </div>
      )}
    </>
  )
}
