import React, { useContext, useEffect, useState } from "react";
import Echarts from "echarts-for-react";
import echarts from "echarts";
import { getAbertasMes } from '../../../services/pinot'
import { ContextGlobal } from '../../../contexts/GlobalContext/context';
import "./style.css";

export default () => {

  const context = useContext(ContextGlobal)
  const [abertasMes, setAbertasMes] = useState({
      classificacao: "Mes",
      tipo: [],
      quantidade: [],
    })

  useEffect(() => {
    var newAbertasMes = {
      classificacao: "Mes",
      tipo: ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"],
      quantidade: [],
    }
    var fetchAbertasMes = async () => {
      for (let index = 1; index < 13; index++){
        newAbertasMes.quantidade.push(await getAbertasMes(context.state.ano, String(index).padStart(2, "0"), '01', 31, context))
      }
      setAbertasMes(newAbertasMes);
    }
    fetchAbertasMes()
  }, [context]);


  let dataGraficoMes = [];
  let dataForLegend = [];
  for (let i = 0; i < abertasMes.tipo.length; i++) {
    dataGraficoMes.push({
      name: abertasMes.tipo[i],
      type: "bar",
      data: [abertasMes.quantidade[i]],
    });
    dataForLegend.push({ name: abertasMes.tipo[i] });
  }

  const config1 = {
    grid: {
      containLabel: true,
      width: "93%", 
      height: "90%",
      top: abertasMes.quantidade.length > 12 ? "10%" : "6%",   
      left: "2%",
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
      showTitle: true,
      feature: {
        type: "png",
        saveAsImage: {
          show: true,
          title: ' ',
          iconStyle: {
            borderWidth: 1.5,
          },
        },
        magicType: { 
          show: true,
          title: ' ',
          type: ['line'],
          iconStyle: {
            borderWidth: 1.5,
          },
        },
        restore: {
          show: true,
          title: ' ',
          iconStyle: {
            borderWidth: 1.5,
          },
        },
      },
    },
    label: {
      show: abertasMes.quantidade.length > 12 ? true : true,
      position: abertasMes.quantidade.length > 12 ? "bottom" : "top",
      fontWeight: abertasMes.quantidade.length > 12 ? "bold" : "normal",
      fontSize: abertasMes.quantidade.length > 12 ? 9 : 12,
      offset: [0, 2],
      color: "rgb(0, 0, 0)",
    },
    xAxis: {
      type: "category",
      data: abertasMes.tipo,
      axisTick: {
        alignWithLabel: true,
      },
      zlevel: 5,
      axisLabel: {
        fontSize: abertasMes.quantidade.length > 12 ? 8 : 12,
        fontWeight: "bold",
        rotate: abertasMes.quantidade.length > 12 ? 90 : 0,
        inside: abertasMes.quantidade.length > 12 ? true : false,
      },
      minInterval: 50000,
    },
    yAxis: {
      type: "value",
      axisLabel: {
        fontSize: abertasMes.quantidade.length > 12 ? 10 : 12,
        fontWeight: "bold",
      },
      axisTick: {
        alignWithLabel: true,
      },
      min: abertasMes.quantidade[0] > 1500 ? 1000 : null,
      minInterval: abertasMes.quantidade[0] > 1500 ? 500 : null,
      max: abertasMes.quantidade[0] > 1500 ? 6000 : null
    },
    series: [
      {
        color: "#023e8a",
        data: abertasMes.quantidade,
        type: "bar",
        showBackground: true,
        backgroundStyle: {
          color: "rgba(180, 180, 180, 0.2)",
        },
        barWidth: "40%",
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#00b4d8",
            },
            {
              offset: 1,
              color: "#1767cd",
            },
          ]),
        },
        emphasis: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0.7,
              color: "#44C0C1",
            },
            {
              offset: 1,
              color: "#06B5D7",
            },
          ]),
        },
      },
    ],
  };

  const config2 = {
    grid: {
      containLabel: true,
      width: "93%", 
      height:  abertasMes.quantidade.length > 12 ? "80%" : "90%",
      top: abertasMes.quantidade.length > 12 ? "10%" : "6%",
      left: "2%",
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
          title: "Baixar",
          iconStyle: {
            borderWidth: 1.5,
          },
        },
        magicType: { 
          show: true,
          title: "...",
          type: ['line'],
          iconStyle: {
            borderWidth: 1.5,
          },
        },
        restore: {
          show: true,
          title: "Limpar",
          iconStyle: {
            borderWidth: 1.5,
          },
        },
      },
    },
    label: {
      show: true,
      position: abertasMes.quantidade.length > 12 ? "bottom" : "top",
      offset: abertasMes.quantidade.length > 12 ? [0, 6] : null,
      fontSize: abertasMes.quantidade.length > 12 ? 9 : 12,
      fontWeight: abertasMes.quantidade.length > 12 ? "bold" : "normal",
      color: "black",
      align: "center",
      verticalAlign: "middle",
      rotate: 0,
    },
    xAxis: {
      type: "category",
      data: abertasMes.tipo,
      axisTick: {
        alignWithLabel: true,
      },
      zlevel: 5,
      axisLabel: {
        fontSize: abertasMes.quantidade.length > 12 ? 7 : 10,
        fontWeight: "bold",
        rotate: abertasMes.quantidade.length > 12 ? 90 : 0,
        inside: abertasMes.quantidade.length > 12 ? true : false,
      },
    },
    yAxis: {
      type: "value",
      axisLabel: {
        fontSize: 9,
        fontWeight: "bold",
      },
    },
    series: [
      {
        type: "bar",
        data: abertasMes.quantidade,
        barWidth: abertasMes.quantidade.length > 12 ? "35%" : "45%",
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#00b4d8",
            },
            {
              offset: 1,
              color: "#1767cd",
            },
          ]),
        },
        emphasis: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0.7,
              color: "#44C0C1",
            },
            {
              offset: 1,
              color: "#06B5D7",
            },
          ]),
        },
      },
    ],
  };

  const config3 = {
    grid: {
      containLabel: true,
      width: "90%", 
      height:  "90%",
      top: abertasMes.quantidade.length > 12 ? "10%" : "6%",
      left: "2%",
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
      itemSize: 15,
      showTitle: true,
      feature: {
        type: "png",
        saveAsImage: {
          show: true,
          title: "Baixar",
          iconStyle: {
            borderWidth: 1.5,
          },
        },
        magicType: { 
          show: true,
          title: "...",
          type: ['line'],
          iconStyle: {
            borderWidth: 1.5,
          },
        },
        restore: {
          show: true,
          title: "Limpar",
          iconStyle: {
            borderWidth: 1.5,
          },
        },
      },
    },
    label: {
      show: abertasMes.quantidade.length > 12 ? true : true,
      align: abertasMes.quantidade.length > 12 ? "center" : "center",
      verticalAlign: "middle",
      position: abertasMes.quantidade.length > 12 ? "bottom" : "top",
      fontSize: 12,
      fontWeight: 'normal',
      offset: abertasMes.quantidade.length > 12 ? [0, 5] : null,
      color: "rgb(0, 0, 0)",
    },
    xAxis: {
      type: "category",
      data: abertasMes.tipo,
      show: abertasMes.quantidade.length > 12 ? true : true,
      zlevel: abertasMes.quantidade.length > 12 ? true : true,
      axisTick: {
        alignWithLabel: abertasMes.quantidade.length > 12 ? true : true,
      },
      axisLabel: {
        fontSize: abertasMes.quantidade.length > 12 ? 7 : 9,
        fontWeight: "bold",
        rotate: abertasMes.quantidade.length > 12 ? 90 : 0,
        inside: abertasMes.quantidade.length > 12 ? true : false,
      },
    },
    yAxis: {
      type: "value",
      axisLabel: {
        fontSize: abertasMes.quantidade.length > 11 ? 9 : 8,
        fontWeight: "bold",
      },
      min: abertasMes.quantidade[0] > 1500 ? 1000 : null,
      minInterval: abertasMes.quantidade[0] > 1500 ? 500 : null,
      max: abertasMes.quantidade[0] > 1500 ? 6000 : null
    },
    series: [
      {
        data: abertasMes.quantidade,
        type: "bar",
        showBackground: true,
        backgroundStyle: {
          color: "rgba(180, 180, 180, 0.2)",
        },
        barWidth: "60%",
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#00b4d8",
            },
            {
              offset: 1,
              color: "#1767cd",
            },
          ]),
        },
        emphasis: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0.7,
              color: "#44C0C1",
            },
            {
              offset: 1,
              color: "#06B5D7",
            },
          ]),
        },
      },
    ],
  };

  const config4 = {
    grid: {
      top: "8%",
      left: abertasMes.quantidade.length > 12 ? "6%" : "5%",
      right: "6%",
      bottom: abertasMes.quantidade.length > 12 ? "10%" : "14%",
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
      left: "95%",
      showTitle: true,
      feature: {
        type: "png",
        saveAsImage: {
          show: true,
          title: "Baixar",
          iconStyle: {
            borderWidth: 1.5,
          },
        },
        magicType: { 
          show: true,
          title: "...",
          type: ['line'],
          iconStyle: {
            borderWidth: 1.5,
          },
        },
        restore: {
          show: true,
          title: "Limpar",
          iconStyle: {
            borderWidth: 1.5,
          },
        },
      },
    },
    label: {
      show: true,
      position: "top",
      fontSize: abertasMes.quantidade.length > 12 ? 12 : 12,
      fontWeight: "normal" ,
      color: "black",
    },
    xAxis: {
      type: "category",
      data: abertasMes.tipo,
      axisTick: {
        alignWithLabel: true,
      },
      zlevel: 5,
      axisLabel: {
        fontSize: abertasMes.quantidade.length > 12 ? 11 : 12,
        fontWeight: "bold",
        rotate: abertasMes.quantidade.length > 12 ? 90 : 0,
        inside: false,
      },
    },
    yAxis: {
      type: "value",
      axisLabel: {
        fontSize: 12,
        fontWeight: "bold",
        position: "top",
        verticalAlign: "middle",
      },
      min: abertasMes.quantidade[0] > 1500 ? 1000 : null,
      minInterval: abertasMes.quantidade[0] > 1500 ? 500 : null,
      max: abertasMes.quantidade[0] > 1500 ? 6000 : null
    },
    series: [
      {
        data: abertasMes.quantidade,
        type: "bar",
        showBackground: true,
        backgroundStyle: {
          color: "rgba(180, 180, 180, 0.3)",
        },
        barWidth: "45%",
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#00b4d8",
            },
            {
              offset: 1,
              color: "#1767cd",
            },
          ]),
        },
        emphasis: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0.7,
              color: "#44C0C1",
            },
            {
              offset: 1,
              color: "#06B5D7",
            },
          ]),
        },
      },
    ],
  };

  return (
    <div
      className="grafico-mes"
      style={{
        width: '100%',
        marginTop: abertasMes.quantidade.length > 12 ? 0 : -25,
      }}
    >
      <p>Empresas {context.state.empresasAbertas ? 'Abertas' : 'Ativas'} Por Mes</p>
      {window.innerWidth >= 375 && window.innerWidth <= 768 && (
        <Echarts
          option={config3}
          style={{
            height:  "30vh",
            width: window.innerWidth == 375 ? '150vw' : '200vw',
          }} 
          opts={{ renderer: "canvas" }}
        />
      )}

      {window.innerWidth > 768 && window.innerWidth <= 1024 && (
        <Echarts
          option={config2}
          style={{
            height: "40vh",
            width: "80vw",
          }}
          opts={{ renderer: "canvas" }}
        />
      )}

      {window.innerWidth > 1024 && window.innerWidth <= 1366 && (
        <Echarts
          option={config1}
          style={{
            height:  "43vh",
            width: "80vw",
          }}
          opts={{ renderer: "canvas" }}
        />
      )}

      {window.innerWidth > 1366 && (
        <Echarts
          option={config4}
          style={{
            height: "40vh",
            width: "80vw",
          }}
          opts={{ renderer: "canvas" }}
        />
      )}
    </div>
  );
};
