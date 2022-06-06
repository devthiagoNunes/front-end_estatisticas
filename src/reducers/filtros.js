import * as actions from '../contexts/GlobalContext/actions'

const initial_date = new Date()
const ano = (initial_date.getMonth() >= 1 && initial_date.getDate() >= 3) ? initial_date.getFullYear() : initial_date.getFullYear()-1

function mapFilters(action){
  var values = [];

  if(typeof(action) === "boolean")
    return action;

  action.map((el, i) => {
    values.push(el.Country);
  });
  
  return values;
}

export const reducerFilter = (state, action) => {
  switch (action.type) {
    case actions.LIMPAR_FILTROS:
      return{...state, ano: ano, setor: '', porte: '', natureza: '', descricao_atividade: '', municipio_empresa: '', secao_atividade: ''}
    
    case actions.MUDAR_ANO: 
      if(action.payload.length == 0) {
        return {...state, ano}
      } else {
        return {...state, ano: mapFilters(action.payload)}
      }

    case actions.MUDAR_PORTE:  
      if(action.payload.length == 0){
        return {...state, porte: ''}
      } else {
        return {...state, porte: mapFilters(action.payload)}
      }
    
    case actions.MUDAR_SETOR: 
      if(action.payload.length == 0){
        return {...state, setor: ''}
      } else {
        return {...state, setor: mapFilters(action.payload)}
      }

    case actions.MUDAR_NATUREZA:
      if(action.payload.length == 0){
        return {...state, natureza: ''}
      } else {
        return {...state, natureza: mapFilters(action.payload)}
      }
    
    case actions.MUDAR_MUNICIPIO:
      if(action.payload.length == 0){
        return {...state, municipio_empresa: ''}
      } else {
        return {...state, municipio_empresa: mapFilters(action.payload)}
      }

    case actions.MUDAR_SECAO_ATIVIDADE:
      if(action.payload.length == 0){
        return {...state, secao_atividade: ''}
      } else {
        return {...state, secao_atividade: mapFilters(action.payload)}
      }

    case actions.MUDAR_ATIVIDADE:
      if(action.payload.length == 0){
        return {...state, descricao_atividade: ''}
      } else {
        return {...state, descricao_atividade: mapFilters(action.payload)}
      }
    
    case actions.MUDAR_ESTADO_INICIAL_EMPRESAS:
      if(action.payload.length == 0){
        return {...state, empresasAbertas: ''}
      } else {
        return {...state, empresasAbertas: mapFilters(action.payload)}
      }

    case actions.MUDAR_MES:
      if(action.payload.length == 0){
        return {...state, mes: ''}
      } else {
        return {...state, mes: `${action.payload[0].label + 1}`}
      }
    
    default:
      return {...state}
  }
}