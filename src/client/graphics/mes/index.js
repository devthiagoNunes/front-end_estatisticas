import React, { useContext, useEffect, useState } from "react";
import Echarts from "echarts-for-react";
import { CSVLink } from "react-csv";
import echarts from "echarts";

import { getDataEmpresasAbertas } from "../../../services/pinot"; 
import { ContextGlobal } from "../../../contexts/GlobalContext/context"; 
import "./style.css";

export default () => {

  const context = useContext(ContextGlobal)
  const [popupVisible, setPopoupVisible] = useState(false);
  const [abertasMes, setAbertasMes] = useState({
      classificacao: "Mes",
      tipo: [],
      quantidade: [],
    })
  const [dataToCSVComponent, setDataToCSVComponent] = useState([])


  useEffect(() => {
    var newAbertasMes = {
      classificacao: "Mes",
      tipo: ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"],
      quantidade: [],
    }
    var fetchAbertasMes = async () => {
      var filtros = {classificacao: "abertas_mes", ...context.state};
      const response = await getDataEmpresasAbertas(filtros);
      setDataToCSVComponent(response.values)
      response.values.forEach(element => {
        newAbertasMes.quantidade.push(element[1])
      })
      setAbertasMes(newAbertasMes)
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
      width: "95%", 
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
      min: abertasMes.quantidade[1] < 1500 ? 0 : 1000,
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
      width: "94%", 
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
      orient: "vertical",
      left: "right",
      itemSize: 12,
      showTitle: true,
      feature: {
        type: "png",
        saveAsImage: {
          show: true,
          title: " ",
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
          title: " ",
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
        fontSize: 10,
        fontWeight: "bold",
      },
      min: abertasMes.quantidade[1] < 1500 ? 0 : 1000,
      minInterval: abertasMes.quantidade[0] > 1500 ? 500 : null,
      max: abertasMes.quantidade[0] > 1500 ? 6000 : null
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
      width: "93%", 
      height:  "90%",
      top: "6%",
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
      itemSize: 10,
      left: "right",
      showTitle: true,
      feature: {
        type: "png",
        saveAsImage: {
          show: true,
          title: " ",
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
          title: " ",
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
      fontSize: 10,
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
        fontSize: 9,
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
      min: abertasMes.quantidade[1] < 1500 ? 0 : 1000,
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
      containLabel: true,
      width: "94%",
      top: "8%",
      left: "2%",
      right: "6%",
      bottom: "5%",
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
          title: " ",
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
          title: " ",
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
      min: abertasMes.quantidade[1] < 1500 ? 0 : 1000,
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

  const dataToDownload = [
    ['mes', 'quantidade'],
    ...dataToCSVComponent
  ]

  return (
    <div
      className="grafico-mes"
      style={{
        width: '100%',
        height: '100%',
        maxHeight: '350px',
        marginTop: abertasMes.quantidade.length > 12 ? 0 : -25,
      }}
    >
      <p>
        <div style={{
          position: 'absolute',
          background: '#666666',
          right: '40px',
          top: '2px',
          fontSize: '.6rem',
          padding: '.2rem',
          borderRadius: '20%',
          display: popupVisible ? 'block' : 'none'
        }}>
          Baixar CSV
        </div>
        Empresas {context.state.empresasAbertas ? 'Abertas' : 'Ativas'} Por Mes
        <CSVLink className='icon-download-csv' data={dataToDownload} filename={"dados-mensais"}
          onMouseOver={() => setPopoupVisible(true)}
          onMouseOut={() => setPopoupVisible(false)}> 
          <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><g data-name="Layer 23"><path d="M21 31H8a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3h13a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3ZM8 21a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1ZM25 16H15a1 1 0 0 1-.92-.62 1 1 0 0 1 .21-1.09l10-10a1 1 0 0 1 1.09-.21A1 1 0 0 1 26 5v10a1 1 0 0 1-1 1Zm-7.59-2H24V7.41Z" fill="#ffffff" class="fill-000000"></path><path d="M10.78 27.29a2.49 2.49 0 0 1-2.55-2.55 2.48 2.48 0 0 1 2.55-2.55 2.61 2.61 0 0 1 1.22.31 2.32 2.32 0 0 1 .88.85l-.84.48a1.25 1.25 0 0 0-.51-.51 1.51 1.51 0 0 0-.76-.19 1.52 1.52 0 0 0-1.15.45 1.75 1.75 0 0 0 0 2.32 1.51 1.51 0 0 0 1.15.44 1.61 1.61 0 0 0 .76-.18 1.2 1.2 0 0 0 .51-.51l.84.48A2.32 2.32 0 0 1 12 27a2.44 2.44 0 0 1-1.22.29ZM15.15 27.29a2.16 2.16 0 0 1-1.22-.29 1.69 1.69 0 0 1-.7-.88l.82-.48a1.12 1.12 0 0 0 1.13.74 1 1 0 0 0 .6-.14.47.47 0 0 0 .19-.37.45.45 0 0 0-.24-.41 3.53 3.53 0 0 0-.82-.31 5.15 5.15 0 0 1-.56-.19 2.68 2.68 0 0 1-.45-.27 1.07 1.07 0 0 1-.35-.41 1.38 1.38 0 0 1-.12-.59 1.32 1.32 0 0 1 .47-1.06 1.76 1.76 0 0 1 1.14-.4 1.92 1.92 0 0 1 1.05.29 2 2 0 0 1 .7.81l-.81.47a1 1 0 0 0-.94-.63.73.73 0 0 0-.47.14.44.44 0 0 0-.17.35.45.45 0 0 0 .19.38 2.77 2.77 0 0 0 .74.31l.34.11.31.11a1.72 1.72 0 0 1 .31.16 1.51 1.51 0 0 1 .25.18.93.93 0 0 1 .21.25 1.42 1.42 0 0 1 .13.3 1.6 1.6 0 0 1 .05.39 1.31 1.31 0 0 1-.49 1.08 2 2 0 0 1-1.29.36ZM18.63 27.19 17 22.29h1l1.2 3.77 1.19-3.77h1.05l-1.65 4.9Z" fill="#ffffff" class="fill-000000"></path><path d="M40 43h-6.57a1 1 0 0 1 0-2H40a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H25.41L16 15.41V20a1 1 0 0 1-2 0v-5a1 1 0 0 1 .29-.71l10-10A1 1 0 0 1 25 4h15a3 3 0 0 1 3 3v33a3 3 0 0 1-3 3Z" fill="#ffffff" class="fill-000000"></path><path d="M30.57 43H17a3 3 0 0 1-3-3V30a1 1 0 0 1 2 0v10a1 1 0 0 0 1 1h13.57a1 1 0 0 1 0 2Z" fill="#ffffff" class="fill-000000"></path><path d="M32 45a1 1 0 0 1-.81-.42l-5-7A1 1 0 0 1 27 36h1v-5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v5h1a1 1 0 0 1 .81 1.58l-5 7A1 1 0 0 1 32 45Zm-3.06-7L32 42.28 35.06 38H35a1 1 0 0 1-1-1v-5h-4v5a1 1 0 0 1-1 1Z" fill="#ffffff" class="fill-000000"></path></g></svg>
        </CSVLink>
      </p>
      {window.innerWidth >= 320 && window.innerWidth <= 768 && (
        <Echarts
          option={config3}
          style={{
            height:  "30vh",
            maxHeight: "30vh",
            width: window.innerWidth <= 540 || window.innerWidth <= 320 ? '120vw' : '100%',
          }} 
          opts={{ renderer: "canvas" }}
        />
      )}

      {window.innerWidth > 768 && window.innerWidth <= 1024 && (
        <Echarts
          option={config2}
          style={{
            height: "40vh",
            maxHeight: "40vh",
            width: "100%",
          }}
          opts={{ renderer: "canvas" }}
        />
      )}

      {window.innerWidth > 1024 && window.innerWidth <= 1366 && (
        <Echarts
          option={config1}
          style={{
            height:  "43vh",
            maxHeight: "43vh",
            width: "80vw",
            maxWidth: "80vw",
          }}
          opts={{ renderer: "canvas" }}
        />
      )}

      {window.innerWidth > 1366 && (
        <Echarts
          option={config4}
          style={{
            height: "40vh",
            maxHeight: "400px",
            width: "100%",
            maxWidth: "100%",
          }}
          opts={{ renderer: "canvas" }}
        />
      )}
    </div>
  );
};
