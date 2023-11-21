import { HomeIcon } from "@heroicons/react/20/solid"
import { BuildingLibraryIcon } from "@heroicons/react/24/outline"
import { PlusCircleIcon } from "@heroicons/react/24/outline"
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline"
import { HeartIcon } from "@heroicons/react/24/outline"
import { RssIcon } from "@heroicons/react/24/outline"
import { MusicalNoteIcon } from "@heroicons/react/24/outline"

export default function Sidebar() {
  return (
    <div className="text-gray-500 p-2 text-sm border-r border-none w-[25%] h-full">
        <div className="space-y-2">

          {/* <button className="flex items-center hover:text-white">
            <MusicalNoteIcon className="w-8 h-8" />
            <p className="text-[1.6rem]">Dhwani</p>
          </button> */}

          {/* First Section */}
          <div className="flex flex-col items-start justify-center gap-4 text-[1.2rem] bg-[#181818] border-2 border-[#181818] p-2 rounded-lg">
            <button className="flex items-center space-x-2 hover:text-white">
              <HomeIcon className="w-5 h-5" />
              <p>Home</p>
            </button>
            <button className="flex items-center space-x-2 hover:text-white">
              <MagnifyingGlassCircleIcon className="w-5 h-5" />
              <p>Search</p>
            </button>
            <button className="flex items-center space-x-2 hover:text-white">
              <BuildingLibraryIcon className="w-5 h-5" />
              <p>Your Library</p>
            </button>
          </div>

          {/* Second Section */}
          <div className="flex flex-col items-start justify-center gap-4 text-[1.2rem] bg-[#181818] border-2 border-[#181818] p-2 rounded-lg">
            <button className="flex items-center space-x-2 hover:text-white">
              <PlusCircleIcon className="w-5 h-5" />
              <p>Create Playlist</p>
            </button>
            <button className="flex items-center space-x-2 hover:text-white">
              <HeartIcon className="w-5 h-5" />
              <p>Liked Songs</p>
            </button>
            <button className="flex items-center space-x-2 hover:text-white">
              <RssIcon className="w-5 h-5" />
              <p>Your Episodes</p>
            </button>
          </div>

          {/* Playlists */}
          <div className="flex flex-col items-start justify-center h-full gap-4 text-[1.2rem] bg-[#181818] border-2 border-[#181818] p-2 rounded-lg">
            <p className="cursor-pointer hover:text-white">
              Playlist name .....
            </p>
            <p className="cursor-pointer hover:text-white">
              Playlist name .....
            </p>
            <p className="cursor-pointer hover:text-white">
              Playlist name .....
            </p>
            <p className="cursor-pointer hover:text-white">
              Playlist name .....
            </p>
            <p className="cursor-pointer hover:text-white">
              Playlist name .....
            </p>
          </div>
        </div>
    </div>
  )
}
