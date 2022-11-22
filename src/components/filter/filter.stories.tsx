import { Meta } from '@storybook/react'
import { Filter, FilterProps } from '.'

export default {
  title: 'Component/Filter',
  component: Filter,
  args: {
    filterDescription: 'Porte',
    action: 'MUDAR_PORTE',
    filterOptionsData: [
      {
        filterValue: 'MEI',
        label: 'MEI'
      },
      {
        filterValue: 'NO',
        label: 'NO'
      },
      {
        filterValue: 'EPP',
        label: 'EPP'
      },
      {
        filterValue: 'ME',
        label: 'ME'
      },
    ]
  },
  argTypes: {
    filterDescription: {
      description: 'Uma string que ficará acima do componente de seleção, necessária para descrever que tipo de filtro é aquele.'
    },
    action: {
      description: 'Deve ser uma das opções possiveis no action parametro para que ao selecionar uma opção do filtro, o estado dos filtros seja modificado. Esse processo ocorre por meio da reducer function no arquivo /utils/filter/reducerFUnction.ts'
    },
    filterOptionsData: {
      description: 'Deve ser uma lista(Array) de objetos. O valor numérico é utilizado somente na label para criar as opções do filtro anual.'
    },
    placeholder: {
      type: { name: "string", required: false },
      description: 'Caso você queira mudar o placeholder default, o valor deve ser uma string.',
      defaultValue: 'Selecionar'
    },
    selectionLimit: {
      type: { name: 'number', required: false },
      description: 'Se tiver um filtro que deve ter uma quantidade maxima de opções a ser seleionada, basta definir a quantidade aqui.'
    },
    singleSelect: {
      description: 'Se tiver um filtro que deve ter somente uma seleção de opção, basta definir o valor desse parametro como true.'
    },
    showCheckbox: {
      type: { name: "boolean", required: false },
      description: 'Em caso de você não desejar exibir o chackbox das opções, basta atribuir o valor como false.'
    }
  },
} as Meta<FilterProps>

export const MultiSelect = (args: FilterProps) => (
  <div style={{
    paddingTop: '2rem'
  }}>
    <Filter {...args} />
  </div>
)

export const SingleSelect = MultiSelect.bind({})
SingleSelect.args = {
  filterDescription: 'Ano de Abertura',
  action: 'MUDAR_ANO',
  filterOptionsData: [
    {
      filterValue: 2020,
      label: 2020
    },
    {
      filterValue: 2021,
      label: 2021
    },
    {
      filterValue: 2022,
      label: 2022
    },
    {
      filterValue: 2023,
      label: 2023
    },
  ],
  singleSelect: true
}

export const Month = MultiSelect.bind({})
Month.args = {
  filterDescription: 'Mês',
  action: 'MUDAR_MES',
  filterOptionsData: [
    {
      filterValue: 'Janeiro',
      label: 1
    },
    {
      filterValue: 'Fevereiro',
      label: 2
    },
    {
      filterValue: 'Março',
      label: 3
    },
    {
      filterValue: 'Abril',
      label: 4
    },
  ],
  selectionLimit: 2
}