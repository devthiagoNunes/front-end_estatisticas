import { Meta } from '@storybook/react'
import {BrowserRouter as Router} from 'react-router-dom';

import { MyLink, MyLinkProps } from '.'

export default {
  title: 'Component/MyLink',
  component: MyLink,
  args: {
    href: '/estatisticas/empresas-abertas',
    linkText: 'Empresas Abertas',
    pathname: '/estatisticas/empresas-abertas'
  },
  argTypes: {
    href: {
      type: 'string',
      description: 'Endereço para onde redirecionar o usuário'
    },
    linkText: {
      type:'string',
      description: 'Texto descritivo do link'
    },
    pathname: {
      type:'string',
      description: 'Endereço atual em que o usuário está. É necessário para que o estilo adequado seja aplicado ao link'
    },
    actionOnClick: {
      type: 'function',
      description: 'Caso queira executar alguma função ao clicar no link, basta passa-la aqui.'
    }
  },
} as Meta<MyLinkProps>

export const ActiveLink = (args: MyLinkProps) => (
  <Router>
    <MyLink {...args} />
  </Router>
)

export const LinkDisabled = ActiveLink.bind({})

LinkDisabled.args = {
  linkText: 'Empresas Ativas',
  pathname: '/estatisticas/empresas-ativas'
}