interface Props {
  text: string
  isActive: boolean
  cbClick: () => void
}

export const ListItem = ({ text, isActive, cbClick }: Props) => {
  const buildItemClassName = () => {
    const basicStyle =
      "relative nav-text w-fit  hover:after:content-[''] hover:after:h-[3px] hover:after:bg-white hover:after:w-[100%] hover:after:absolute hover:after:bottom-0 hover:after:left-0 cursor-pointer"

    const activeStyle =
      "after:content-[''] after:h-[3px] after:bg-white after:w-[100%] after:absolute after:bottom-0 after:left-0"

    return isActive ? `${basicStyle} ${activeStyle}` : basicStyle
  }

  return (
    <li className={buildItemClassName()}>
      <button className="subtitle-2 pb-2" onClick={() => cbClick()}>
        {text}
      </button>
    </li>
  )
}
