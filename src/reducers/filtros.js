import * as actions from '../contexts/GlobalContext/actions'

export const reducerFilter = (state, action) => {
  switch (action.type) {
    case actions.MUDAR_ANO: 
      return {...state, ano: action.payload}

    case actions.MUDAR_PORTE: 
      console.log({...state, porte: action.payload})
      return {...state, ano: action.payload}
    default:
      return {...state}
  }
}