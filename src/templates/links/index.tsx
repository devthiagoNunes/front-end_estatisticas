import { useContext } from 'react'
import { useLocation } from 'react-router'
import { MyLink } from '../../components/myLink'
import { FilterContext } from '../../contexts/filtersContext/contextProvider'

import * as Actions from '../../contexts/filtersContext/actions'

import * as Styled from './styled'

export type TemplateLinksProps = {
  
}

export const TemplateLinks = () => {

  const { pathname } = useLocation()
  const { dispatch } = useContext(FilterContext)

  return (
    <Styled.Container>
      <MyLink 
        pathname={pathname}
        linkText='Empresas Abertas'
        actionOnClick={() => {
          dispatch({
            type: Actions.LIMPAR_FILTROS,
          })

          dispatch({
            type: Actions.MUDAR_ESTADO_INICIAL_EMPRESAS,
            payload: true
          })
        }}
        href='/estatisticas/empresas-abertas'
      />

      <MyLink 
        pathname={pathname}
        linkText='Empresas Ativas'
        actionOnClick={() => {
          dispatch({
            type: Actions.LIMPAR_FILTROS,
          })
          
          dispatch({
            type: Actions.MUDAR_ESTADO_INICIAL_EMPRESAS,
            payload: false
          })
        }}
        href='/estatisticas/empresas-ativas'
      />
    </Styled.Container>
  )
}