import { Meta } from '@storybook/react'
import { ChartsHeader, ChartsHeaderProps } from '.'

export default {
  title: 'Component/ChartsHeader',
  component: ChartsHeader,
  args: {
    textToHeader: 'Um texto descrevendo o gráfico',
    chartType: 'Municipio',
    chartData: [
      ['São Luis', 15000],
      ['Paço do Lumiar', 12083],
      ['Raposa', 11845],
      ['Imperatriz', 10358],
    ]
  },
  argTypes: {
    chartType: {
      description: 'Deve ser uma das possibilidades definidas no ChartsHeaderProps'
    },
    textToHeader: { 
      description: 'Uma descrição para o gráfico'
    },
    chartData: {
      description: 'Deve ser uma lista(Array) de arrays com duas posições, onde a primeira é uma string e a segunda posição um valor numérico. Esses dados servem para realizar o download em csv.'
    }
  },
} as Meta<ChartsHeaderProps>

export const Default = (args: ChartsHeaderProps) => (
  <div style={{
    position: 'relative',
  }}>
    <ChartsHeader {...args} />
  </div>
)
