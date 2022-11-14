import { useLocation } from 'react-router'
import { MyLink } from '../../components/myLink'
import * as Styled from './styled'

export type TemplateLinksProps = {
  
}

export const TemplateLinks = () => {

  const { pathname } = useLocation()

  return (
    <Styled.Container>
      <MyLink 
        pathname={pathname}
        linkText='Empresas Abertas'
        href='/estatisticas/empresas-abertas'
      />

      <MyLink 
        pathname={pathname}
        linkText='Empresas Ativas'
        href='/estatisticas/empresas-ativas'
      />
    </Styled.Container>
  )
}