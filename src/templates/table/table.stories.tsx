import { Meta } from '@storybook/react'
import { TemplateTable, TemplateTableProps } from '.'

export default {
  title: 'Templates/Table',
  component: TemplateTable,
  args: {
    tableData: [['Natureza 1', 1234], ['Natureza 2', 4567], ['Natureza 3', 4467], ['Natureza 4', 4877], ['Natureza 5', 1567], ['Natureza 6', 8467], ['Natureza 7', 8467], ['Natureza 8', 8467], ['Natureza 9', 8467], ['Natureza 10', 8467], ['Natureza 11', 8467]]
  },
  argTypes: {
    tableType: {
      type: 'string',
      defaultValue: 'Natureza',
      description: 'Essa informação irá complementar o cabeçalho da tabela.'
    },
    tableData: {
      type: { name: 'array' },
      description: 'Lista de arrays com duas posições, sendo a primeira uma string e a segunda um valor numérico contendo a quantidade para a determinada informação.'
    }
  },
} as Meta<TemplateTableProps>

export const Component = (args: TemplateTableProps) => (
  <div style={{
    maxWidth: '550px',
  }}>
    <TemplateTable {...args} />
  </div>
)