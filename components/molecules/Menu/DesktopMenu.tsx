import { NavItem } from '@/components/atoms/NavItem/NavItem'

interface Props {
  PAGES: string[]
}

export const DesktopMenu = ({ PAGES }: Props) => {
  return (
    <ul className="h-24  w-[57.6%]  min-w-[625px] flex gap-[5%] pl-[120px] back-filter max-sm:hidden">
      {PAGES.map((page, i) => (
        <NavItem key={page + i} index={i} text={page} />
      ))}
    </ul>
  )
}
