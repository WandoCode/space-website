import { LayoutPage } from '@/layouts/LayoutPage'

export default function Home() {
  return (
    <div className="min-h-[100dvh] flex flex-col md:bg-hero-bg-desktop bg-no-repeat bg-center bg-cover sm:bg-hero-bg-tablet bg-hero-bg-mobile">
      <LayoutPage>
        <div className="flex-grow flex justify-center items-center sm:mt-10">
          <section className="flex flex-col items-center gap-[81px] sm:gap-[156px] md:w-[80%] md:max-w-[1110px] md:mx-auto md:flex-row  md:justify-between md:gap-0 md:items-end">
            <div className="slip-one grid gap-4 justify-items-center mx-auto sm:gap-0 sm:w-min md:mx-0 md:justify-items-start">
              <p className="h5">So, you want to travel to</p>
              <h1 className="h1">Space</h1>
              <p className="p px-6 sm:px-0">
                Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we’ll give you a truly out
                of this world experience!
              </p>
            </div>
            <div className="slipt-two">
              <button className="bg-white text-dark-blue h4 tracking-[2px] h-[150px] w-[150px] rounded-full flex items-center justify-center pt-2 sm:h-[242px] sm:w-[242px] md:h-[274px] md:w-[274px] md:hover:outline md:hover:outline-[88px] md:hover:outline-white/10">
                Explore
              </button>
            </div>
          </section>
        </div>
      </LayoutPage>
    </div>
  )
}
