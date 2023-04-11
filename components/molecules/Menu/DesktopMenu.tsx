import { NavItem } from '@/components/atoms/NavItem/NavItem'

interface Props {
  PAGES_ROUTES: Record<string, string>
  currPath: string
}

export const DesktopMenu = ({ PAGES_ROUTES, currPath }: Props) => {
  const PAGES = Object.keys(PAGES_ROUTES)

  return (
    <ul className="h-24 w-[60%] min-w-[570px] flex gap-[5%] pl-[8.3%] pr-4 back-filter max-sm:hidden max-md:min-w-[450px]">
      {PAGES.map((page, i) => (
        <NavItem
          key={page + i}
          index={i}
          text={page}
          isActive={currPath === PAGES_ROUTES[page]}
        />
      ))}
    </ul>
  )
}
