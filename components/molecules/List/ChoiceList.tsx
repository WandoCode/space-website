import { ListItem, ListItemProps } from '@/components/atoms/ListItem/ListItem'
import { FunctionComponent, ReactNode, useEffect } from 'react'

interface Props {
  choicesList?: string[]
  currChoice: number
  type: ListItemProps['type']
  nbrItems?: number
  changeCurrChoice: (i: number) => void
}

export function ChoiceList({
  choicesList,
  changeCurrChoice,
  currChoice,
  type,
  nbrItems,
}: Props) {
  const handleClick = (i: number) => {
    changeCurrChoice(i)
  }

  const buildItemsArray = () => {
    let items: ReactNode[] = []

    if (choicesList) {
      items = choicesList.map((choice: string, i: number) => (
        <ListItem
          key={choice + i}
          text={choice}
          isActive={currChoice === i}
          cbClick={() => handleClick(i)}
          type={type}
        />
      ))
    } else if (nbrItems) {
      for (let i = 0; i < nbrItems; i++) {
        items.push(
          <ListItem
            key={i}
            text={`${i}`}
            isActive={currChoice === i}
            cbClick={() => handleClick(i)}
            type={type}
          />
        )
      }
    }

    return items
  }

  return <ul className="flex gap-[26px] ">{buildItemsArray()}</ul>
}
