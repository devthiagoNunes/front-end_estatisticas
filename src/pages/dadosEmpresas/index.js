import React, { useContext } from 'react'
import { Navigate } from 'react-router'
import { useQuery } from '@tanstack/react-query'
import ReactEcharts from "echarts-for-react";

import Header from '../../client/Header'
import Filters from '../../client/filters'
import Mes from "../../client/graphics/mes"
import Botoes from '../../components/Botoes'
import GraphicCompany from '../../components/graphic/model'
import CompanyActivity from '../../client/tables/company-activity'
import CompanyNature from '../../client/tables/company-nature'
import Counties from '../../client/tables/counties'
import { ContextGlobal } from '../../contexts/GlobalContext/context'
import { getDatasOfChartsAndFilters } from '../../services/pinot'
import { Loading } from '../../components/loading'

import {AllCharts, LayoutStyle, TypeCompany} from './styled'
import './styleGlobal.css'
import { ContainerCapitalSocial } from '../../client/tables/counties/styled'

export default ({tipo}) => {
  const context = useContext(ContextGlobal)

  const { data, isLoading, error } = useQuery(['response', context.state], async () => {
    const response = await getDatasOfChartsAndFilters(context.state)
    return response.data
  }, {
    staleTime: 1000 * 10 * 60 // 10 minutes
  })

  let capitalSocialData = []
  let treeMapOptions = {}

  if(data !== undefined) {
    capitalSocialData = data.graphicsData.capitalSocial.map(data => (
      {
        name: data[0],
        value: data[1],
      }
    ))

    treeMapOptions = {
      title: {
        text: "Capital Social",
        left: "center"
      },
      tooltip: {
        formatter: function (info) {
          return [
            '<div class="tooltip-title">' + info.name + "</div>",
            "Capital Social: R$ " + info.value
          ].join("");
        }
      },
      series: [
        {
          type: "treemap",
          visibleMin: 20,
          label: {
            show: true,
            formatter: "{b}"
          },
          itemStyle: {
            borderColor: "#fff"
          },
          levels: [
            {
              itemStyle: {
                borderWidth: 3,
                borderColor: "#333",
                gapWidth: 3
              }
            },
            {
              color: ["#5c677d", "#0096c7", "#0077b6"],
              colorMappingBy: "value",
              itemStyle: {
                gapWidth: 1
              }
            }
          ],
          // colorMappingBy: 'value',
          data: [
            {
              name: "Empresas Ativas",
              path: "Empresas Ativas",
              children: capitalSocialData
            }
          ]
        }
      ]
    }
  }

  return (
    <LayoutStyle empresasAbertas={context.state.empresasAbertas}>
      <Header />
      <Filters data={data} />
      {
        isLoading ? <Loading /> : 
        error ? <Navigate to='/' /> :
        data && (
          <>
            <main>
              <Botoes tipo={tipo} />
              <AllCharts>
                <TypeCompany>
                  {(window.innerWidth >= 320 && window.innerWidth < 768) ? <div className="total-empresasAbertas">
                    <p>{`Total de Empresas ${context.state.empresasAbertas ? 'Abertas' : 'Ativas'}`}</p>
                    <p>{data.graphicsData.quantity[0][0].toLocaleString('pt-br')}</p>
                  </div> : null}
                  <section>
                    <GraphicCompany classificationGraphic='porte' isVetical={true} arr_data_company={data.graphicsData.porte} />
                    {context.state.empresasAbertas == true && <GraphicCompany classificationGraphic='setor' arr_data_company={data.graphicsData.setor} />}
                    {!context.state.empresasAbertas && ( 
                       <ContainerCapitalSocial>
                        <p>Classificação Por Capital Social</p>
                        <ReactEcharts option={treeMapOptions} />
                      </ContainerCapitalSocial>
                    )}
                    <CompanyNature arr_dada_nature_company={data.graphicsData.natureza} />
                  </section>
                  <Counties 
                    arr_data_counties={data.graphicsData.municipio_empresa}
                    arr_data_capital={data.graphicsData.capitalSocial}
                    total_quantity={data.graphicsData.quantity??[0][0]} 
                  />  
                </TypeCompany>
                {context.state.empresasAbertas !== false && !context.state.mes.length && <Mes arr_data_month={data.graphicsData.mes} />}
              </AllCharts>
            </main>
          </>
        )
      }
    </LayoutStyle>
  );
}
