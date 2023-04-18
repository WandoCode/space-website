import React, { useEffect, useState } from 'react'
import { LayoutPage } from '../layouts/LayoutPage'
import Image from 'next/legacy/image'
import datas from '@/datas.json'
import { ChoiceList } from '@/components/molecules/List/ChoiceList'

const Crew = () => {
  const [currentPersonIndex, setCurrentPersonIndex] = useState<number>(0)

  const currPerson = datas.crew[currentPersonIndex]

  return (
    <div className="min-h-[100dvh] flex flex-col md:bg-crew-bg-desktop bg-no-repeat bg-center bg-cover sm:bg-crew-bg-tablet bg-crew-bg-mobile">
      <LayoutPage mainClassName="flex-grow">
        <section className="flex flex-col items-center px-6 pb-[58px] pt-7 sm:px-[39px] sm:pt-10 sm:pb-[62px]  md:mx-[125px]  md:gap-[100px] md:pt-0 md:pb-0">
          <h1 className="h5 sm:self-start sm:mb-[60px] md:mb-[97px] ">
            <span className="font-bold text-white/25 pr-2">02 </span> Meet your
            crew
          </h1>
          <div className="relative w-[100%] h-[222px] border-b-[1px] border-solid border-gray-700 ">
            <Image
              src={currPerson.images}
              layout="fill"
              alt={currPerson.name}
              className="object-contain"
            />
          </div>
          <div>
            <ChoiceList
              nbrItems={datas.crew.length}
              currChoice={currentPersonIndex}
              changeCurrChoice={(i) => setCurrentPersonIndex(i)}
              type="anonym"
              className="flex gap-4"
            />
          </div>
          <p>{currPerson.role}</p>
          <h2>{currPerson.name}</h2>
          <p>{currPerson.bio}</p>
        </section>
      </LayoutPage>
    </div>
  )
}

export default Crew
