import React, { useContext, useEffect, useState } from "react";
import Echarts from "echarts-for-react";

import { getAbertas } from '../../../services/pinot'
import { ContextGlobal } from '../../../contexts/GlobalContext/context';
import "./style.css";

export default () => {

  const [dataPorte, setDataPorte] = useState([]);
  const [porte, setPorte] = useState({
    classificacao: "Setor",
    empresas: [],
    quantidade: []
  });

    useEffect(() => {
    const fetchPorte = async () => {
      var response = await getAbertas('setor', '2021');
      setDataPorte(response);
      }
    fetchPorte()
    }, []);

  useEffect(() => {
    if(dataPorte !== undefined){
      const obj = {classificacao: "Setor", empresas: [], quantidade: []}
      dataPorte.forEach(element => {
        obj.empresas.push(element[0]);
        obj.quantidade.push(element[1]);
      });
      setPorte(obj);
    }  
  }, [dataPorte]);

  const context = useContext(ContextGlobal)

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
  
  for (let i = 0; i < porte.quantidade.length; i++) {
    datas.push({
      value: porte.quantidade[i],
      itemStyle: { color: colors[i] },
    });
  }

   const config1 = {
    grid: {
      containLabel: true,
      width: porte.quantidade.length > 7 ? "52%" : "95%",
      height: "88%",
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
      position: porte.quantidade.length > 7 ? "right" : "top",
      color: "rgb(0, 0, 0)",
    },
    xAxis: {
      type: porte.quantidade.length > 7 ? "value" : "category",
      data: porte.quantidade.length > 7 ? null : porte.empresas,
      axisTick: {
        alignWithLabel: true,
      },
      axisLabel: {
        fontSize: porte.quantidade.length > 7 ? 10 : 10,
        fontWeight: porte.quantidade.length > 7 ? "normal" : "bold",
        rotate:
          window.innerWidth <= 1115 && porte.quantidade.length > 7 ? 30 : 0,
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
      tipo: porte.quantidade.length > 7 ? "category" : "value",
      data: porte.quantidade.length > 7 ? porte.empresas : null,
      axisLabel: {
        fontSize: 12,
        fontWeight: porte.quantidade.length > 7 ? "normal" : "bold",
      },
      axisTick: {
        alignWithLabel: porte.quantidade.length > 7 ? true : null,
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
        barWidth: porte.quantidade.length > 7 ? "20%" : "35%",
      },
    ],
  };

  const config2 = {
    grid: {
      containLabel: true,
      width: "90%",
      height: porte.quantidade.length > 7 ? "80%" : "88%",
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
      position: porte.quantidade.length > 7 ? "bottom" : "top",
      verticalAlign: "middle",
      rotate: 0,
      offset: porte.quantidade.length > 12 ? [0, 10] : null,
      fontSize: porte.quantidade.length > 7 ? 10 : 12,
      fontWeight: porte.quantidade.length > 12 ? "bold" : "normal",
      color: "rgb(0, 0, 0)",
    },
    xAxis: {
      type: "category",
      show: true,
      data: porte.empresas,
      axisTick: {
        alignWithLabel: true,
      },
      zlevel: 5,
      axisLabel: {
        fontSize: porte.quantidade.length > 7 ? 7 : 8,
        fontWeight: "bold",
        rotate: porte.quantidade.length > 7 ? 90 : 0,
        inside: porte.quantidade.length > 7 ? true : false,
        fontSize: 9,
      },
    },
    yAxis: {
      tipo: "value",
      axisLabel: {
        fontSize: porte.quantidade.length > 7 ? 8 : 10,
        fontWeight: "bold",
      },
      axisTick: {
        alignWithLabel: porte.quantidade.length > 7 ? true : null,
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
        barWidth: porte.quantidade.length > 7 ? "35%" : "25%",
      },
    ],
  };

  const config3 = {
    grid: {
      containLabel: true,
      width: "92%",
      height: porte.quantidade.length > 7 ? "73%" : "85%",
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
      align: porte.quantidade.length > 7 ? "center" : "center",
      verticalAlign: "middle",
      margin: true,
      position: porte.quantidade.length > 7 ? "bottom" : "top",
      rotate: porte.quantidade.length > 7 ? 0 : 0,
      offset: porte.quantidade.length > 7 ? [0, 8] : null,
      fontWeight: porte.quantidade.length > 7 ? "bold" : "normal",
      fontSize: porte.quantidade.length > 7 ? 9 : 10,
      color: "rgb(0, 0, 0)",
    },
    xAxis: {
      type: "category",
      data: porte.empresas,
      zlevel: 5,
      axisLabel: {
        fontSize: porte.quantidade.length > 7 ? 6 : 8,
        fontWeight: "bold",
        rotate: porte.quantidade.length > 7 ? 90 : 0,
        inside: porte.quantidade.length > 7 ? true : false,
        fontSize: 7,
      },
      axisTick: {
        alignWithLabel: porte.quantidade.length > 7 ? true : true,
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
            width: porte.quantidade.length > 6 ? "145vw" : "90vw",
          }}
          opts={{ renderer: "canvas" }}
        />
      )}

      {window.innerWidth > 768 && window.innerWidth <= 1024 && (
        <Echarts
          option={config2}
          style={{
            width: porte.quantidade.length > 6 ? "100vw" : "65vw",
            height: porte.quantidade.length > 7 ? "40vh" : "45vh"
          }}
          opts={{ renderer: "canvas" }}
        />
      )}

      {window.innerWidth > 1024 && window.innerWidth <= 1366 && (
        <Echarts
          option={config1}
          style={{
            width: porte.quantidade.length > 6 ? "90vw" : "55vw",
          }}
          opts={{ renderer: "canvas" }}
        />
      )}

      {window.innerWidth > 1366 && (
        <Echarts
          option={config4}
          style={{
            height: porte.quantidade.length > 7 ? "90vh" : "60vh",
            width: porte.quantidade.length > 7 ? "60vw" : "60vw",
          }}
          opts={{ renderer: "canvas" }}
        />
      )}
    </div>
  );
};
