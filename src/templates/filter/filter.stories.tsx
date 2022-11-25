import { Meta } from '@storybook/react'
import { TemplateFilter, TemplateFilterProps } from '.'

export default {
  title: 'Templates/Filters',
  component: TemplateFilter,
  args: {
    activityFilterData: [['Atividade 1'], ['Atividade 2']],
    countyFilterData: [['Municipio 1'], ['Municipio 2']],
    natureFilterData: [['Natureza 1'], ['Natureza 2']],
    porteFilterData: [['Porte 1'], ['Porte 2']],
    sectorFilterData: [['Setorr 1'], ['Setorr 2']],
    setionFilterData: [['Seção 1'], ['Seção 2']],
  },
  argTypes: {
    pathname: {
      type: 'string',
      description: 'Deve ser a rota que o usuario está, caso seja empresas-ativas, os filtros de mês e ano devem sumir.'
    },
    activityFilterData: {
      type: { name: 'array' },
      description: 'Lista de arrays com uma posição que deve ser uma string contendo o tipo de atividade que uma empresa pode assumir.'
    },
    countyFilterData: {
      type: { name: 'array' },
      description: 'Lista de arrays com uma posição que deve ser uma string contendo o nome do municipio.'
    },
    natureFilterData: {
      type: { name: 'array' },
      description: 'Lista de arrays com uma posição que deve ser uma string contendo o tipo de natureza que uma empresa pode assumir.'
    },
    porteFilterData: {
      type: { name: 'array' },
      description: 'Lista de arrays com uma posição que deve ser uma string contendo o tipo de porte que uma empresa pode assumir.'
    },
    sectorFilterData: {
      type: { name: 'array' },
      description: 'Lista de arrays com uma posição que deve ser uma string contendo o tipo de setor que uma empresa pode pertencer.'
    },
    setionFilterData: {
      type: { name: 'array' },
      description: 'Lista de arrays com uma posição que deve ser uma string contendo o tipo de seção que uma empresa pode assumir.'
    },
  },
} as Meta<TemplateFilterProps>

export const Component = (args: TemplateFilterProps) => <TemplateFilter {...args} />