import { formatIntToDoubleString } from '@/helpers/number'

interface Props {
  text: string
  index: number
}

export const NavItem = ({ text, index }: Props) => {
  return (
    <li className="relative nav-text flex items-center hover:after:content-[''] hover:after:h-1 hover:after:bg-white hover:after:w-[100%] hover:after:absolute hover:after:bottom-0 cursor-pointer">
      <span className="font-bold">{formatIntToDoubleString(index)} &nbsp;</span>
      {text.toUpperCase()}
    </li>
  )
}
