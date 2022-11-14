import { Meta } from '@storybook/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { MyLink } from '../../components/myLink'

import { TemplateLinksProps } from '.'
import { Container } from './styled'

export default {
  title: 'TemplateLinks/FirstLinkActive',
} as Meta<TemplateLinksProps>

export const FirstLinkActive = (args: TemplateLinksProps) => (
  <Container>
    <Router>
      <MyLink
        pathname='/estatisticas/empresas-abertas'
        linkText='Empresas Abertas'
        href='/estatisticas/empresas-abertas'
      />

      <MyLink 
        pathname='/estatisticas/empresas-ativas'
        linkText='Empresas Ativas'
        href='other-href'
      />
    </Router>
  </Container>
)