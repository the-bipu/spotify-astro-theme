import Center from '@/components/Center'
import Player from '@/components/Player'
import Sidebar from '@/components/Sidebar'

export default function Home() {
  return (
    <main className='bg-black h-screen overflow-hidden flex flex-col'>
      <div className='flex flex-row h-[850%]'>
          <Sidebar />

          <Center />
      </div>

      <div className='flex flex-row h-[15%]'>
        <Player />
      </div>
    </main>
  )
}
