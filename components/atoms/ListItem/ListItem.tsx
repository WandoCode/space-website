import { useEffect } from 'react'

export interface ListItemProps {
  text: string
  isActive: boolean
  cbClick: () => void
  type: 'named' | 'anonym' | 'number'
}

export const ListItem = ({ text, isActive, cbClick, type }: ListItemProps) => {
  const buildNamedClassName = () => {
    const basicStyle =
      "relative w-fit hover:after:content-[''] hover:after:h-[3px] hover:after:bg-white hover:after:w-[100%] hover:after:absolute hover:after:bottom-0 hover:after:left-0 cursor-pointer"

    const activeStyle =
      "after:content-[''] after:h-[3px] after:bg-white after:w-[100%] after:absolute after:bottom-0 after:left-0"

    return isActive ? `${basicStyle} ${activeStyle}` : basicStyle
  }

  const buildAnonymClassName = () => {
    const basicStyle = 'w-[10px] h-[10px] bg-white/10 rounded-full'

    const activeStyle = 'bg-white/100'

    return isActive ? `${basicStyle} ${activeStyle}` : basicStyle
  }

  const buildNumberClassName = () => {
    const basicStyle = ''

    const activeStyle = ''

    return isActive ? `${basicStyle} ${activeStyle}` : basicStyle
  }

  const style = {
    named: buildNamedClassName(),
    anonym: buildAnonymClassName(),
    number: buildNumberClassName(),
  }

  return (
    <li className={style[type]}>
      <button
        className="nav-text pb-2 translate-x-[1px] "
        onClick={() => cbClick()}
      >
        {type === 'anonym' ? (
          <span className="sr-only">{text}</span>
        ) : (
          <>{text}</>
        )}
      </button>
    </li>
  )
}
