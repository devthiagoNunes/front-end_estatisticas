import { Meta } from '@storybook/react'
import { TemplateChart, TemplateChartProps } from '.'

export default {
  title: 'Templates/Chart',
  component: TemplateChart,
  args: {
    chartType: 'Porte',
    chartData: [['MEI', 123], ['ME', 143], ['NO', 823], ['EPP', 654]]
  },
  argTypes: {
    chartType: {
      description: 'Pode ser uma das possibilidades definidas no TemplateChartProps type.'
    },
    chartData: {
      description: 'Lista de arrays com duas posições, sendo a primeira uma string e a segunda um valor numérico.'
    }
  },
} as Meta<TemplateChartProps>

export const Component = (args: TemplateChartProps) => (
  <div style={{
    maxWidth: '550px'
  }}>
    <TemplateChart {...args} />
  </div>
)