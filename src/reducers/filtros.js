import * as actions from '../contexts/GlobalContext/actions'

const initial_date = new Date()
const ano = initial_date.getMonth() >= 2 ? initial_date.getFullYear() : initial_date.getFullYear()-1 

export const reducerFilter = (state, action) => {
  switch (action.type) {
    case actions.LIMPAR_FILTROS:
      return{...state, ano: ano, setor: '', porte: '', natureza: '', descricao_atividade: '', municipio_empresa: '', secao_atividade: ''}
    case actions.MUDAR_ANO: 
      if(action.payload.length == 0){
        return {...state, ano: ano}
      }
      if(action.payload.length == 1){
        return {...state, ano: action.payload[0].Country}
      } else {
        return {...state, ano: action.payload}
      }

    case actions.MUDAR_PORTE: 
      if(action.payload.length == 0){
        return {...state, porte: ''}
      }
      if(action.payload.length == 1){
        return {...state, porte: action.payload[0].Country}
      } else {
        return {...state, porte: action.payload}
      }

    case actions.MUDAR_SETOR: 
      if(action.payload.length == 0){
        return {...state, setor: ''}
      }
      if(action.payload.length == 1){
        return {...state, setor: action.payload[0].Country}
      } else {
        return {...state, setor: action.payload}
      }

    case actions.MUDAR_NATUREZA: 
      if(action.payload.length == 0){
        return {...state, natureza: ''}
      }
      if(action.payload.length == 1){
        return {...state, natureza: action.payload[0].Country}
      } else {
        return {...state, natureza: action.payload}
      }

    case actions.MUDAR_MUNICIPIO:
      if(action.payload.length == 0){
        return {...state, municipio_empresa: ''}
      } 
      if(action.payload.length == 1){
        return {...state, municipio_empresa: action.payload[0].Country}
      } else {
        return {...state, municipio_empresa: action.payload}
      }

    case actions.MUDAR_SECAO_ATIVIDADE:
      if(action.payload.length == 0){
        return {...state, secao_atividade: ''}
      }
      if(action.payload.length == 1){
        return {...state, secao_atividade: action.payload[0].Country}
      } else {
        return {...state, secao_atividade: action.payload}
      }

    case actions.MUDAR_ATIVIDADE:
      if(action.payload.length == 0){
        return {...state, descricao_atividade: ''}
      }
      if(action.payload.length == 1){
        return {...state, descricao_atividade: action.payload[0].Country}
      } else {
        return {...state, descricao_atividade: action.payload}
      }
    
    case actions.MUDAR_ESTADO_INICIAL_EMPRESAS:
      if(action.payload.length == 0){
        return {...state, empresasAbertas: ''}
      }
      if(action.payload.length == 1){
        return {...state, empresasAbertas: action.payload[0].Country}
      } else {
        return {...state, empresasAbertas: action.payload}
      }

    default:
      return {...state}
  }
}