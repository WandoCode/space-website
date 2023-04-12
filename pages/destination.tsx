import { LayoutPage } from '@/layouts/LayoutPage'
import datas from '@/datas.json'
import { useState } from 'react'
import Image from 'next/image'
import { ChoiceList } from '@/components/molecules/List/ChoiceList'

const Destination = () => {
  const [currentDestiationIndex, setCurrentDestiationIndex] =
    useState<number>(0)
  const currAstre = datas.destinations[currentDestiationIndex]
  const astres = datas.destinations.map((astre) => astre.name)

  return (
    <div className="min-h-[100dvh] flex flex-col md:bg-destination-bg-desktop bg-no-repeat bg-center bg-cover sm:bg-destination-bg-tablet bg-destination-bg-mobile">
      <LayoutPage>
        <section className="">
          <div className="flex flex-col items-center gap-8 mb-6">
            <p className="h5">
              <span className="font-bold text-white/25 pr-2">01 </span> Pick
              yout destination
            </p>
            <Image
              src={currAstre.image}
              alt={`${currAstre.name}`}
              width={170}
              height={170}
            />
          </div>
          <div className="flex flex-col items-center">
            <ChoiceList
              choicesList={astres}
              currChoice={currentDestiationIndex}
              changeCurrChoice={(i) => setCurrentDestiationIndex(i)}
            />
            <h2>{currAstre.name}</h2>
            <p>{currAstre.description}</p>
          </div>
          <div>
            <div>
              <h3>Avg. Distance</h3>
              <p>{currAstre.distance}</p>
            </div>
            <div>
              <h3>Est. Travel Time</h3>
              <p>{currAstre.travel}</p>
            </div>
          </div>
        </section>
      </LayoutPage>
    </div>
  )
}

export default Destination
