import { useContext, useState } from 'react'
import { CSVLink } from 'react-csv'

import { Chart } from '../../components/chart'
import { FilterContext } from '../../contexts/filtersContext/contextProvider'

import DOWNLOADICON from '../../assets/download-icon.svg'

import * as Styled from './styled'

export type TemplateChartProps = {
  chartData: (string | number)[][]
  chartType: 'Porte' | 'Setor' | 'Mês'
}

export const TemplateChart = ({ chartType, chartData }: TemplateChartProps) => {
  const [messageInfo, setMessageInfo] = useState(false);
  const { state: { empresasAbertas } } = useContext(FilterContext)
  const allMonths = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"]

  const dataToDownload = [
    [chartType, 'quantidade'],
    ...chartData
  ]

  if(chartType === 'Mês') {
    chartData = chartData.map((data, index) => (
      [allMonths[index], data[1]]
    ))
  }

  return (
    <Styled.Container>
      <Styled.Header>
        <p>Empresas {empresasAbertas ? 'Abertas' : 'Ativas'} Por {chartType}</p>
        {messageInfo && <p className='info'>Baixar CSV</p>}
        <span>
          <CSVLink data={dataToDownload}
            filename={`${chartType}-empresa`} 
            className='icon-download'
              onMouseOver={() => setMessageInfo(true)}
              onMouseOut={() => setMessageInfo(false)}
            > 
              <img src={DOWNLOADICON} alt="icone de download para arquivo svg" />
          </CSVLink>
        </span>
      </Styled.Header>
      <Chart 
        chartData={chartData}
        chartType={chartType}
        isVertical={(chartType === 'Porte' || chartType === 'Mês') ? true : false}
      />
    </Styled.Container>
  )
}