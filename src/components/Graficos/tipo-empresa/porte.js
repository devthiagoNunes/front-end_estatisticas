import React, { useContext, useEffect, useState } from "react";
import Echarts from "echarts-for-react";

import { getAbertas, getDataEmpresasAtivas } from '../../../services/pinot'
import { ContextGlobal } from '../../../contexts/GlobalContext/context';
import "./style.css";

export default () => {
  const context = useContext(ContextGlobal)

  const [dataPorte, setDataPorte] = useState([]);
  const [porte, setPorte] = useState({
    classificacao: "Porte",
    empresas: [],
    quantidade: []
  });

  useEffect(() => {
    const fetchPorte = async () => {
      const response = await getAbertas('porte');
      setDataPorte(response);
    }
    fetchPorte()
  }, []);

  useEffect(() => {
    if(dataPorte !== undefined){
      const obj = {classificacao: "Porte", empresas: [], quantidade: []}
      dataPorte.forEach(element => {
        obj.empresas.push(element[0]);
        obj.quantidade.push(element[1]);
      });
      setPorte(obj);
    }  
  }, [dataPorte]);

  useEffect(() => {
    const fetchPorte = async () => {
      switch (context.state.empresasAbertas) {
        case false:
          const empmresas_ativas_porte = await getDataEmpresasAtivas('porte', context);
          setDataPorte(empmresas_ativas_porte.resultTable.rows)
          break;
      
        default:
          const response = await getAbertas('porte', context);
          setDataPorte(response);
          break;
      }
    }
    fetchPorte()
  }, [context]);;

  let datas = [];
  const colors = [
    "#748cab",
    "#124559",
    "#1d2d44",
    "#0d1321"
  ]

  for (let i = 0; i < porte.quantidade.length; i++) {
    datas.push({
      value: porte.quantidade[i],
      itemStyle: { color: colors[i] },
    });
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
        barMaxWidth: datas.length <= 2 ? "15%" : "35%"
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
      data: porte.empresas,
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
        barMaxWidth: datas.length <= 2 ? "15%" : "35%"
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
      oorient: "vertical",
      left: "right",
      top: '-2.5rem',
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
      data: porte.empresas,
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
        barMaxWidth: datas.length <= 2 ? "15%" : "35%"
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
        barMaxWidth: datas.length <= 2 ? "15%" : "35%"
      },
    ],
  };

  return (
    <div
      className="grafico setor">
      <p>{`Empresas ${context.state.empresasAbertas ? 'Abertas' : 'Ativas'} Por Porte`}</p>

      {window.innerWidth >= 320 && window.innerWidth < 768 && (
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

      {window.innerWidth > 1366 && (
        <Echarts
          option={config4}
          style={{
            height: "45vh",
            width: "50vw",
          }}
          opts={{ renderer: "canvas" }}
        />
      )}
    </div>
  );
};
