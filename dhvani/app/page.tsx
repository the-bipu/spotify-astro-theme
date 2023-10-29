import Center from '@/components/Center'
import Player from '@/components/Player'
import Sidebar from '@/components/Sidebar'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div>
        <Sidebar />
      </div>
      {/* <Center /> */}
      <div>
        <Player />
      </div>
    </main>
  )
}
