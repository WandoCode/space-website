import { useEffect } from 'react'

export interface ListItemProps {
  text: string
  isActive: boolean
  cbClick: () => void
  type: 'named' | 'anonym' | 'number'
}

export const ListItem = ({ text, isActive, cbClick, type }: ListItemProps) => {
  const buildNamedLIClassName = () => {
    const basicStyle =
      "relative w-fit hover:after:content-[''] hover:after:h-[3px] hover:after:bg-white hover:after:w-[100%] hover:after:absolute hover:after:bottom-0 hover:after:left-0 cursor-pointer"

    const activeStyle =
      "after:content-[''] after:h-[3px] after:bg-white after:w-[100%] after:absolute after:bottom-0 after:left-0"

    return isActive ? `${basicStyle} ${activeStyle}` : basicStyle
  }

  const buildAnonymLIClassName = () => {
    const basicStyle = 'flex  bg-white/10 rounded-full'

    const activeStyle = 'bg-white/100'

    return isActive ? `${basicStyle} ${activeStyle}` : basicStyle
  }

  const buildNumberLIClassName = () => {
    const basicStyle = ''

    const activeStyle = ''

    return isActive ? `${basicStyle} ${activeStyle}` : basicStyle
  }

  const styleLI = {
    named: buildNamedLIClassName(),
    anonym: buildAnonymLIClassName(),
    number: buildNumberLIClassName(),
  }

  const styleBtn = {
    named: 'nav-text pb-2 translate-x-[1px]',
    anonym: 'w-[10px] h-[10px]',
    number: '',
  }

  return (
    <li className={styleLI[type]}>
      <button className={styleBtn[type]} onClick={() => cbClick()}>
        {type === 'anonym' ? (
          <span className="sr-only">{text}</span>
        ) : (
          <>{text}</>
        )}
      </button>
    </li>
  )
}
