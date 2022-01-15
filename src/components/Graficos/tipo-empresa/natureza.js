import React, { useContext, useEffect, useState } from "react";
import Echarts from "echarts-for-react";

import { getAbertas, getDataEmpresasAtivas } from '../../../services/pinot'
import { ContextGlobal } from '../../../contexts/GlobalContext/context';
import "./style.css";

export default () => {

  const [dataNatureza, setDataNatureza] = useState([]);
  const [natureza, setNatureza] = useState({
    classificacao: "natureza",
    empresas: [],
    quantidade: []
  });

  const context = useContext(ContextGlobal)

  useEffect(() => {
    const fetchNatureza = async () => {
      switch (context.state.empresasAbertas) {
        case false:
          const empmresas_ativas_natureza = await getDataEmpresasAtivas('natureza', context);
          setDataNatureza(empmresas_ativas_natureza.resultTable.rows)
          break;
      
        default:
          const response = await getAbertas('natureza', context);
          setDataNatureza(response);
          break;
      }
    }
    fetchNatureza()
  }, [context]);

  useEffect(() => {
    if(dataNatureza !== undefined){
      const obj = {classificacao: "Natureza", empresas: [], quantidade: []}
      dataNatureza.forEach(element => {
        obj.empresas.push(element[0]);
        obj.quantidade.push(element[1]);
      });
      setNatureza(obj);
    }  
  }, [dataNatureza]);

  let datas = [];
  const colors = [
    "#00b4d8",
    "red",
    "green",
    "orange",
    "#23f4d8",
    "#9b2226",
    "#84F2d4",
    '#e9d8a6',
    '#e56946',
    '#e5989b',
    '#480ca8',
    '#283618',
    '#6a040f',
    '#faa307',
    '#219ebc',
    '#343a40',
    '#fb5607',
    '#fb1580',
    '#db2607'
  ];
  for (let i = 0; i < natureza.quantidade.length; i++) {
    datas.push({
      value: natureza.quantidade[i],
      itemStyle: { color: colors[i] },
    });
  }

   const config1 = {
    grid: {
      containLabel: true,
      width: "92%",
      height: "87%",
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
      position:  "bottom",
      color: "rgb(0, 0, 0)",
    },
    xAxis: {
      type: "category",
      data: natureza.empresas,
      axisTick: {
        alignWithLabel: true,
      },
      axisLabel: {
        fontSize: natureza.quantidade.length > 12 ? 12 : 11,
        fontWeight: "bold",
        inside: true,
        rotate: 90,
        height: 3
      },
      z: 2
    },
    toolbox: {
      show: true,
      orient: "horizontal",
      left: "95%",
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
      tipo: natureza.quantidade.length > 7 ? "category" : "value",
      data: natureza.quantidade.length > 7 ? natureza.empresas : null,
      axisLabel: {
        fontSize: 12,
        fontWeight: natureza.quantidade.length > 7 ? "normal" : "bold",
      },
      axisTick: {
        alignWithLabel: natureza.quantidade.length > 7 ? true : null,
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
        barWidth: natureza.quantidade.length <= 2 ? '15%' : "45%",
      },
    ],
  };

  const config2 = {
    grid: {
      containLabel: true,
      width: "90%",
      height: natureza.quantidade.length > 7 ? "80%" : "88%",
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
      itemSize: 14,
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
      position: natureza.quantidade.length > 7 ? "bottom" : "top",
      verticalAlign: "middle",
      rotate: 0,
      offset: natureza.quantidade.length > 12 ? [0, 10] : null,
      fontSize: natureza.quantidade.length > 7 ? 10 : 12,
      fontWeight: natureza.quantidade.length > 12 ? "bold" : "normal",
      color: "rgb(0, 0, 0)",
    },
    xAxis: {
      type: "category",
      show: true,
      data: natureza.empresas,
      axisTick: {
        alignWithLabel: true,
      },
      zlevel: 5,
      axisLabel: {
        fontSize: natureza.quantidade.length > 7 ? 7 : 8,
        fontWeight: "bold",
        rotate: natureza.quantidade.length > 7 ? 90 : 0,
        inside: natureza.quantidade.length > 7 ? true : false,
        fontSize: 9,
      },
    },
    yAxis: {
      tipo: "value",
      axisLabel: {
        fontSize: natureza.quantidade.length > 7 ? 8 : 10,
        fontWeight: "bold",
      },
      axisTick: {
        alignWithLabel: natureza.quantidade.length > 7 ? true : null,
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
        barWidth: natureza.quantidade.length > 7 ? "35%" : "25%",
      },
    ],
  };

  const config3 = {
    grid: {
      containLabel: true,
      width: "92%",
      height: natureza.quantidade.length > 7 ? "73%" : "85%",
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
      align: natureza.quantidade.length > 7 ? "center" : "center",
      verticalAlign: "middle",
      margin: true,
      position: natureza.quantidade.length > 7 ? "bottom" : "top",
      rotate: natureza.quantidade.length > 7 ? 0 : 0,
      offset: natureza.quantidade.length > 7 ? [0, 8] : null,
      fontWeight: natureza.quantidade.length > 7 ? "bold" : "normal",
      fontSize: natureza.quantidade.length > 7 ? 9 : 10,
      color: "rgb(0, 0, 0)",
    },
    xAxis: {
      type: "category",
      data: natureza.empresas,
      zlevel: 5,
      axisLabel: {
        fontSize: natureza.quantidade.length > 7 ? 6 : 8,
        fontWeight: "bold",
        rotate: natureza.quantidade.length > 7 ? 90 : 0,
        inside: natureza.quantidade.length > 7 ? true : false,
        fontSize: 7,
      },
      axisTick: {
        alignWithLabel: natureza.quantidade.length > 7 ? true : true,
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
        barWidth: "35%",
      },
    ],
  };

  const config4 = {
    grid: {
      containLabel: true,
      height: natureza.quantidade.length > 7 ? "40%" : "88%",
      width: natureza.quantidade.length >= 7 ? "90%" : '90%',
      top: natureza.quantidade.length > 7 ? "2%" : "9%",
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
      position: "bottom",
      color: "rgb(0, 0, 0)",
    },
    xAxis: {
      type: "category",
      data: natureza.empresas,
      axisTick: {
        alignWithLabel: true,
        show: false,
      },
      axisLabel: {
        fontSize: natureza.quantidade.length > 12 ? 12 : 11,
        fontWeight: "bold",
        inside: true,
        rotate: 90,
      },
      z: 2
    },
    yAxis: {
      tipo: natureza.quantidade.length > 7 ? "category" : "value",
      data: natureza.quantidade.length > 7 ? natureza.empresas : null,
      axisLabel: {
        fontSize: natureza.quantidade.length > 7 ? 9 : 12,
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
      className="grafico natureza"
      style={{
        overflowX: "scroll",
        overflowY: "scroll",
      }}
    >
      <p>{`Empresas ${context.state.empresasAbertas ? 'Abertas' : 'Ativas'} Por natureza`}</p>

      {window.innerWidth >= 425 && window.innerWidth <= 768 && (
        <Echarts
          option={config3}
          style={{
            width: "145vw",
          }}
          opts={{ renderer: "canvas" }}
        />
      )}

      {window.innerWidth > 768 && window.innerWidth <= 1024 && (
        <Echarts
          option={config2}
          style={{
            width: natureza.quantidade.length > 6 ? "100vw" : "65vw",
            height: natureza.quantidade.length > 7 ? "40vh" : "45vh"
          }}
          opts={{ renderer: "canvas" }}
        />
      )}

      {window.innerWidth > 1024 && window.innerWidth <= 1366 && (
        <Echarts
          option={config1}
          style={{
            width: "90vw",
            height: "50vh",
          }}
          opts={{ renderer: "canvas" }}
        />
      )}

      {window.innerWidth > 1366 && (
        <Echarts
          option={config4}
          style={{
            height: natureza.quantidade.length > 7 ? "80vh" : "60vh",
            width: natureza.quantidade.length > 7 ? "60vw" : "60vw",
          }}
          opts={{ renderer: "canvas" }}
        />
      )}
    </div>
  );
};
