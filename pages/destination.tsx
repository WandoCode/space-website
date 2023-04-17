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
        <section className="px-6 pb-[58px] pt-7">
          <div className="flex flex-col items-center gap-8 mb-6 ">
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
            <h2 className="h2 pt-4">{currAstre.name}</h2>
            <p className="p pb-8 mb-8 border-b-[1px] border-b-gray-700 border-b-solid">
              {currAstre.description}
            </p>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <h3 className="subtitle-2">Avg. Distance</h3>
                <p className="subtitle-1">{currAstre.distance}</p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="subtitle-2">Est. Travel Time</h3>
                <p className="subtitle-1">{currAstre.travel}</p>
              </div>
            </div>
          </div>
        </section>
      </LayoutPage>
    </div>
  )
}

export default Destination
