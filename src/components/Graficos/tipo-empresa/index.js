import React from "react";
import Echarts from "echarts-for-react";
import "./style.css";

export default ({ tipo, categoria, classificacao }) => {
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
  for (let i = 0; i < categoria.quantidade.length; i++) {
    datas.push({
      value: categoria.quantidade[i],
      itemStyle: { color: colors[i] },
    });
  }

  const config1 = {
    grid: {
      containLabel: true,
      width: categoria.quantidade.length > 7 ? "52%" : "95%",
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
      position: categoria.quantidade.length > 7 ? "right" : "top",
      color: "rgb(0, 0, 0)",
    },
    xAxis: {
      type: categoria.quantidade.length > 7 ? "value" : "category",
      data: categoria.quantidade.length > 7 ? null : categoria.empresas,
      axisTick: {
        alignWithLabel: true,
      },
      axisLabel: {
        fontSize: categoria.quantidade.length > 7 ? 10 : 10,
        fontWeight: categoria.quantidade.length > 7 ? "normal" : "bold",
        rotate:
          window.innerWidth <= 1115 && categoria.quantidade.length > 7 ? 30 : 0,
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
      tipo: categoria.quantidade.length > 7 ? "category" : "value",
      data: categoria.quantidade.length > 7 ? categoria.empresas : null,
      axisLabel: {
        fontSize: 12,
        fontWeight: categoria.quantidade.length > 7 ? "normal" : "bold",
      },
      axisTick: {
        alignWithLabel: categoria.quantidade.length > 7 ? true : null,
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
        barWidth: categoria.quantidade.length > 7 ? "20%" : "35%",
      },
    ],
  };

  const config2 = {
    grid: {
      containLabel: true,
      width: "90%",
      height: categoria.quantidade.length > 7 ? "80%" : "88%",
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
      position: categoria.quantidade.length > 7 ? "bottom" : "top",
      verticalAlign: "middle",
      rotate: 0,
      offset: categoria.quantidade.length > 12 ? [0, 10] : null,
      fontSize: categoria.quantidade.length > 7 ? 10 : 12,
      fontWeight: categoria.quantidade.length > 12 ? "bold" : "normal",
      color: "rgb(0, 0, 0)",
    },
    xAxis: {
      type: "category",
      show: true,
      data: categoria.empresas,
      axisTick: {
        alignWithLabel: true,
      },
      zlevel: 5,
      axisLabel: {
        fontSize: categoria.quantidade.length > 7 ? 7 : 8,
        fontWeight: "bold",
        rotate: categoria.quantidade.length > 7 ? 90 : 0,
        inside: categoria.quantidade.length > 7 ? true : false,
        fontSize: 9,
      },
    },
    yAxis: {
      tipo: "value",
      axisLabel: {
        fontSize: categoria.quantidade.length > 7 ? 8 : 10,
        fontWeight: "bold",
      },
      axisTick: {
        alignWithLabel: categoria.quantidade.length > 7 ? true : null,
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
        barWidth: categoria.quantidade.length > 7 ? "35%" : "25%",
      },
    ],
  };

  const config3 = {
    grid: {
      containLabel: true,
      width: "92%",
      height: categoria.quantidade.length > 7 ? "73%" : "85%",
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
      align: categoria.quantidade.length > 7 ? "center" : "center",
      verticalAlign: "middle",
      margin: true,
      position: categoria.quantidade.length > 7 ? "bottom" : "top",
      rotate: categoria.quantidade.length > 7 ? 0 : 0,
      offset: categoria.quantidade.length > 7 ? [0, 8] : null,
      fontWeight: categoria.quantidade.length > 7 ? "bold" : "normal",
      fontSize: categoria.quantidade.length > 7 ? 9 : 10,
      color: "rgb(0, 0, 0)",
    },
    xAxis: {
      type: "category",
      data: categoria.empresas,
      zlevel: 5,
      axisLabel: {
        fontSize: categoria.quantidade.length > 7 ? 6 : 8,
        fontWeight: "bold",
        rotate: categoria.quantidade.length > 7 ? 90 : 0,
        inside: categoria.quantidade.length > 7 ? true : false,
        fontSize: 7,
      },
      axisTick: {
        alignWithLabel: categoria.quantidade.length > 7 ? true : true,
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
      height: categoria.quantidade.length > 7 ? "96%" : "88%",
      width: categoria.quantidade.length >= 7 ? "90%" : '90%',
      top: categoria.quantidade.length > 7 ? "2%" : "9%",
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
      position: categoria.quantidade.length > 7 ? "right" : "top",
      color: "rgb(0, 0, 0)",
    },
    xAxis: {
      type: categoria.quantidade.length > 7 ? "value" : "category",
      data:
        categoria.quantidade.length > 7
          ? categoria.quantidade
          : categoria.empresas,
      axisTick: {
        alignWithLabel: true,
        show: false,
      },
      axisLabel: {
        fontSize: categoria.quantidade.length > 12 ? 12 : 11,
        fontWeight: "bold",
      },
    },
    yAxis: {
      tipo: categoria.quantidade.length > 7 ? "category" : "value",
      data: categoria.quantidade.length > 7 ? categoria.empresas : null,
      axisLabel: {
        fontSize: categoria.quantidade.length > 7 ? 9 : 12,
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
      <p>{`Empresas ${tipo} Por ${classificacao}`}</p>

      {window.innerWidth >= 425 && window.innerWidth <= 768 && (
        <Echarts
          option={config3}
          style={{
            width: categoria.quantidade.length > 6 ? "145vw" : "90vw",
          }}
          opts={{ renderer: "canvas" }}
        />
      )}

      {window.innerWidth > 768 && window.innerWidth <= 1024 && (
        <Echarts
          option={config2}
          style={{
            width: categoria.quantidade.length > 6 ? "100vw" : "65vw",
            height: categoria.quantidade.length > 7 ? "40vh" : "45vh"
          }}
          opts={{ renderer: "canvas" }}
        />
      )}

      {window.innerWidth > 1024 && window.innerWidth <= 1366 && (
        <Echarts
          option={config1}
          style={{
            width: categoria.quantidade.length > 6 ? "90vw" : "55vw",
          }}
          opts={{ renderer: "canvas" }}
        />
      )}

      {window.innerWidth > 1366 && (
        <Echarts
          option={config4}
          style={{
            height: categoria.quantidade.length > 7 ? "90vh" : "60vh",
            width: categoria.quantidade.length > 7 ? "60vw" : "60vw",
          }}
          opts={{ renderer: "canvas" }}
        />
      )}
    </div>
  );
};
