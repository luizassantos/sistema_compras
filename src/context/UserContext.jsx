import React from 'react'

import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({children}) => {

    const [isUserLogged, setIsUserLogged] = useState(false);
    const [isGoCadastro, setIsGoCadastro] = useState(false);
    const [userData, setUserData] = useState({});
    const [user, setUser] = useState();

  return (
    <UserContext.Provider value={
        {
            userData, setUserData, 
            user, setUser,
            isUserLogged, setIsUserLogged,
            isGoCadastro, setIsGoCadastro
        }}>
        {children}
    </UserContext.Provider>
  )
}


