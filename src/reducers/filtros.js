import * as actions from '../contexts/GlobalContext/actions'

export const reducerFilter = (state, action) => {
  switch (action.type) {
    case actions.MUDAR_ANO: 
      return {...state, ano: action.payload}

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