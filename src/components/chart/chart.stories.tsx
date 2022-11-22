import { Meta } from '@storybook/react'
import { Chart, ChartProps } from '.'

export default {
  title: 'Component/Chart',
  component: Chart,
  args: {
    chartData: [
      ['ME', 15986],
      ['NO', 12986],
      ['EPP', 10986],
      ['MEI', 8986],
    ],
    chartType: 'Porte',
  },
  argTypes: {
    chartData: { 
      type: { name: 'array' },
      description: 'Deve ser uma lista(Array) de arrays com duas posições, onde a primeira é uma string e a segunda posição um valor numérico. Caso queira mudar o estilo do grafico, você deve modificar o arquivo /utils/chartConfig/index.ts seguindo a documentação do echarts-for-react.'
    },
    chartType: {
      type: { name: 'array', required: false },
      description: 'São todas as possibilidades de graficos que existem na aplicação. Se o tipo for setor, o gráfico ficará na horizontal.'
    },
    isVertical: {
      type: { name: 'boolean', required: false },
      description: 'Se false o gráfico ficará na horizontal, se true, o gráfico ficará na vertical.'
    }
  },
} as Meta<ChartProps>

export const PorteChart = (args: ChartProps) => <Chart {...args} />

export const SetorChart = PorteChart.bind({})
SetorChart.args = {
  chartData: [
    ['Administração Pública', 15986],
    ['Comércio', 12986],
    ['Serviços', 10986],
    ['Construlção', 8986],
  ],
  chartType: 'Setor',
  isVertical: false
}

export const MonthChart = PorteChart.bind({})
MonthChart.args = {
  chartData: [
    ['Janeiro', 1565],
    ['Fevereiro', 1286],
    ['Março', 986],
    ['Abril', 3886],
    ['Maio', 386],
    ['Junho', 3686],
    ['Julho', 3801],
    ['Agosto', 3706],
  ],
  chartType: 'Mês',
}