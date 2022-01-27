import * as actions from '../contexts/GlobalContext/actions'

const initial_date = new Date()
const ano = initial_date.getMonth() >= 2 ? initial_date.getFullYear() : initial_date.getFullYear()-1 

export const reducerFilter = (state, action) => {
  switch (action.type) {
    case actions.LIMPAR_FILTROS:
      return{...state, ano: ano, setor: '', porte: '', natureza: '', descricao_atividade: '', municipio_empresa: '', secao_atividade: ''}
    case actions.MUDAR_ANO: 
      if(action.payload.length == 1){
        return {...state, ano: action.payload[0].Country}
      } else {
        return {...state, ano: action.payload}
      }

    case actions.MUDAR_PORTE: 
      return {...state, porte: action.payload}

    case actions.MUDAR_SETOR: 
      return {...state, setor: action.payload}

    case actions.MUDAR_NATUREZA: 
      return {...state, natureza: action.payload}

    case actions.MUDAR_MUNICIPIO: 
      return {...state, municipio_empresa: action.payload}

    case actions.MUDAR_SECAO_ATIVIDADE:
      return {...state, secao_atividade: action.payload}

    case actions.MUDAR_ATIVIDADE:
      return {...state, descricao_atividade: action.payload}
    
    case actions.MUDAR_ESTADO_INICIAL_EMPRESAS:
      return {...state, empresasAbertas: action.payload}

    default:
      return {...state}
  }
}