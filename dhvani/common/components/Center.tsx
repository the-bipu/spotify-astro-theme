'use client';
import React, { useContext } from "react";
import { UserContext } from "../contexts/userContext"
import './center.css';
import { SiMacos } from "react-icons/si";

export default function Center() {
  const { showSideBar, setShowSideBar, isPlayer, setIsPlayer } = useContext(UserContext);

  return (
    <div className="w-full h-full">
      <div className="text-white text-3xl h-full w-full bg-[#ffffff] flex flex-row gap-8 p-10">

        <button className="button-11" role="button" onClick={() => setShowSideBar(!showSideBar)}>
          <div className="button-11__content">
            <div className="button-11__icon">
              <SiMacos />
            </div>
            <p className="button-11__text text">Sidebar</p>
          </div>
        </button>

        <button className="button-11" role="button" onClick={() => setIsPlayer(!isPlayer)}>
          <div className="button-11__content">
            <div className="button-11__icon">
              <SiMacos />
            </div>
            <p className="button-11__text text">Player</p>
          </div>
        </button>



      </div>
    </div>
  )
}
