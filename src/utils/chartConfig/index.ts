import echarts from "echarts";

type ReturnChartConfigProps = {
  isVertical?: boolean
  chartType?: 'Porte' | 'Setor' | 'Mês'
  chartData: (string | number)[][]
}

type ValuesAndChartColumnColors = {
  value: number
  itemStyle?: { color: string },
} []

const returnChartConfig = ({ chartData, isVertical = true, chartType }: ReturnChartConfigProps) => {
  const obj = {company: [], quantity: []}

  chartData.forEach(element => {
    if(typeof element[0] === 'string' && element[0].length > 20) {
      obj.company.push(element[0].replace(' ', '\n'))  
    } else {
      obj.company.push(element[0])
    }
    
    obj.quantity.push(element[1]);
  })
  
  let valuesAndChartColumnColors: ValuesAndChartColumnColors = []

  const colors = [
    "#48cae4",
    "#00b4d8",
    "#0096c7",
    "#0077b6",
    "#90e0ef",
    "#5c677d",
  ];

  for (let i = 0; i < obj.company.length; i++) {
    if(chartType !== 'Mês') {
      valuesAndChartColumnColors.push({
        value: obj.quantity[i],
        itemStyle: { color: colors[i] },
      })
    } else {
      valuesAndChartColumnColors.push({
        value: obj.quantity[i],
      })
    }
  }

  return ({
    normal: {
      grid: {
        containLabel: true,
        width: isVertical ? "92%" : "90%",
        height: "90%",
        left: "3%",
        top: chartType === 'Mês' ? '8%' : "4%",
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "none",
        },
      },
      label: {
        show: true,
        position: isVertical ? "top" : "right",
        fontSize: 10,
        fontWeight: "bold",
        color: "rgb(0, 0, 0)",
      },
      xAxis: {
        type: isVertical ? "category" : "value",
        data: isVertical ? obj.company : obj.quantity,
        axisTick: {
          alignWithLabel: true,
        },
        axisLabel: {
          fontSize: 10,
          fontWeight: "bold",
        },
      },
      yAxis: {
        type: isVertical ? "value" : "category",
        data: isVertical ? null : obj.company,
        axisTick: {
          alignWithLabel: true,
        },
        axisLabel: {
          fontSize: 10,
          fontWeight: "bold",
          verticalAlign: "middle",
        },
      },
      series: [
        {
          data: valuesAndChartColumnColors,
          type: "bar",
          showBackground: true,
          backgroundStyle: {
            color: "rgba(180, 180, 180, 0.2)",
          },
          barWidth: "50%",
          barMaxWidth: valuesAndChartColumnColors.length <= 2 ? "25%" : "50%",
          itemStyle: chartType === 'Mês' ? {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#00b4d8",
              },
              {
                offset: 1,
                color: "#1767cd",
              },
            ]),
          } : null,
          emphasis: chartType === 'Mês' ? {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0.7,
                color: "#44C0C1",
              },
              {
                offset: 1,
                color: "#06B5D7",
              },
            ]),
          } : null
        },
      ],
    },  
    large: {
      grid: {
        containLabel: true,
        width: isVertical ? "95%" : '90%',
        height: "90%",
        left: "3%",
        top: chartType === 'Mês' ? '8%' : "4%",
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "none",
        },
      },
      label: {
        show: true,
        align: "center",
        position: isVertical ? "top" : "right",
        fontSize: 10,
        fontWeight: "bold",
        color: "rgb(0, 0, 0)",
      },
      xAxis: {
        type: isVertical ? "category" : "value",
        data: isVertical ? obj.company : obj.quantity,
        axisLabel: {
          fontSize: 10,
          fontWeight: "bold",
        },
        axisTick: {
          alignWithLabel: true,
        },
        minInterval: !isVertical ? 6000 : 'auto'
      },
      yAxis: {
        tipo: isVertical ? "value" : "category",
        data: isVertical ? null : obj.company,
        axisTick: {
          alignWithLabel: true,
        },
        axisLabel: {
          fontSize: isVertical ? 10 : 8,
          fontWeight: "bold",
          position: "top",
          verticalAlign: "middle",
        },
      },
      series: [
        {
          data: valuesAndChartColumnColors,
          type: "bar",
          showBackground: true,
          backgroundStyle: {
            color: "rgba(180, 180, 180, 0.2)",
          },
          barWidth: "50%",
          barMaxWidth: valuesAndChartColumnColors.length <= 2 ? "25%" : "50%",
          itemStyle: chartType === 'Mês' ? {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#00b4d8",
              },
              {
                offset: 1,
                color: "#1767cd",
              },
            ]),
          } : null,
          emphasis: chartType === 'Mês' ? {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0.7,
                color: "#44C0C1",
              },
              {
                offset: 1,
                color: "#06B5D7",
              },
            ]),
          } : null
        },
      ],
    },
    small: {
      grid: {
        containLabel: true,
        width: isVertical ? "95%" : "90%",
        height: "90%",
        left: "3%",
        top: chartType === 'Mês' ? '8%' : "4%",
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "none",
        },
      },
      label: {
        show: true,
        align: "center",
        verticalAlign: "middle",
        margin: true,
        position: isVertical ? "top" : "right",
        fontWeight: "bold",
        fontSize: 8,
        color: "rgb(0, 0, 0)",
      },
      xAxis: {
        type: isVertical ? "category" : "value",
        data: isVertical ? obj.company : obj.quantity,
        axisLabel: {
          fontSize: 8,
          fontWeight: "bold",
        },
        axisTick: {
          alignWithLabel: true,
        },
        minInterval: 4000
      },
      yAxis: {
        tipo: isVertical ? "value" : "category",
        data: isVertical ? null : obj.company,
        axisTick: {
          alignWithLabel: true,
        },
        axisLabel: {
          fontSize: 8,
          fontWeight: "bold",
          position: "top",
          verticalAlign: "middle",
        },
        minInterval: 4000
      },
      series: [
        {
          data: valuesAndChartColumnColors,
          type: "bar",
          showBackground: true,
          backgroundStyle: {
            color: "rgba(180, 180, 180, 0.2)",
          },
          barWidth: "50%",
          barMaxWidth: valuesAndChartColumnColors.length <= 2 ? "25%" : "50%",
          itemStyle: chartType === 'Mês' ? {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#00b4d8",
              },
              {
                offset: 1,
                color: "#1767cd",
              },
            ]),
          } : null,
          emphasis: chartType === 'Mês' ? {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0.7,
                color: "#44C0C1",
              },
              {
                offset: 1,
                color: "#06B5D7",
              },
            ]),
          } : null
        },
      ],
    },
    big: {
      grid: {
        containLabel: true,
        width: isVertical ? "92%" : "90%",
        height: "90%",
        left: "3%",
        top: chartType === 'Mês' ? '8%' : "4%",
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "none",
        },
      },
      label: {
        show: true,
        position: isVertical ? "top" : "right",
        color: "rgb(0, 0, 0)",
        fontWeight: 'bold'
      },
      xAxis: {
        type: isVertical ? "category" : "value",
        data: isVertical ? obj.company : obj.quantity,
        axisLabel: {
          fontSize: 12,
          fontWeight: "bold",
        },
        axisTick: {
          alignWithLabel: true,
        },
      },
      yAxis: {
        tipo: isVertical ? "value" : "category",
        data: isVertical ? null : obj.company,
        axisTick: {
          alignWithLabel: true,
        },
        axisLabel: {
          fontSize: isVertical ? 12 : 10,
          fontWeight: "bold",
          position: "top",
          verticalAlign: "middle",
        },
      },
      series: [
        {
          data: valuesAndChartColumnColors,
          type: "bar",
          showBackground: true,
          backgroundStyle: {
            color: "rgba(180, 180, 180, 0.3)",
          },
          barWidth: "50%",
          barMaxWidth: valuesAndChartColumnColors.length <= 2 ? "25%" : "50%",
          itemStyle: chartType === 'Mês' ? {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#00b4d8",
              },
              {
                offset: 1,
                color: "#1767cd",
              },
            ]),
          } : null,
          emphasis: chartType === 'Mês' ? {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0.7,
                color: "#44C0C1",
              },
              {
                offset: 1,
                color: "#06B5D7",
              },
            ]),
          } : null
        },
      ],
    }
  })
}

export { returnChartConfig } 