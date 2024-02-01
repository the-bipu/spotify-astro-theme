import Image from 'next/image'
import { useContext } from 'react';
import { UserContext } from '../contexts/userContext';

export default function Player() {
  const { showSideBar, setShowSideBar, isPlayer, setIsPlayer } = useContext(UserContext);

  return (
    <div className={`absolute bottom-0 h-24 flex bg-[#666] ${showSideBar ? 'w-full' : 'w-3/4'} ${isPlayer ? 'flex' : 'hidden'}`}>
        <h1 className='text-white'>I am a Player.</h1>
    </div>
  )
}
