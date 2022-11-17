import { useContext } from 'react'
import { Chart } from '../../components/chart'
import { ChartsHeader } from '../../components/chartsHeader'
import { FilterContext } from '../../contexts/filtersContext/contextProvider'

import * as Styled from './styled'

export type TemplateChartProps = {
  chartData: (string | number)[][]
  chartType: 'Porte' | 'Setor' | 'Mês'
}

export const TemplateChart = ({ chartType, chartData }: TemplateChartProps) => {
  const { state: { empresasAbertas } } = useContext(FilterContext)
  const allMonths = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"]

  if(chartType === 'Mês') {
    chartData = chartData.map((data, index) => (
      [allMonths[index], data[1]]
    ))
  }

  return (
    <Styled.Container>
      <ChartsHeader 
        chartData={chartData} 
        chartType={chartType} 
        textToHeader={`Empresas ${empresasAbertas ? 'Abertas' : 'Ativas'} Por ${chartType}`}
      />
      <Chart 
        chartData={chartData}
        chartType={chartType}
        isVertical={(chartType === 'Porte' || chartType === 'Mês') ? true : false}
      />
    </Styled.Container>
  )
}