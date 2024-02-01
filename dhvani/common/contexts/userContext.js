'use client'
import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);
  const [isPlayer, setIsPlayer] = useState(false);

  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        setLoggedIn,
        showSideBar,
        setShowSideBar,
        isPlayer,
        setIsPlayer,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
