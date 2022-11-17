import ReactEcharts from 'echarts-for-react'

import { returnTreeMapOptions } from '../../utils/chartConfig'
import { ChartsHeader } from '../chartsHeader'

import * as Styled from './styled'

export type TreeMapComponenteProps = {
  treeMapData : (string | number)[][]
}

export const TreeMapComponente = ({ treeMapData }: TreeMapComponenteProps) => {
  const _treeMapData = returnTreeMapOptions({ treeMapData })

  return (
    <Styled.Container>
      <ChartsHeader 
        chartData={treeMapData} 
        chartType='Capital Social' 
        textToHeader='Classificação Por Capital Social'
      />
      <ReactEcharts option={_treeMapData} />
    </Styled.Container>
  )
}