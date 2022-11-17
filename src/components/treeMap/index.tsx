import ReactEcharts from 'echarts-for-react'
import { returnTreeMapOptions } from '../../utils/chartConfig'

import DOWNLOADICON from '../../assets/download-icon.svg'
import * as Styled from './styled'
import { CSVLink } from 'react-csv'
import { useState } from 'react'

export type TreeMapComponenteProps = {
  treeMapData : (string | number)[][]
}

export const TreeMapComponente = ({ treeMapData }: TreeMapComponenteProps) => {
  const [messageInfo, setMessageInfo] = useState(false);

  const _treeMapData = returnTreeMapOptions({ treeMapData })

  const dataToDownload = [
    ['capital-social', 'quantidade'],
    ...treeMapData
  ]

  return (
    <Styled.Container>
      <Styled.Header>
        <p>Classificação Por Capital Social</p>
        {messageInfo && <p className='info'>Baixar CSV</p>}
        <span>
          <CSVLink data={dataToDownload}
            filename={`capital-social`} 
            className='icon-download'
              onMouseOver={() => setMessageInfo(true)}
              onMouseOut={() => setMessageInfo(false)}
            > 
              <img src={DOWNLOADICON} alt="icone de download para arquivo svg" />
          </CSVLink>
        </span>
      </Styled.Header>
      <ReactEcharts option={_treeMapData} />
    </Styled.Container>
  )
}