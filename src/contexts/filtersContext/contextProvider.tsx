import React from 'react'
import { useReducer } from 'react'
import { estadoGlobal } from './data'
import * as reducer from '../../reducers/filtros'

import {createContext} from 'react'

type FilterContext = {
  state: {
    empresasAbertas: boolean
    setor: string
    porte: string
    natureza: string
    descricao_atividade: string
    municipio_empresa: string
    secao_atividade: string
    mes: any[]
    ano: number
  }
  dispatch: React.Dispatch<React.SetStateAction<any>>
}

export const FilterContext = createContext({} as FilterContext)

export const ContextProvider = ({children}) => {
  
  const [state, dispatch] = useReducer(reducer.reducerFilter, estadoGlobal)

  return <FilterContext.Provider value={{state, dispatch}}>{children}</FilterContext.Provider>
}