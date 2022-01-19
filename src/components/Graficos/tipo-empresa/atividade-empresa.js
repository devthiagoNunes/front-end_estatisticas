import React, { useContext, useEffect, useState } from "react"
import Echarts from "echarts-for-react"
import { ContextGlobal } from '../../../contexts/GlobalContext/context'
import { getDataEmpresasAtivas } from '../../../services/pinot'
import './style.css'

export default () => {

  const context = useContext(ContextGlobal)
  const [atividade, setAtividade] = useState({
    classificacao: "Atividade", empresas: [], quantidade: []
  })

  useEffect(() => {
    const get_ativas_secao_atividade = async () => {
      switch (context.state.empresasAbertas) {
        case false:
          const obj = {classificacao: "Atividade", empresas: [], quantidade: []}
          const quantidade_ativas =  await getDataEmpresasAtivas('secao_atividade', context)
          quantidade_ativas.resultTable.rows.forEach(element => {
            // obj.empresas.push(element[0].length > 30 ? element[0].substring(0, 30) : element[0])
            obj.empresas.push(element[0])
            obj.quantidade.push(element[1])
          });
          setAtividade(obj);
          return
      }
    }

    get_ativas_secao_atividade()
  }, [context])

  let datas = [];
  const colors = [
    "#00b4d8",
    "#121708",
    "green",
    "orange",
    "#23f4d8",
    "blue",
    "black",
  ]
  for (let i = 0; i < atividade.quantidade.length; i++) {
    datas.push({
      value: atividade.quantidade[i],
      itemStyle: { color: colors[i] },
    })
  }

  const config1 = {
    grid: {
      containLabel: true,
      width: "92%",
      height: "86%",
      left: "2%",
      top: "8%",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "none",
      },
    },
    label: {
      show: true,
      position: atividade.quantidade.length > 7 ? "right" : "top",
      color: "rgb(0, 0, 0)",
    },
    xAxis: {
      type: atividade.quantidade.length > 7 ? "value" : "category",
      data: atividade.quantidade.length > 7 ? null : atividade.empresas,
      axisTick: {
        alignWithLabel: true,
      },
      axisLabel: {
        fontSize: atividade.quantidade.length > 7 ? 10 : 10,
        fontWeight: atividade.quantidade.length > 7 ? "normal" : "bold",
        rotate:
          window.innerWidth <= 1115 && atividade.quantidade.length > 7 ? 30 : 0,
      },
    },
    toolbox: {
      show: true,
      orient: "horizontal",
      left: "right",
      itemSize: 15,
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
    yAxis: {
      tipo: atividade.quantidade.length > 7 ? "category" : "value",
      data: atividade.quantidade.length > 7 ? atividade.empresas : null,
      axisLabel: {
        fontSize: 12,
        fontWeight: atividade.quantidade.length > 7 ? "normal" : "bold",
      },
      axisTick: {
        alignWithLabel: atividade.quantidade.length > 7 ? true : null,
      },
    },
    series: [
      {
        data: datas,
        type: "bar",
        showBackground: true,
        backgroundStyle: {
          color: "rgba(180, 180, 180, 0.2)",
        },
        barWidth: atividade.quantidade.length > 7 ? "20%" : "35%",
      },
    ],
  };

  const config2 = {
    grid: {
      containLabel: true,
      width: "90%",
      height: "88%",
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
      itemSize: 13,
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
      position: "top",
      verticalAlign: "middle",
      rotate: 0,
      fontSize: 10,
      fontWeight: "normal",
      color: "rgb(0, 0, 0)",
    },
    xAxis: {
      type: "category",
      show: true,
      data: atividade.empresas,
      axisTick: {
        alignWithLabel: true,
      },
      zlevel: 5,
      axisLabel: {
        fontWeight: "bold",
        fontSize: 10,
      },
    },
    yAxis: {
      tipo: "value",
      axisLabel: {
        fontSize: 9,
        fontWeight: "bold",
      },
    },
    series: [
      {
        data: datas,
        type: "bar",
        showBackground: true,
        backgroundStyle: {
          color: "rgba(180, 180, 180, 0.2)",
        },
        barWidth: "35%",
      },
    ],
  };

  const config3 = {
    grid: {
      containLabel: true,
      width: "92%",
      height: "85%",
      top: "9%",
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
      itemSize: 13,
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
      position: "top",
      fontWeight: "normal",
      fontSize: 10,
      color: "rgb(0, 0, 0)",
    },
    xAxis: {
      type: "category",
      data: atividade.empresas,
      zlevel: 5,
      axisTick: {
        alignWithLabel: true,
      },
      axisLabel: {
        fontWeight: "bold",
        fontSize: 9,
      },
    },
    yAxis: {
      type: "value",
      axisLabel: {
        fontSize: 8,
        fontWeight: "bold",
      },
    },
    series: [
      {
        data: datas,
        type: "bar",
        showBackground: true,
        backgroundStyle: {
          color: "rgba(180, 180, 180, 0.2)",
        },
        barWidth: "45%",
      },
    ],
  };

  const config4 = {
    grid: {
      containLabel: true,
      height: "98%",
      width: '90%',
      top: "2%",
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
      itemSize: 17,
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
      position: "right",
      color: "rgb(0, 0, 0)",
    },
    xAxis: {
      type: "value",
      data: atividade.quantidade,
      axisTick: {
        alignWithLabel: true,
        show: false,
      },
      axisLabel: {
        fontSize: 10,
        fontWeight: "bold",
      },
    },
    yAxis: {
      tipo: "category",
      data: atividade.empresas,
      axisLabel: {
        fontSize: atividade.quantidade.length > 7 ? 9 : 12,
        fontWeight: "bold",
        position: "top",
        verticalAlign: "middle",
      },
    },
    series: [
      {
        data: datas,
        type: "bar",
        showBackground: true,
        backgroundStyle: {
          color: "rgba(180, 180, 180, 0.3)",
        },
        barWidth: "45%",
      },
    ],
  };

  return (
    <div
      className="grafico setor" style={{
        overflowX: "scroll",
        overflowY: "scroll",
      }}>
      <p>{`Empresas ${context.state.empresasAbertas ? 'Abertas' : 'Ativas'} Por atividade`}</p>

      {window.innerWidth >= 425 && window.innerWidth < 768 && (
        <Echarts
          option={config3}
          style={{
            width: "70vw",
          }}
          opts={{ renderer: "canvas" }}
        />
      )}

      {window.innerWidth >= 768 && window.innerWidth <= 1024 && (
        <Echarts
          option={config2}
          style={{
            width: "45vw",
            height: "45vh"
          }}
          opts={{ renderer: "canvas" }}
        />
      )}

      {window.innerWidth > 1024 && window.innerWidth <= 1366 && (
        <Echarts
          option={config1}
          style={{
            width: '50vw',
          }}
          opts={{ renderer: "canvas" }}
        />
      )}

      {window.innerWidth > 1366 && (
        <Echarts
          option={config4}
          style={{
            height: "80vh",
            width: "60vw",
          }}
          opts={{ renderer: "canvas" }}
        />
      )}
    </div>
  )
}