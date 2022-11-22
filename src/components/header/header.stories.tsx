import { Meta } from '@storybook/react'
import { Header, HeaderProps } from '.'

export default {
  title: 'Component/Header',
  component: Header,
  argTypes: {
    filtersVisible: {
      description: 'Essa propriedade é utilizada para definir se o filtro está visivel ou não na responsividade mobile. Está disponível somente responsividade mobile.',
      type: 'boolean',
      defaultValue: false
    },
    setFiltersVisible: {
      description: 'Deve ser uma função que altera o valor de "filtersVisible" para que o filtro apareça ou "suma" da tela na responsividade mobile. Está disponível somente para responsividade mobile.',
      type: 'function'
    }
  },
} as Meta<HeaderProps>

export const Component = (args: HeaderProps) => <Header {...args} />
