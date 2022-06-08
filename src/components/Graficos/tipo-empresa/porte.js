import React, { useContext, useEffect, useState } from "react";
import Echarts from "echarts-for-react";
import { CSVLink } from "react-csv";

import { getDataEmpresasAtivas, getDataEmpresasAbertas } from '../../../services/pinot'
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
    const getAbertasPorte = async (filtros) => { 
      const response = await getDataEmpresasAbertas(filtros);
      setDataPorte(response.values);
    }

    const getAtivasPorte = async (filtros) => { 
      const response = await getDataEmpresasAtivas(filtros);
      setDataPorte(response.values)
    }

    const fetchPorte = async () => {
      var filtros = {classificacao: "porte", ...context.state}
      if(context.state.empresasAbertas){
        getAbertasPorte(filtros);
      }else{
        getAtivasPorte(filtros);
      }
    }
    fetchPorte()
  }, [context]);

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
        fontSize: 10,
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
      width: "98%",
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

  const dataToDownload = [
    ['porte', 'quantidade'],
    ...dataPorte
  ]

  return (
    <div
      className="grafico">
      <p>
        {`Empresas ${context.state.empresasAbertas ? 'Abertas' : 'Ativas'} Por Porte`}
        <CSVLink className='icon-download-csv' data={dataToDownload} filename={"porte-empresa"}> 
          <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><g data-name="Layer 23"><path d="M21 31H8a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3h13a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3ZM8 21a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1ZM25 16H15a1 1 0 0 1-.92-.62 1 1 0 0 1 .21-1.09l10-10a1 1 0 0 1 1.09-.21A1 1 0 0 1 26 5v10a1 1 0 0 1-1 1Zm-7.59-2H24V7.41Z" fill="#ffffff" class="fill-000000"></path><path d="M10.78 27.29a2.49 2.49 0 0 1-2.55-2.55 2.48 2.48 0 0 1 2.55-2.55 2.61 2.61 0 0 1 1.22.31 2.32 2.32 0 0 1 .88.85l-.84.48a1.25 1.25 0 0 0-.51-.51 1.51 1.51 0 0 0-.76-.19 1.52 1.52 0 0 0-1.15.45 1.75 1.75 0 0 0 0 2.32 1.51 1.51 0 0 0 1.15.44 1.61 1.61 0 0 0 .76-.18 1.2 1.2 0 0 0 .51-.51l.84.48A2.32 2.32 0 0 1 12 27a2.44 2.44 0 0 1-1.22.29ZM15.15 27.29a2.16 2.16 0 0 1-1.22-.29 1.69 1.69 0 0 1-.7-.88l.82-.48a1.12 1.12 0 0 0 1.13.74 1 1 0 0 0 .6-.14.47.47 0 0 0 .19-.37.45.45 0 0 0-.24-.41 3.53 3.53 0 0 0-.82-.31 5.15 5.15 0 0 1-.56-.19 2.68 2.68 0 0 1-.45-.27 1.07 1.07 0 0 1-.35-.41 1.38 1.38 0 0 1-.12-.59 1.32 1.32 0 0 1 .47-1.06 1.76 1.76 0 0 1 1.14-.4 1.92 1.92 0 0 1 1.05.29 2 2 0 0 1 .7.81l-.81.47a1 1 0 0 0-.94-.63.73.73 0 0 0-.47.14.44.44 0 0 0-.17.35.45.45 0 0 0 .19.38 2.77 2.77 0 0 0 .74.31l.34.11.31.11a1.72 1.72 0 0 1 .31.16 1.51 1.51 0 0 1 .25.18.93.93 0 0 1 .21.25 1.42 1.42 0 0 1 .13.3 1.6 1.6 0 0 1 .05.39 1.31 1.31 0 0 1-.49 1.08 2 2 0 0 1-1.29.36ZM18.63 27.19 17 22.29h1l1.2 3.77 1.19-3.77h1.05l-1.65 4.9Z" fill="#ffffff" class="fill-000000"></path><path d="M40 43h-6.57a1 1 0 0 1 0-2H40a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H25.41L16 15.41V20a1 1 0 0 1-2 0v-5a1 1 0 0 1 .29-.71l10-10A1 1 0 0 1 25 4h15a3 3 0 0 1 3 3v33a3 3 0 0 1-3 3Z" fill="#ffffff" class="fill-000000"></path><path d="M30.57 43H17a3 3 0 0 1-3-3V30a1 1 0 0 1 2 0v10a1 1 0 0 0 1 1h13.57a1 1 0 0 1 0 2Z" fill="#ffffff" class="fill-000000"></path><path d="M32 45a1 1 0 0 1-.81-.42l-5-7A1 1 0 0 1 27 36h1v-5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v5h1a1 1 0 0 1 .81 1.58l-5 7A1 1 0 0 1 32 45Zm-3.06-7L32 42.28 35.06 38H35a1 1 0 0 1-1-1v-5h-4v5a1 1 0 0 1-1 1Z" fill="#ffffff" class="fill-000000"></path></g></svg>
        </CSVLink>
      </p>
      {window.innerWidth >= 320 && window.innerWidth < 768 && (
        <Echarts
          option={config3}
          style={{
            width: "90%",
          }}
          opts={{ renderer: "canvas" }}
        />
      )}

      {window.innerWidth >= 768 && window.innerWidth <= 1024 && (
        <Echarts
          option={config2}
          style={{
            width: "48.5vw",
            height: "45vh",
            maxHeight: "360px"
          }}
          opts={{ renderer: "canvas" }}
        />
      )}

      {window.innerWidth > 1024 && window.innerWidth <= 1366 && (
        <Echarts
          option={config1}
          style={{
            width: '100%',
          }}
          opts={{ renderer: "canvas" }}
        />
      )}

      {window.innerWidth > 1366 && (
        <Echarts
          option={config4}
          style={{
            height: "45vh",
            maxHeight: "400px",
            width: "100%",
          }}
          opts={{ renderer: "canvas" }}
        />
      )}
    </div>
  );
};
