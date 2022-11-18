import echarts from "echarts";
import ReactEcharts from "echarts-for-react";

import { ChartsHeader } from "../chartsHeader";

import * as Styled from './styled'

import MA from './map_MA.json'
echarts.registerMap("maranhao", MA);

export const MapMaranhao = ({ dataToMap }) => {
  const array_data_counties_to_object = dataToMap.map(data => {
    let municipality = ''

    if(typeof data[0] === 'string') {
      /* para que o mapa seja criado corretamente, é necessário que os nomes de municípios sejam iguais aos do arquivo map_MA.json, e o forEach é responsável por tratar os nomes vindos da api(que estão todos em upperCase) e iguala aos nomes do arquivo, portanto, cuidado ao mexer. */
      const treated_municipality_name = data[0].split(' ')
      treated_municipality_name.forEach((municipality_name, index) => {
        if(municipality_name[0] == "DA" || municipality_name == "DAS" || municipality_name == "DO" || municipality_name == "DOS" || municipality_name == "DE") {
          municipality += `${municipality_name.toLowerCase()} `
         } else {
          municipality += `${municipality_name[0]}${municipality_name.slice(1).toLowerCase()}${index === treated_municipality_name.length-1? '' : ' '}`
        }
      })
   
      return ({
        name: municipality,
        value: data[1]
      })
    }
  })

  const option = {
    responsive: true,
    maintainAspectRatio: false,
    tooltip: {
      trigger: "item",
      showDelay: 0,
      transitionDuration: 0.2
    },
    visualMap: {
      orient: 'horizontal',
      right: 'center',
      min: 100,
      max: 18000,
      inRange: {
        color: ["#dee0e0", "#0077b6", "#0077b6"]
      },
      text: ["High", "Low"],
      calculable: true
    },
    series: [
      {
        name: "Empresas Abertas",
        type: "map",
        roam: true,
        map: "maranhao",
        emphasis: {
          label: {
            show: true
          }
        },
        data: array_data_counties_to_object
      }
    ]
  }

  const onEvents = {
    click: (params) => {
      const { seriesIndex } = params;
      if (seriesIndex === 0) return;
    }
  }

  return (
    <Styled.Container>
      <ChartsHeader chartData={dataToMap} chartType='Municipio' textToHeader="Mapa de Abertura Por Município"  />
      <ReactEcharts 
        option={option} 
        onEvents={onEvents}
        style={{
          height: '90%',
          width: '100%',
        }}
      />
    </Styled.Container>
  )
}