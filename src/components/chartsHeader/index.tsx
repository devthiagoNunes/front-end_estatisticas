import { useState } from 'react'
import { CSVLink } from 'react-csv'

import DOWNLOADICON from '../../assets/download-icon.svg'

import * as Styled from './styled'

export type ChartsHeaderProps = {
  textToHeader: string
  chartData: (string | number)[][]
  chartType: 'Porte' | 'Setor' | 'Mês' | 'Natureza' | 'Municipio' | 'Capital Social'
}

export const ChartsHeader = ({ chartType, chartData, textToHeader }: ChartsHeaderProps) => {
  const [messageInfo, setMessageInfo] = useState(false);

  const dataToDownload = [
    [chartType, 'quantidade'],
    ...chartData
  ]

  return (
    <Styled.Header chartType={chartType}>
      <p>{textToHeader}</p>
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
  )
}