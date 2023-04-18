import { LayoutPage } from '@/layouts/LayoutPage'
import datas from '@/datas.json'
import { useState } from 'react'
import Image from 'next/legacy/image'
import { ChoiceList } from '@/components/molecules/List/ChoiceList'

const Destination = () => {
  const [currentDestiantionIndex, setCurrentDestiantionIndex] =
    useState<number>(0)
  const currAstre = datas.destinations[currentDestiantionIndex]
  const astres = datas.destinations.map((astre) => astre.name)

  return (
    <div className="min-h-[100dvh] flex flex-col md:bg-destination-bg-desktop bg-no-repeat bg-center bg-cover sm:bg-destination-bg-tablet bg-destination-bg-mobile">
      <LayoutPage mainClassName="flex-grow flex flex-col justify-center">
        <section className="px-6 pb-[58px] pt-7 sm:px-[39px] sm:pt-10 sm:pb-[62px] md:flex md:justify-between md:items-end md:mx-[125px]  md:gap-[100px] md:pt-0 md:pb-0">
          <div className="flex flex-col items-center gap-8 mb-6 sm:mb-[53px] sm:gap-0 md:flex-1 md:mb-0">
            <h1 className="h5 sm:self-start sm:mb-[60px] md:mb-[97px]">
              <span className="font-bold text-white/25 pr-2">01 </span> Pick
              your destination
            </h1>
            <div className="w-[170px] sm:w-[300px] md:max-w-[445px] md:w-[30vw]">
              <Image
                src={currAstre.image}
                alt={`${currAstre.name}`}
                width={170}
                height={170}
                sizes="(max-width: 600px) 300px
              (max-width: 1040px) 445px"
              />
            </div>
          </div>
          <div className="flex flex-col items-center md:flex-1 md:flex-grow md:items-start md:min-w-[445px]">
            <ChoiceList
              choicesList={astres}
              currChoice={currentDestiantionIndex}
              changeCurrChoice={(i) => setCurrentDestiantionIndex(i)}
              type="named"
              className="flex gap-[26px] "
            />
            <h2 className="h2 pt-4 sm:pt-8 md:pt-9 md:pb-2">
              {currAstre.name}
            </h2>
            <p className="p pb-8 mb-8 border-b-[1px] border-b-gray-700 border-b-solid sm:mx-[8.5%] sm:pb-11 sm:mb-7 md:mx-0 md:pb-[54px] md:mb-7">
              {currAstre.description}
            </p>
            <div className="flex flex-col gap-8 sm:flex-grow sm:flex-row sm:w-[100%] sm:justify-around sm:px-[20%] md:px-0 md:justify-start md:gap-[68px]">
              <div className="flex flex-col gap-2 sm:gap-3">
                <h3 className="subtitle-2">Avg. Distance</h3>
                <p className="subtitle-1">{currAstre.distance}</p>
              </div>
              <div className="flex flex-col gap-2 sm:gap-3">
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
