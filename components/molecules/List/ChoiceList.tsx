import { ListItem } from '@/components/atoms/ListItem/ListItem'
import { FunctionComponent } from 'react'

interface Props {
  choicesList: string[]
  currChoice: number
  changeCurrChoice: (i: number) => void
  itemComponent: any
  // TODO: Comment résoudre le type de 'itemComponent' si je veux qu'il soit valide pour plusieurs composants différents? (problème avec les props du composant...)
}

export function ChoiceList({
  choicesList,
  changeCurrChoice,
  currChoice,
  itemComponent,
}: Props) {
  const ItemComponent = itemComponent
  const handleClick = (i: number) => {
    changeCurrChoice(i)
  }

  return (
    <ul className="flex gap-[26px] ">
      {choicesList.map((choice: string, i: number) => (
        <ItemComponent
          key={choice + i}
          text={choice}
          isActive={currChoice === i}
          cbClick={() => handleClick(i)}
        />
      ))}
    </ul>
  )
}
