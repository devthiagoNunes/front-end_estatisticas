import { useQuery } from '@tanstack/react-query'
import { useContext, useEffect, useState } from 'react'
import { Navigate, useLocation } from 'react-router'
import { Loading } from '../../components/loading'

import { TemplateChart } from '../../templates/chart'
import { TemplateLinks } from '../../templates/links'
import { TemplateTable } from '../../templates/table'

import { getDatasOfChartsAndFilters } from '../../services/pinot'
import { FilterContext } from '../../contexts/filtersContext/contextProvider'

import * as Styled from './styled'
import { MapMaranhao } from '../../components/mapMaranhao'
import { TemplateFilter } from '../../templates/filter'
import { Header } from '../../components/header'
import { TreeMapComponente } from '../../components/treeMap'

export const ActiveCompanies = () => {
  const { pathname } = useLocation()
  const { state } = useContext(FilterContext)
  
  const { data, isLoading, error } = useQuery(['response', state], async () => {
    const response = await getDatasOfChartsAndFilters(state)
    return response.data
  }, {
    staleTime: 1000 * 10 * 60 // 10 minutes
  })

  return (
    <Styled.Container>
      <Header />
      {isLoading ? <Loading /> : 
        error ? <Navigate to='/' /> :
        data && (
          <Styled.Content>
            <Styled.ContentTemplate>
              <TemplateFilter
                pathname={pathname}              
                sectorFilterData={data.filtersData.setor}
                porteFilterData={data.filtersData.porte}
                natureFilterData={data.filtersData.natureza}
                setionFilterData={data.filtersData.secao_atividade}
                activityFilterData={data.filtersData.descricao_atividade}
                countyFilterData={data.filtersData.municipio_empresa}
              />
  
              <Styled.StyleContent> 
                <TemplateLinks />
  
                <Styled.ChartsStyle>
                  <div className='charts-and-tables'>
                    <Styled.ChartsFirstSection>
                      <TemplateChart
                        chartType='Porte'
                        chartData={data.graphicsData.porte}
                      />
                      <TemplateChart
                        chartType='Setor'
                        chartData={data.graphicsData.setor}
                      />                      
                      {data && <TreeMapComponente treeMapData={data.graphicsData.capitalSocial} />}
                    </Styled.ChartsFirstSection>
  
                    <Styled.MapSection>
                      <Styled.QuantityTotal>
                        <p>Total de Empresas {state.empresasAbertas ? 'Abertas' : 'Ativas'}</p>
                        <p>{data.graphicsData.quantity[0][0].toLocaleString('pt-BR')}</p>
                      </Styled.QuantityTotal>
                      <MapMaranhao dataToMap={data.graphicsData.municipio_empresa} />
                      <TemplateTable 
                        tableType='Natureza'
                        tableData={data.graphicsData.natureza}
                      />
                    </Styled.MapSection>
                  </div>
                </Styled.ChartsStyle> 
              </Styled.StyleContent>
            </Styled.ContentTemplate>
          </Styled.Content>
        )
      }
    </Styled.Container>
  )
}