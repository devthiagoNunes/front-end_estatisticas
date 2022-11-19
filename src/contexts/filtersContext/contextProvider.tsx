import React from 'react'
import { useReducer, createContext } from 'react'

import { filtersState, FilterStateProps } from './data'
import { filterReducer } from '../../utils/filter/reducerFunction'


export type FilterContextProps = {
  state: FilterStateProps
  dispatch: React.Dispatch<React.SetStateAction<any>>
}

export const FilterContext = createContext({} as FilterContextProps)

export const ContextProvider = ({children}) => {
  
  const [state, dispatch] = useReducer(filterReducer, filtersState)

  return <FilterContext.Provider value={{state, dispatch}}>{children}</FilterContext.Provider>
}