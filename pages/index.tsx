import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <header>
        <div>
          <Image src="./shared/logo.svg" alt="logo" width={48} height={48} />
        </div>
        <ul>
          <li>00 HOME</li>
          <li>01 DESTINATION</li>
          <li>02 CREW</li>
          <li>03 TECHNOLOGY</li>
        </ul>
      </header>
    </div>
  )
}
