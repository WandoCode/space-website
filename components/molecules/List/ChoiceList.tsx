import { ListItem } from '@/components/atoms/ListItem/ListItem'

interface Props {
  choicesList: string[]
  currChoice: number
  changeCurrChoice: (i: number) => void
}

export const ChoiceList = ({
  choicesList,
  changeCurrChoice,
  currChoice,
}: Props) => {
  const handleClick = (i: number) => {
    changeCurrChoice(i)
  }

  return (
    <ul className="flex gap-[26px] h-[28px]">
      {choicesList.map((choice: string, i: number) => (
        <ListItem
          key={choice + i}
          text={choice}
          isActive={currChoice === i}
          cbClick={() => handleClick(i)}
        />
      ))}
    </ul>
  )
}
