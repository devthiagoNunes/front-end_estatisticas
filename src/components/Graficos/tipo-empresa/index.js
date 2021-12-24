import React from "react"
import Echarts from 'echarts-for-react'
import './style.css'

export default ({tipo, categoria, classificacao}) => {
  let datas = []
  const colors = ['#00b4d8','red', 'green', 'orange', '#23f4d8', 'blue', 'black']
  for(let i = 0; i < categoria.quantidade.length; i++){
    datas.push(
      {value: categoria.quantidade[i], itemStyle: {color: colors[i]}},
    )
  }

  const config1 = {
    grid: {
      top:  categoria.quantidade.length > 7 ? '2%' : '8%',
      left: categoria.quantidade.length > 7 ? '18%' : '7%',
      right: '5%', 
      bottom: categoria.quantidade.length > 6 ? '12%' : '18%'
    },  
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'none'
      }
    },
    label: {
      show: true,
      position: categoria.quantidade.length > 7 ? 'right' : 'top',
      color: 'rgb(0, 0, 0)',
    },
    xAxis: {
      type: categoria.quantidade.length > 7 ? 'value' : 'category',
      data: categoria.quantidade.length > 7 ? null :  categoria.empresas,
      axisTick: {
        alignWithLabel: true
      },
      axisLabel:{
        fontSize: 10,
        fontWeight: 'bold'
      }
    },
    toolbox: {
      show: true,
      orient: 'horizontal',
      left: '95%',
      itemSize: 15,
      showTitle: true,
      feature: {
        type: 'png',
        saveAsImage: {
          show: true,
          title: 'Download',
          iconStyle: {
            borderWidth: 1.5
          }
        } 
      }
    },
    yAxis: {
      tipo: categoria.quantidade.length > 7 ? 'category' : 'value',
      data: categoria.quantidade.length > 7 ? categoria.empresas : null,
      axisLabel:{
        fontSize: 10,
        fontWeight: 'bold'
      },
      axisTick: {
        alignWithLabel: categoria.quantidade.length > 7 ? true : null
      }
    },
    series: [
      {
        data: datas,
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)'
        },
        barWidth: '35%'
      }
    ]
  }

  const config2 = {
    grid: {
      top: categoria.quantidade.length > 7 ? '6%' : '5%',
      left: categoria.quantidade.length > 12  ? '7%' : '8%',
      right: '5%', 
      bottom: categoria.quantidade.length > 6 ? '14%' : '18%' 
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'none'
      }
    },
    toolbox: {
      show: true,
      orient: 'horizontal',
      left: '95%',
      itemSize: 14,
      showTitle: true,
      feature: {
        type: 'png',
        saveAsImage: {
          show: true,
          title: 'Download',
          iconStyle: {
            borderWidth: 1.5
          }
        } 
      }
    },
    label: {
      show: true,
      align: 'center',
      position: categoria.quantidade.length > 7 ? 'bottom' : 'top',
      verticalAlign: 'middle',
      rotate:  0,
      offset: categoria.quantidade.length > 12 ? [0, 10] : null,
      fontSize: categoria.quantidade.length > 7 ? 10 : 12,
      fontWeight: categoria.quantidade.length > 12 ? 'bold' : 'normal',
      color: 'rgb(0, 0, 0)'
    },
    xAxis: {
      type: 'category',
      show: true,
      data: categoria.empresas,
      axisTick: {
        alignWithLabel: true
      },
      zlevel: 5,
      axisLabel:{
        fontSize: categoria.quantidade.length > 7 ? 7 : 8,
        fontWeight: 'bold',
        rotate:  categoria.quantidade.length > 7 ? 90 : 0,
        inside: categoria.quantidade.length > 7 ? true : false,
        fontSize: 9
      },
    },
    yAxis: {
      tipo: 'value',
      axisLabel:{
        fontSize: categoria.quantidade.length > 7  ? 9 : 10,
        fontWeight: 'bold'
      },
      axisTick: {
        alignWithLabel: categoria.quantidade.length > 7 ? true : null
      },
    },
    series: [{
      data: datas,
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)'
      },
      barWidth: '35%'
    }]
  }

  const config3 = {
    grid: {
      top: categoria.quantidade.length > 2 ? '6%' : '12%',
      left: categoria.quantidade.length > 7 ? '6%' : '7%',
      right: categoria.quantidade.length > 7 ? '5%' : null,
      bottom: categoria.quantidade.length > 7 ? '15%' : '20%',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'none'
      }
    },
    toolbox: {
      show: true,
      orient: 'horizontal',
      left: '96%',
      itemSize: 13,
      showTitle: true,
      feature: {
        type: 'png',
        saveAsImage: {
          show: true,
          title: 'Download',
          iconStyle: {
            borderWidth: 1.5
          }
        } 
      }
    },
    label: {
      show: true,
      align: categoria.quantidade.length > 7 ? 'center' : 'center',
      verticalAlign: 'middle',
      margin: true,
      position: categoria.quantidade.length > 7 ? 'bottom' : 'top',
      rotate:  categoria.quantidade.length > 7 ? 0 : 0,
      offset: categoria.quantidade.length > 7 ? [0, 8] : null,
      fontWeight: categoria.quantidade.length > 7 ? 'bold' : 'normal',
      fontSize: categoria.quantidade.length > 7 ? 9 : 10,
      color: 'rgb(0, 0, 0)'
    },
    xAxis: {
      type: 'category',
      data: categoria.empresas,
      zlevel: 5,
      axisLabel:{
        fontSize: categoria.quantidade.length > 7 ? 6 : 8,
        fontWeight: 'bold',
        rotate:  categoria.quantidade.length > 7 ? 90 : 0,
        inside: categoria.quantidade.length > 7 ? true : false,
        fontSize: 9
      },
      axisTick: {
        alignWithLabel: categoria.quantidade.length > 7 ? true : true
      },
    },
    yAxis: {
      type: 'value',
      axisLabel:{
        fontSize: 9,
        fontWeight: 'bold'
      },
    },
    series: [{
      data: datas,
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)'
      },
      barWidth: '35%'
    }]
  }

  const config4 = {
    grid:{
      top: categoria.quantidade.length > 7 ? '2%' : '9%',
      bottom: categoria.quantidade.length > 6 ? '12%' : '18%',
      left: categoria.quantidade.length > 7 ? '25%' : '7%',
      right: '5%'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'none'
      }
    },
    toolbox: {
      show: true,
      orient: 'horizontal',
      left: '95%',
      itemSize: 17,
      showTitle: true,
      feature: {
        type: 'png',
        saveAsImage: {
          show: true,
          title: 'Download',
          iconStyle: {
            borderWidth: 1.5
          }
        } 
      }
    },
    label: {
      show: true,
      position:  categoria.quantidade.length > 7 ? 'right' : 'top',
      color: 'rgb(0, 0, 0)'
    },
    xAxis: {
      type: categoria.quantidade.length > 7 ? 'value' : 'category',
      data:  categoria.quantidade.length > 7 ? categoria.quantidade : categoria.empresas,
      axisTick: {
        alignWithLabel: true,
        show: false
      },
      axisLabel:{
        fontSize: categoria.quantidade.length > 12 ? 12 : 11,
        fontWeight: 'bold'
      }
    },
    yAxis: {
      tipo: categoria.quantidade.length > 7 ? 'category' : 'value',
      data: categoria.quantidade.length > 7 ? categoria.empresas : null,
      axisLabel:{
        fontSize: categoria.quantidade.length > 7 ? 9 : 12,
        fontWeight: 'bold',
        position: 'top',
        verticalAlign: 'middle',
      },
    },
    series: [{
      data: datas,
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.3)'
      },
      barWidth: '35%'
    }]
  }

  return(
    <div className="grafico setor">
      <p>{`Empresas ${tipo} Por ${classificacao}`}</p>
      
      {window.innerWidth >= 425 && window.innerWidth < 768 && <Echarts option={config3} style={{height:  categoria.quantidade.length > 7 ? '40vh' : '35vh', width: categoria.quantidade.length > 6 ? '210vw' : '120vw'}} opts={{renderer: 'svg'}}/>}
      
      {window.innerWidth >= 768 && window.innerWidth < 1024 && <Echarts option={config2} style={{height:  categoria.quantidade.length > 7 ? '50vh' : "40vh", width: categoria.quantidade.length > 6 ? "110vw" : "85vw"}} opts={{renderer: 'svg'}}/>}
      
      {window.innerWidth >= 1024 && window.innerWidth <= 1366 && <Echarts option={config1} style={{height: categoria.quantidade.length > 7 ? '120vh' : "55vh", width: categoria.quantidade.length > 6 ? '90vw' : "60vw"}} opts={{renderer: 'svg'}}/>}
      
      {window.innerWidth > 1366 && <Echarts option={config4} style={{height: categoria.quantidade.length > 7 ? '80vh' : "45vh",
        width: categoria.quantidade.length > 6 ? '70vw' : "60vw"}} opts={{renderer: 'svg'}}/>}
    </div>
  )
}