import React from "react";
import Echarts from "echarts-for-react";
import echarts from "echarts";
import "./style.css";

export default ({ tipo, categoria }) => {
  let dataGraficoMes = [];
  let dataForLegend = [];
  for (let i = 0; i < categoria.tipo.length; i++) {
    dataGraficoMes.push({
      name: categoria.tipo[i],
      type: "bar",
      data: [categoria.quantidade[i]],
    });
    dataForLegend.push({ name: categoria.tipo[i] });
  }

  const config1 = {
    grid: {
      containLabel: true,
      width: "93%", 
      height: "90%",
      top: categoria.quantidade.length > 12 ? "10%" : "6%",   
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
      show: categoria.quantidade.length > 12 ? true : true,
      position: categoria.quantidade.length > 12 ? "bottom" : "top",
      fontWeight: categoria.quantidade.length > 12 ? "bold" : "normal",
      fontSize: categoria.quantidade.length > 12 ? 9 : 9,
      offset: [0, 2],
      color: "rgb(0, 0, 0)",
    },
    xAxis: {
      type: "category",
      data: categoria.tipo,
      axisTick: {
        alignWithLabel: true,
      },
      zlevel: 5,
      axisLabel: {
        fontSize: categoria.quantidade.length > 12 ? 8 : 12,
        fontWeight: "bold",
        rotate: categoria.quantidade.length > 12 ? 90 : 0,
        inside: categoria.quantidade.length > 12 ? true : false,
      },
      minInterval: 50000,
    },
    yAxis: {
      type: "value",
      axisLabel: {
        fontSize: categoria.quantidade.length > 12 ? 10 : 12,
        fontWeight: "bold",
      },
      axisTick: {
        alignWithLabel: true,
      },
    },
    series: [
      {
        color: "#023e8a",
        data: categoria.quantidade,
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
      height:  categoria.quantidade.length > 12 ? "80%" : "90%",
      top: categoria.quantidade.length > 12 ? "10%" : "6%",
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
          title: "Download",
          iconStyle: {
            borderWidth: 1.5,
          },
        },
      },
    },
    label: {
      show: true,
      position: categoria.quantidade.length > 12 ? "bottom" : "top",
      offset: categoria.quantidade.length > 12 ? [0, 6] : null,
      fontSize: categoria.quantidade.length > 12 ? 9 : 12,
      fontWeight: categoria.quantidade.length > 12 ? "bold" : "normal",
      color: "black",
      align: "center",
      verticalAlign: "middle",
      rotate: 0,
    },
    xAxis: {
      type: "category",
      data: categoria.tipo,
      axisTick: {
        alignWithLabel: true,
      },
      zlevel: 5,
      axisLabel: {
        fontSize: categoria.quantidade.length > 12 ? 7 : 10,
        fontWeight: "bold",
        rotate: categoria.quantidade.length > 12 ? 90 : 0,
        inside: categoria.quantidade.length > 12 ? true : false,
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
        data: categoria.quantidade,
        barWidth: categoria.quantidade.length > 12 ? "35%" : "45%",
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
      width: "93%", 
      height: categoria.quantidade.length > 12 ? "80%" : "90%",
      top: categoria.quantidade.length > 12 ? "10%" : "6%",
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
    label: {
      show: categoria.quantidade.length > 12 ? true : true,
      align: categoria.quantidade.length > 12 ? "center" : "center",
      verticalAlign: "middle",
      position: categoria.quantidade.length > 12 ? "bottom" : "top",
      fontSize: categoria.quantidade.length > 12 ? 9 : 10,
      fontWeight: categoria.quantidade.length > 12 ? "bold" : "normal",
      offset: categoria.quantidade.length > 12 ? [0, 5] : null,
      color: "rgb(0, 0, 0)",
    },
    xAxis: {
      type: "category",
      data: categoria.tipo,
      show: categoria.quantidade.length > 12 ? true : true,
      zlevel: categoria.quantidade.length > 12 ? true : true,
      axisTick: {
        alignWithLabel: categoria.quantidade.length > 12 ? true : true,
      },
      axisLabel: {
        fontSize: categoria.quantidade.length > 12 ? 7 : 9,
        fontWeight: "bold",
        rotate: categoria.quantidade.length > 12 ? 90 : 0,
        inside: categoria.quantidade.length > 12 ? true : false,
      },
    },
    yAxis: {
      type: "value",
      axisLabel: {
        fontSize: categoria.quantidade.length > 11 ? 9 : 8,
        fontWeight: "bold",
      },
    },
    series: [
      {
        data: categoria.quantidade,
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
      left: categoria.quantidade.length > 12 ? "6%" : "5%",
      right: "4%",
      bottom: categoria.quantidade.length > 12 ? "10%" : "14%",
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
      left: "95%",
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
      position: categoria.quantidade.length > 12 ? "bottom" : "top",
      fontSize: categoria.quantidade.length > 12 ? 12 : 12,
      fontWeight: categoria.quantidade.length > 12 ? "bold" : "normal",
      color: "black",
    },
    xAxis: {
      type: "category",
      data: categoria.tipo,
      axisTick: {
        alignWithLabel: true,
      },
      zlevel: 5,
      axisLabel: {
        fontSize: categoria.quantidade.length > 12 ? 11 : 12,
        fontWeight: "bold",
        rotate: categoria.quantidade.length > 12 ? 90 : 0,
        inside: categoria.quantidade.length > 12 ? true : false,
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
    },
    series: [
      {
        data: categoria.quantidade,
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
        height: categoria.quantidade.length > 12 ? "45vh" : "45vh",
        marginTop: categoria.quantidade.length > 12 ? 0 : -25,
      }}
    >
      <p>Empresas {tipo == "Abertas" ? "Abertas Por Mes" : "Ativas Por Mes"}</p>
      {window.innerWidth >= 425 && window.innerWidth <= 768 && (
        <Echarts
          option={config3}
          style={{
            height: categoria.quantidade.length > 12 ? "45vh" : "45vh",
            width: categoria.quantidade.length > 12 ? "200vw" : "110vw",
          }}
          opts={{ renderer: "canvas" }}
        />
      )}

      {window.innerWidth > 768 && window.innerWidth <= 1024 && (
        <Echarts
          option={config2}
          style={{
            height: categoria.quantidade.length > 12 ? "40vh" : "40vh",
            width: "80vw",
          }}
          opts={{ renderer: "canvas" }}
        />
      )}

      {window.innerWidth > 1024 && window.innerWidth <= 1366 && (
        <Echarts
          option={config1}
          style={{
            height: categoria.quantidade.length > 12 ? "60vh" : "48vh",
            width: "80vw",
          }}
          opts={{ renderer: "canvas" }}
        />
      )}

      {window.innerWidth > 1366 && (
        <Echarts
          option={config4}
          style={{
            height: categoria.quantidade.length > 12 ? "70vh" : "45vh",
            width: "80vw",
          }}
          opts={{ renderer: "canvas" }}
        />
      )}
    </div>
  );
};
