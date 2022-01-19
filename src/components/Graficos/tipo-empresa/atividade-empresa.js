import React, { useContext, useEffect, useState } from "react"
import { ContextGlobal } from '../../../contexts/GlobalContext/context'
import { getDataEmpresasAtivas, getAbertas } from '../../../services/pinot'
import './style.css'

export default () => {

  const context = useContext(ContextGlobal)
  const [atividade, setAtividade] = useState([])

  useEffect(() => {
    const get_abertura_ano = async () => {
      switch (context.state.empresasAbertas) {
        case false:
          const quantidade_ativas =  await getDataEmpresasAtivas('secao_atividade', context)
          setAtividade(quantidade_ativas.resultTable.rows)
          return
      }
    }

  const config4 = {
    grid: {
      containLabel: true,
      height: porte.quantidade.length > 7 ? "96%" : "88%",
      width: porte.quantidade.length >= 7 ? "90%" : '90%',
      top: porte.quantidade.length > 7 ? "2%" : "9%",
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
      position: porte.quantidade.length > 7 ? "right" : "top",
      color: "rgb(0, 0, 0)",
    },
    xAxis: {
      type: porte.quantidade.length > 7 ? "value" : "category",
      data:
        porte.quantidade.length > 7
          ? porte.quantidade
          : porte.empresas,
      axisTick: {
        alignWithLabel: true,
        show: false,
      },
      axisLabel: {
        fontSize: porte.quantidade.length > 12 ? 12 : 11,
        fontWeight: "bold",
      },
    },
    yAxis: {
      tipo: porte.quantidade.length > 7 ? "category" : "value",
      data: porte.quantidade.length > 7 ? porte.empresas : null,
      axisLabel: {
        fontSize: porte.quantidade.length > 7 ? 9 : 12,
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
        barWidth: "35%",
      },
    ],
  };

  return (
    <div
      className="grafico setor">
      <p>{`Empresas Ativas Por Atividade`}</p>

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
            width: "50vw",
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

  return(
    <div className="content-natureza" style={{
      marginBottom: context.state.empresasAbertas !== true ? 0 : null,
      height: context.state.empresasAbertas == true ? '50vh' : '51vh',
      marginTop: '1rem'
    }}>
      <div className="content-dataNatureza" style={{
        overflowX: context.state.empresasAbertas !== true ? 'hidden' : 'hidden',
      }}>
        <p>{`Empresas Ativas Por Atividade `}</p>
        <div className="content-table-natureza">
          <div className="tabelas-natureza">
            <table>
              <thead>
                <tr>
                  <th style={{
                    textAlign: 'center'
                  }}>Atividade da Empersa</th>
                  <th style={{
                    textAlign: 'center'
                  }}>Quantidade</th>
                </tr>
              </thead>
              {atividade.map((atividade, index) => (
                <tbody>
                  <tr key={index}>
                    <td style={{
                      textAlign: "left",
                      borderRight: '1px solid black'
                    }}>{atividade[0]}</td>
                    <td style={{
                      textAlign: 'center'
                    }}>{atividade[1]}</td>
                  </tr> 
                </tbody>
              ))}
              </table>
          </div>
        </div>
      </div>
    </div>
  )
}