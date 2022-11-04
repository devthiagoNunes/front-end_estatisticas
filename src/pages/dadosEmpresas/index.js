import React, { useContext } from 'react'
import { Navigate } from 'react-router'
import { useQuery } from '@tanstack/react-query'

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

export default ({tipo}) => {
  const context = useContext(ContextGlobal)

  const { data, isLoading, error } = useQuery(['response', context.state], async () => {
    const response = await getDatasOfChartsAndFilters(context.state)
    return response.data
  }, {
    staleTime: 1000 * 10 * 60 // 10 minutes
  })

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
                    {context.state.empresasAbertas == false && <CompanyActivity arr_data_company_activity={data.graphicsData.descricao_atividade} />}
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
