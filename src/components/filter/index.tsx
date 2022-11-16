import React, { useContext, useState } from "react"
import Multiselect from "multiselect-react-dropdown"

import { FilterContext } from "../../contexts/filtersContext/contextProvider"

import * as Styled from './styled'

type Actions = 'MUDAR_ANO' | 'MUDAR_MES' | 'MUDAR_PORTE' | 'MUDAR_SETOR' | 'MUDAR_NATUREZA' | 'MUDAR_MUNICIPIO' | 'MUDAR_SECAO_ATIVIDADE' | 'MUDAR_ATIVIDADE' | 'MUDAR_ESTADO_INICIAL_EMPRESAS' | 'LIMPAR_FILTROS'

export type FilterProps = {
  action: Actions
  showCheckbox?: boolean
  singleSelect?: boolean
  filterOptionsData: {
    filterValue: string | number
    label: string | number
  }[]
  filterDescription: string
  placeholder?: string
}

export const Filter = ({
  action,
  showCheckbox = true, 
  singleSelect = false, 
  filterOptionsData, 
  filterDescription,
  placeholder = 'Selecionar', 
}: FilterProps) => {

  const context = useContext(FilterContext)
  const [infor, setInfor] = useState(false)

  return (
    <Styled.Container>
      <p>
        {filterDescription}:
        {filterDescription === 'Mês' &&
          <span
            className="info"
            onMouseOver={() => setInfor(true)}
            onMouseOut={() => setInfor(false)}
          >?</span>
        }
        {infor && (
          <span className="message">Ao selecionar 2 meses, os resultados serão baseados no intervalo entre.</span>
        )}
      </p>
      <Multiselect
        className="filter"
        options={filterOptionsData}
        singleSelect={singleSelect}
        displayValue="filterValue"
        showCheckbox={showCheckbox}
        placeholder={placeholder}
        emptyRecordMsg='Carregando...'
        onSelect={(e) => context.dispatch({type:action, payload: e})}
        onRemove={(e) => context.dispatch({type:action, payload: e})}
      />
    </Styled.Container>
  )
}