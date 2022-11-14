type ReturnChartConfigProps = {
  isVertical?: boolean
  objectData: (string | number)[][]
}

type DatasOfChart = {
  value: number
  itemStyle: { color: string },
} []

const returnChartConfig = ({ objectData, isVertical = true }: ReturnChartConfigProps) => {
  const obj = {company: [], quantity: []}

  objectData.forEach(element => {
    if(typeof element[0] === 'string' && element[0].length > 20) {
      obj.company.push(element[0].replace(' ', '\n'))  
    } else {
      obj.company.push(element[0])
    }
    
    obj.quantity.push(element[1]);
  })
  let datasOfChart: DatasOfChart = []

  const colors = [
    "#48cae4",
    "#00b4d8",
    "#0096c7",
    "#0077b6",
    "#90e0ef",
    "#5c677d",
  ];

  for (let i = 0; i < obj.company.length; i++) {
    datasOfChart.push({
      value: obj.quantity[i],
      itemStyle: { color: colors[i] },
    });
  }

  return ({
    normal: {
      grid: {
        containLabel: true,
        width: "90%",
        height: "90%",
        left: "3%",
        top: "4%",
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "none",
        },
      },
      toolbox: {
        show: true,
        orient: "horizontal",
        left: "right",
        itemSize: 12,
        showTitle: true,
        feature: {
          type: "png",
          saveAsImage: {
            show: true,
            title: "Download",
            iconStyle: {
              borderWidth: 1.5,
            },
          },
        },
      },
      label: {
        show: true,
        position: isVertical ? "top" : "right",
        fontWeight: 'bold',
        color: "rgb(0, 0, 0)",
      },
      xAxis: {
        type: isVertical ? "category" : "value",
        data: isVertical ? obj.company : obj.quantity,
        axisLabel: {
          fontSize: 12,
          fontWeight: "bold",
        },
      },
      yAxis: {
        tipo: isVertical ? "value" : "category",
        data: isVertical ? null : obj.company,
        axisTick: {
          alignWithLabel: true,
        },
        axisLabel: {
          fontSize: 12,
          fontWeight: "bold",
          position: "top",
          verticalAlign: "middle",
        },
      },
      series: [
        {
          data: datasOfChart,
          type: "bar",
          showBackground: true,
          backgroundStyle: {
            color: "rgba(180, 180, 180, 0.2)",
          },
          barWidth: "35%",
          barMaxWidth: datasOfChart.length <= 2 ? "25%" : "50%",
        },
      ],
    },  
    large: {
      grid: {
        containLabel: true,
        width: "93%",
        height: "88%",
        top: "6%",
        left: "1%",
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "none",
        },
      },
      toolbox: {
        show: true,
        orient: "horizontal",
        left: "90%",
        itemSize: 12,
        showTitle: true,
        feature: {
          type: "png",
          saveAsImage: {
            show: true,
            title: "Download",
            iconStyle: {
              borderWidth: 1.5,
            },
          },
        },
      },
      label: {
        show: true,
        align: "center",
        position: isVertical ? "top" : "right",
        verticalAlign: "middle",
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
          rotate: 15
        },
      },
      yAxis: {
        tipo: isVertical ? "value" : "category",
        data: isVertical ? null : obj.company,
        axisTick: {
          alignWithLabel: true,
        },
        axisLabel: {
          fontSize: 10,
          fontWeight: "bold",
          position: "top",
          verticalAlign: "middle",
        },
      },
      series: [
        {
          data: datasOfChart,
          type: "bar",
          showBackground: true,
          backgroundStyle: {
            color: "rgba(180, 180, 180, 0.2)",
          },
          barWidth: "50%",
          barMaxWidth: datasOfChart.length <= 2 ? "25%" : "50%",
        },
      ],
    },
    small: {
      grid: {
        containLabel: true,
        width: "90%",
        height: "85%",
        top: "8%",
        left: "3%",
        right: "5%"
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "none",
        },
      },
      toolbox: {
        show: true,
        orient: "vertical",
        left: "right",
        top: '-3rem',
        itemSize: 12,
        showTitle: true,
        feature: {
          type: "png",
          saveAsImage: {
            show: true,
            title: "Download",
            iconStyle: {
              borderWidth: 1.5,
            },
          },
        },
      },
      label: {
        show: true,
        align: "center",
        verticalAlign: "middle",
        margin: true,
        position: isVertical ? "top" : "right",
        fontWeight: "normal",
        fontSize: 10,
        color: "rgb(0, 0, 0)",
      },
      xAxis: {
        type: isVertical ? "category" : "value",
        data: isVertical ? obj.company : obj.quantity,
        axisLabel: {
          fontSize: 12,
          fontWeight: "bold",
          },
      },
      yAxis: {
        tipo: isVertical ? "value" : "category",
        data: isVertical ? null : obj.company,
        axisTick: {
          alignWithLabel: true,
        },
        axisLabel: {
          fontSize: 12,
          fontWeight: "bold",
          position: "top",
          verticalAlign: "middle",
        },
      },
      minInterval: 10000,
      series: [
        {
          data: datasOfChart,
          type: "bar",
          showBackground: true,
          backgroundStyle: {
            color: "rgba(180, 180, 180, 0.2)",
          },
          barWidth: "50%",
          barMaxWidth: datasOfChart.length <= 2 ? "25%" : "50%",
        },
      ],
    },
    big: {
      grid: {
        containLabel: true,
        height: "92%",
        width: "90%",
        top: "6%",
        left: "3%",
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "none",
        },
      },
      toolbox: {
        show: true,
        orient: "horizontal",
        left: "right",
        itemSize: 12,
        showTitle: true,
        feature: {
          type: "png",
          saveAsImage: {
            show: true,
            title: "Download",
            iconStyle: {
              borderWidth: 1.5,
            },
          },
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
      },
      yAxis: {
        tipo: isVertical ? "value" : "category",
        data: isVertical ? null : obj.company,
        axisTick: {
          alignWithLabel: true,
        },
        axisLabel: {
          fontSize: 12,
          fontWeight: "bold",
          position: "top",
          verticalAlign: "middle",
        },
      },
      series: [
        {
          data: datasOfChart,
          type: "bar",
          showBackground: true,
          backgroundStyle: {
            color: "rgba(180, 180, 180, 0.3)",
          },
          barWidth: "50%",
          barMaxWidth: datasOfChart.length <= 2 ? "25%" : "50%",
        },
      ],
    }
  })
}

export { returnChartConfig } 