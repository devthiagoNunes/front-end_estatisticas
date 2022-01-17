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
      width: "95%",
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
      left: "97%",
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
      position:  "top",
      verticalAlign: "middle",
      fontSize: 12,
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
        fontWeight: "bold",
        fontSize: 9,
      },
    },
    yAxis: {
      tipo: "value",
      axisLabel: {
        fontSize: setor.quantidade.length > 7 ? 8 : 10,
        fontWeight: "bold",
      }
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
      width: "95%",
      height: "85%",
      top: "9%",
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
      position: "top",
      fontWeight: "normal",
      fontSize: 10,
      color: "rgb(0, 0, 0)",
    },
    xAxis: {
      type: "category",
      data: setor.empresas,
      zlevel: 5,
      axisLabel: {
        fontWeight: "bold",
        fontSize: 7,
      },
      axisTick: {
        alignWithLabel: true,
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
        barWidth: "30%",
      },
    ],
  };

  const config4 = {
    grid: {
      containLabel: true,
      height: setor.quantidade.length > 7 ? "96%" : "88%",
      width: "92%",
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
      left: "96%",
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

      {window.innerWidth >= 425 && window.innerWidth < 768 && (
        <Echarts
          option={config3}
          style={{
            width: '210vw'
          }}
          opts={{ renderer: "canvas" }}
        />
      )}

      {window.innerWidth >= 768 && window.innerWidth <= 1024 && (
        <Echarts
          option={config2}
          style={{
            width: "140vw",
            height: "45vh"
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
            height: "45vh",
            width: "100vw",
          }}
          opts={{ renderer: "canvas" }}
        />
      )}
    </div>
  );
};
