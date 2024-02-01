'use client';
import Center from '@/common/components/Center'
import Player from '@/common/components/Player'
import Sidebar from '@/common/components/Sidebar'

import '../app/globals.css'
import { useContext } from 'react';
import { UserContext } from '@/common/contexts/userContext';

export default function Home() {
  const { showSideBar, setShowSideBar } = useContext(UserContext);

  return (
    <main className=' h-screen overflow-hidden flex flex-row'>
      <div className={`h-full ${showSideBar ? 'hidden' : 'w-1/4'}`}>
        <Sidebar />
      </div>
      <div className={`bg-gray-300 h-full ${showSideBar ? 'w-full' : 'w-3/4'}`}>
        <Center />
        <Player />
      </div>
    </main>
  )
}
