import { formatIntToDoubleString } from '@/helpers/number'
import Link from 'next/link'

interface Props {
  text: string
  index: number
  isActive: boolean
  path: string
}

export const NavItem = ({ text, path, index, isActive }: Props) => {
  const buildItemClassName = () => {
    const basicStyle =
      "relative nav-text w-fit  hover:after:content-[''] hover:after:h-[3px] hover:after:bg-white hover:after:w-[100%] hover:after:absolute hover:after:bottom-0 cursor-pointer hover:after:left-0"

    const activeStyle =
      "after:content-[''] after:h-[3px] after:bg-white after:w-[100%] after:absolute after:bottom-0 after:left-0"

    return isActive ? `${basicStyle} ${activeStyle}` : basicStyle
  }

  return (
    <li className={buildItemClassName()}>
      <Link className="h-[100%] flex items-center" href={path}>
        <span className="font-bold inline sm:hidden md:inline">
          {formatIntToDoubleString(index)} &nbsp;
        </span>
        {text.toUpperCase()}
      </Link>
    </li>
  )
}
