import Echarts from "echarts-for-react";

import { returnChartConfig } from "../../utils/chartConfig";

type ChartProps = {
  isVertical?: boolean
  chartType?: 'Porte' | 'Setor' | 'Mês'
  chartData: (string | number)[][]
}

export const Chart = ({ isVertical = true, chartData, chartType }: ChartProps) => {

  const { big, large, normal, small } = returnChartConfig({ isVertical, chartData, chartType })

  return (
    <div>
      {window.innerWidth >= 320 && window.innerWidth < 768 && (
        <Echarts
          option={small}
          style={{
            width: '100%',
            height: "45vh",
            minHeight: '281px',
            maxHeight: '281px',
          }}
          opts={{ renderer: "canvas" }}
        />
      )}

      {window.innerWidth >= 768 && window.innerWidth < 1024 && (
        <Echarts
          option={large}
          style={{
            width: "100%",
            height: "45vh",
            minHeight: '281px',
            maxHeight: '281px',
          }}
          opts={{ renderer: "canvas" }}
        />
      )}

      {window.innerWidth >= 1024 && window.innerWidth < 1366 && (
        <Echarts
          option={normal}
          style={{
            width: "100%",
            height: "45vh",
            minHeight: '281px',
            maxHeight: '281px',
          }}
          opts={{ renderer: "canvas" }}
        />
      )}

      {window.innerWidth >= 1366 && (    
        <Echarts
          option={big}
          style={{
            width: '100%',
            height: "45vh",
            minHeight: '281px',
            maxHeight: '281px',
          }}
          opts={{ renderer: "canvas" }}
        />
      )}
    </div>
  );
};