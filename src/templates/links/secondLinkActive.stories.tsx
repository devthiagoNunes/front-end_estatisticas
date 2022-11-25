import { Meta } from '@storybook/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { MyLink } from '../../components/myLink'

import { TemplateLinksProps } from '.'
import { Container } from './styled'

export default {
  title: 'Templates/Links/SecondLinkActive',
} as Meta<TemplateLinksProps>

export const SecondLinkActive = (args: TemplateLinksProps) => (
  <Container>
    <Router>
      <MyLink
        pathname='other-pathname'
        linkText='Empresas Abertas'
        href='/estatisticas/empresas-abertas'
      />

      <MyLink 
        pathname='/estatisticas/empresas-ativas'
        linkText='Empresas Ativas'
        href='/estatisticas/empresas-ativas'
      />
    </Router>
  </Container>
)