import React, { useEffect, useState } from 'react'
import { LayoutPage } from '../layouts/LayoutPage'
import Image from 'next/legacy/image'
import datas from '@/datas.json'
import { ChoiceList } from '@/components/molecules/List/ChoiceList'

const Crew = () => {
  const [currentPersonIndex, setCurrentPersonIndex] = useState<number>(0)

  const currPerson = datas.crew[currentPersonIndex]

  return (
    <div className="relative min-h-[100dvh] flex flex-col bg-crew-bg-mobile md:bg-crew-bg-desktop bg-no-repeat bg-center bg-cover  sm:bg-crew-bg-tablet isolate">
      <span className="absolute bg-dark-blue/40 inset-0  z-[-1]"></span>
      <LayoutPage mainClassName="flex-grow">
        <section className="flex flex-col gap-8 px-6 pb-[58px] pt-7 sm:px-[39px] sm:pt-10 sm:pb-[62px]  md:mx-[125px]  md:gap-[100px] md:pt-0 md:pb-0">
          <h1 className="h5 sm:self-start sm:mb-[60px] md:mb-[97px] ">
            <span className="font-bold text-white/25 pr-2">02 </span> Meet your
            crew
          </h1>
          <div className="relative h-[222px] border-b-[1px] border-solid border-gray-700 ">
            <Image
              src={currPerson.images}
              layout="fill"
              alt={currPerson.name}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col items-center">
            <ChoiceList
              nbrItems={datas.crew.length}
              currChoice={currentPersonIndex}
              changeCurrChoice={(i) => setCurrentPersonIndex(i)}
              type="anonym"
              className="flex gap-4 mb-8"
            />
            <p className="subtitle-3 text-white/50">{currPerson.role}</p>
            <h2 className="h3 mb-4 mt-1">{currPerson.name}</h2>
            <p className="p">{currPerson.bio}</p>
          </div>
        </section>
      </LayoutPage>
    </div>
  )
}

export default Crew
