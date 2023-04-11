import { LayoutPage } from '@/layouts/LayoutPage'

export default function Home() {
  return (
    <div className="h-[100dvh] md:bg-hero-bg-desktop bg-no-repeat bg-center bg-cover sm:bg-hero-bg-tablet bg-hero-bg-mobile ">
      <LayoutPage>
        <p className="h5">So, you want to travel to</p>
        <h1 className="h1">Space</h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </LayoutPage>
    </div>
  )
}
