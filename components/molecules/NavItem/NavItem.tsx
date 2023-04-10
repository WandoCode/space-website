interface Props {
  text: string
}

export const NavItem = ({ text }: Props) => {
  return <li className="nav-text flex items-center">{text.toUpperCase()}</li>
}
