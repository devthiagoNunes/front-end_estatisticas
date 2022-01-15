import React, { useContext, useEffect, useState } from "react";
import Echarts from "echarts-for-react";

import { getAbertas, getDataEmpresasAtivas } from '../../../services/pinot'
import { ContextGlobal } from '../../../contexts/GlobalContext/context';
import "./style.css";

export default () => {

  const context = useContext(ContextGlobal)

  const [dataSetor, setdataSetor] = useState([]);
  const [setor, setSetor] = useState({
    classificacao: "Setor",
    empresas: [],
    quantidade: []
  });
 
  useEffect(() => {
    if(dataSetor !== undefined){
      const obj = {classificacao: "Setor", empresas: [], quantidade: []}
      dataSetor.forEach(element => {
        obj.empresas.push(element[0])
        obj.quantidade.push(element[1]);
      });
      setSetor(obj);
    }  
  }, [dataSetor]);

  useEffect(() => {
    const fetchsetor = async () => {
      switch (context.state.empresasAbertas) {
        case false:
          const empmresas_ativas_setor = await getDataEmpresasAtivas('setor', context);
          setdataSetor(empmresas_ativas_setor.resultTable.rows)
          break;
      
        default:
          const response = await getAbertas('setor', context);
          setdataSetor(response);
          break;
      }
    }
    fetchsetor()
  }, [context]);

  let datas = [];
  const colors = [
    "#00b4d8",
    "red",
    "green",
    "orange",
    "#23f4d8",
    "blue",
    "black",
  ];
  
  for (let i = 0; i < setor.quantidade.length; i++) {
    datas.push({
      value: setor.quantidade[i],
      itemStyle: { color: colors[i] },
    });
  }

   const config1 = {
    grid: {
      containLabel: true,
      width: "92%",
      height: "90%",
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
      position: "top",
      color: "rgb(0, 0, 0)",
    },
    xAxis: {
      type: "category",
      data: setor.quantidade.length > 7 ? null : setor.empresas,
      axisTick: {
        alignWithLabel: true,
      },
      axisLabel: {
        fontSize: setor.quantidade.length > 7 ? 10 : 10,
        fontWeight: setor.quantidade.length > 7 ? "normal" : "bold",
        rotate:
          window.innerWidth <= 1115 && setor.quantidade.length > 7 ? 30 : 0,
      },
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
      tipo: setor.quantidade.length > 7 ? "category" : "value",
      data: setor.quantidade.length > 7 ? setor.empresas : null,
      axisLabel: {
        fontSize: 12,
        fontWeight: setor.quantidade.length > 7 ? "normal" : "bold",
      },
      axisTick: {
        alignWithLabel: setor.quantidade.length > 7 ? true : null,
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
        barWidth: setor.quantidade.length > 7 ? "20%" : "35%",
      },
    ],
  };

  const config2 = {
    grid: {
      containLabel: true,
      width: "90%",
      height: setor.quantidade.length > 7 ? "80%" : "88%",
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
      position: setor.quantidade.length > 7 ? "bottom" : "top",
      verticalAlign: "middle",
      rotate: 0,
      offset: setor.quantidade.length > 12 ? [0, 10] : null,
      fontSize: setor.quantidade.length > 7 ? 10 : 12,
      fontWeight: setor.quantidade.length > 12 ? "bold" : "normal",
      color: "rgb(0, 0, 0)",
    },
    xAxis: {
      type: "category",
      show: true,
      data: setor.empresas,
      axisTick: {
        alignWithLabel: true,
      },
      zlevel: 5,
      axisLabel: {
        fontSize: setor.quantidade.length > 7 ? 7 : 8,
        fontWeight: "bold",
        rotate: setor.quantidade.length > 7 ? 90 : 0,
        inside: setor.quantidade.length > 7 ? true : false,
        fontSize: 9,
      },
    },
    yAxis: {
      tipo: "value",
      axisLabel: {
        fontSize: setor.quantidade.length > 7 ? 8 : 10,
        fontWeight: "bold",
      },
      axisTick: {
        alignWithLabel: setor.quantidade.length > 7 ? true : null,
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
        barWidth: setor.quantidade.length > 7 ? "35%" : "25%",
      },
    ],
  };

  const config3 = {
    grid: {
      containLabel: true,
      width: "92%",
      height: setor.quantidade.length > 7 ? "73%" : "85%",
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
      align: setor.quantidade.length > 7 ? "center" : "center",
      verticalAlign: "middle",
      margin: true,
      position: setor.quantidade.length > 7 ? "bottom" : "top",
      rotate: setor.quantidade.length > 7 ? 0 : 0,
      offset: setor.quantidade.length > 7 ? [0, 8] : null,
      fontWeight: setor.quantidade.length > 7 ? "bold" : "normal",
      fontSize: setor.quantidade.length > 7 ? 9 : 10,
      color: "rgb(0, 0, 0)",
    },
    xAxis: {
      type: "category",
      data: setor.empresas,
      zlevel: 5,
      axisLabel: {
        fontSize: setor.quantidade.length > 7 ? 6 : 8,
        fontWeight: "bold",
        rotate: setor.quantidade.length > 7 ? 90 : 0,
        inside: setor.quantidade.length > 7 ? true : false,
        fontSize: 7,
      },
      axisTick: {
        alignWithLabel: setor.quantidade.length > 7 ? true : true,
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
      height: setor.quantidade.length > 7 ? "96%" : "88%",
      width: setor.quantidade.length >= 7 ? "90%" : '90%',
      top: setor.quantidade.length > 7 ? "2%" : "9%",
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
      position: setor.quantidade.length > 7 ? "right" : "top",
      color: "rgb(0, 0, 0)",
    },
    xAxis: {
      type: setor.quantidade.length > 7 ? "value" : "category",
      data:
        setor.quantidade.length > 7
          ? setor.quantidade
          : setor.empresas,
      axisTick: {
        alignWithLabel: true,
        show: false,
      },
      axisLabel: {
        fontSize: setor.quantidade.length > 12 ? 12 : 11,
        fontWeight: "bold",
      },
    },
    yAxis: {
      tipo: setor.quantidade.length > 7 ? "category" : "value",
      data: setor.quantidade.length > 7 ? setor.empresas : null,
      axisLabel: {
        fontSize: setor.quantidade.length > 7 ? 9 : 12,
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
      className="grafico setor"
      style={{
        overflowX: "scroll",
        overflowY: "hidden",
      }}
    >
      <p>{`Empresas ${context.state.empresasAbertas ? 'Abertas' : 'Ativas'} Por Setor`}</p>

      {window.innerWidth >= 425 && window.innerWidth <= 768 && (
        <Echarts
          option={config3}
          style={{
            width: '80vw'
          }}
          opts={{ renderer: "canvas" }}
        />
      )}

      {window.innerWidth > 768 && window.innerWidth <= 1024 && (
        <Echarts
          option={config2}
          style={{
            width: setor.quantidade.length > 6 ? "100vw" : "65vw",
            height: setor.quantidade.length > 7 ? "40vh" : "45vh"
          }}
          opts={{ renderer: "canvas" }}
        />
      )}

      {window.innerWidth > 1024 && window.innerWidth <= 1366 && (
        <Echarts
          option={config1}
          style={{
            width: "90vw",
            height: "40vh"
          }}
          opts={{ renderer: "canvas" }}
        />
      )}

      {window.innerWidth > 1366 && (
        <Echarts
          option={config4}
          style={{
            height: setor.quantidade.length > 7 ? "90vh" : "60vh",
            width: setor.quantidade.length > 7 ? "60vw" : "60vw",
          }}
          opts={{ renderer: "canvas" }}
        />
      )}
    </div>
  );
};
