import React from 'react'
import { useReducer } from 'react'
import { ContextGlobal } from './context'
import { estadoGlobal } from './data'
import { reducer } from './reducer'

export const ContextProvider = ({children}) => {
  
  const [state, dispatch] = useReducer(reducer, estadoGlobal)

  return <ContextGlobal.Provider  value={{state, dispatch}}>{children}</ContextGlobal.Provider>
}