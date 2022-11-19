import { Actions } from '../../components/filter';
import { FilterStateProps } from '../../contexts/filtersContext/data';

type PayloadProps = {
  filterValue: string | number
  label: string | number
} []

export type ActionProps = {
  type: Actions
  payload: PayloadProps
}

type OptionFilter = 'empresasAbertas' | 'porte' | 'setor' | 'natureza' | 'descricao_atividade' | 'municipio_empresa' | 'secao_atividade' | 'mes' | 'ano'

const initial_date = new Date()
const ano = (initial_date.getMonth() >= 1 && initial_date.getDate() >= 3) ? initial_date.getFullYear() : initial_date.getFullYear()-1

function returnOptionsSelected(payload: PayloadProps): (string | number)[] {
  const optionsSelected: (string | number)[] = []

  payload.map(data => {
    optionsSelected.push(data.label)
  })
  
  return optionsSelected
}

function returnYearSelected(payload: PayloadProps): number {
  let optionsSelected: number = null

  payload.map(data => {
    if(typeof data.filterValue === 'number') {
      optionsSelected = data.filterValue
    }
  })
  
  return optionsSelected;
}

function returnNewStateFilters(state:FilterStateProps, action: ActionProps, optionFilter: OptionFilter ) {
  if(!action.payload.length) {
    return { ...state, [optionFilter]: [] }
  } else {
    return {...state, [optionFilter]: returnOptionsSelected(action.payload)}
  }
}

const filterReducer = (state:FilterStateProps, action: ActionProps) => {
  switch (action.type) {
    case 'LIMPAR_FILTROS':
      return{...state, ano: ano, setor: [], porte: [], natureza: [], descricao_atividade: [], municipio_empresa: [], secao_atividade: []}
    
    case 'MUDAR_ANO': 
      if(!action.payload.length) {
        return { ...state, ano }
      } else {
        return {...state, ano: returnYearSelected(action.payload)}
      }

    case 'MUDAR_PORTE':
      return returnNewStateFilters(state, action, 'porte')

    case 'MUDAR_SETOR':
      return returnNewStateFilters(state, action, 'setor')

    case 'MUDAR_NATUREZA':
      return returnNewStateFilters(state, action, 'natureza')
    
    case 'MUDAR_MUNICIPIO':
      return returnNewStateFilters(state, action, 'municipio_empresa')

    case 'MUDAR_SECAO_ATIVIDADE':
      return returnNewStateFilters(state, action, 'secao_atividade')

    case 'MUDAR_ATIVIDADE':
      return returnNewStateFilters(state, action, 'descricao_atividade')
    
    case 'MUDAR_ESTADO_INICIAL_EMPRESAS':
      return {...state, empresasAbertas: Boolean(action.payload)}

    case 'MUDAR_MES':
      return returnNewStateFilters(state, action, 'mes')
    
    default:
      return { ...state }
  }
}

export { filterReducer }