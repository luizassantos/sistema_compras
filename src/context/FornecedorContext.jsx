import React from 'react'

import { createContext, useState } from "react";

export const FornecedorContext = createContext();

export const FornecedorProvider = ({children}) => {

    const [atualizar, setAtualizar] = useState(false)

  return (
    <FornecedorContext.Provider value={
        {
            atualizar, setAtualizar
        }}>
        {children}
    </FornecedorContext.Provider>
  )
}


