import { formatIntToDoubleString } from '@/helpers/number'

interface Props {
  text: string
  index: number
  isActive: boolean
}

export const NavItem = ({ text, index, isActive }: Props) => {
  const buildItemClassName = () => {
    const base =
      "relative nav-text flex items-center hover:after:content-[''] hover:after:h-1 hover:after:bg-white hover:after:w-[100%] hover:after:absolute hover:after:bottom-0 cursor-pointer"

    if (isActive)
      return `${base} after:content-[''] after:h-1 after:bg-white after:w-[100%] after:absolute after:bottom-0`

    return base
  }

  return (
    <li className={buildItemClassName()}>
      <span className="font-bold inline sm:hidden md:inline">
        {formatIntToDoubleString(index)} &nbsp;
      </span>
      {text.toUpperCase()}
    </li>
  )
}
