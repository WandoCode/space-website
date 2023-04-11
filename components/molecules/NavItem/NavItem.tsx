import { formatIntToDoubleString } from '@/helpers/number'

interface Props {
  text: string
  index: number
}

export const NavItem = ({ text, index }: Props) => {
  return (
    <li className="nav-text flex items-center">
      <span className="font-bold">{formatIntToDoubleString(index)} &nbsp;</span>
      {text.toUpperCase()}
    </li>
  )
}
