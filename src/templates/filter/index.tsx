import { useContext } from 'react'
import { Filter } from '../../components/filter'
import { FilterContext } from '../../contexts/filtersContext/contextProvider'
import * as Styled from './styled'

export type TemplateFilterProps = {
  pathname?: string
  sectorFilterData: string[][]
  countyFilterData: string[][]
  setionFilterData: string[][]
  porteFilterData: string[][]
  activityFilterData: string[][]
  natureFilterData: string[][]
  filtersVisible: boolean
}

type YearOptionsData = {
  filterValue: number
  label: number 
} []

type MonthOptionsData = {
  filterValue: string
  label: number 
} []

export const TemplateFilter = ({ 
  pathname,
  activityFilterData = [],
  countyFilterData = [],
  natureFilterData = [],
  porteFilterData = [],
  sectorFilterData = [],
  setionFilterData = [],
  filtersVisible
}: TemplateFilterProps) => {

  const { state: { ano } } = useContext(FilterContext)
  const selectedYear = ano

  function returnObjectList(listaData: string[][]) {
    const objectList = listaData.map(data => (
      { 
        filterValue: data[0],
        label: data[0]
      }
    ))

    return objectList
  }

  const createYearOptionsData = (): YearOptionsData => {
    const yearOptionsData: YearOptionsData = []

    for (let year = 2014; year <= selectedYear; year++) {
      yearOptionsData.unshift({
        filterValue: year,
        label: year
      })
    }

    return yearOptionsData
  }

  const createMonthOptions = (): MonthOptionsData => {
    const date = new Date()
    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    const monthOptions: MonthOptionsData = []

    if(selectedYear < date.getFullYear()) {
      months.forEach((month, index) => {
        monthOptions.push({
          filterValue: month,
          label: index + 1
        })
      })
    } else {
      for (let i = 0; i <= date.getMonth(); i++) {
        monthOptions.push({
          filterValue: months[i],
          label: i + 1
        })
      }
    }

    return monthOptions
  }

  const yearOptionsData = createYearOptionsData()
  const monthOptionsData = createMonthOptions()
  const sectorOptionsData = returnObjectList(sectorFilterData)
  const countyOptionsData = returnObjectList(countyFilterData)
  const setionOptionsData = returnObjectList(setionFilterData)
  const porteOptionsData = returnObjectList(porteFilterData)
  const activityOptionsData = returnObjectList(activityFilterData)
  const natureOptionsData = returnObjectList(natureFilterData)
  
  return (
    <Styled.Container filtersVisible={filtersVisible}>
      <p>Fltros:</p>
      <Styled.FilterFirstSection>
        {pathname !== '/estatisticas/empresas-ativas' && (
          <Filter 
            action='MUDAR_ANO' 
            filterDescription='Ano de Abertura'
            singleSelect={true}
            filterOptionsData={yearOptionsData}
          />
        )}

        {pathname !== '/estatisticas/empresas-ativas' && (
          <Filter 
            action='MUDAR_MES' 
            filterDescription='Mês' 
            filterOptionsData={monthOptionsData}
          />
        )}
        
        <Filter 
          action='MUDAR_SETOR' 
          filterDescription='Setor de Atuação' 
          filterOptionsData={sectorOptionsData}
        />
        <Filter 
          action='MUDAR_MUNICIPIO' 
          filterDescription='Municipio' 
          filterOptionsData={countyOptionsData}
        />
      </Styled.FilterFirstSection>

      <Styled.FilterSecondSection>
        <Filter 
          action='MUDAR_SECAO_ATIVIDADE' 
          filterDescription='Seção de Atividade' 
          filterOptionsData={setionOptionsData}
        />
        <Filter 
          action='MUDAR_PORTE' 
          filterDescription='Porte da Empresa' 
          filterOptionsData={porteOptionsData}
        />
        <Filter 
          action='MUDAR_ATIVIDADE' 
          filterDescription='Atividade' 
          filterOptionsData={activityOptionsData}
        />  
        <Filter 
          action='MUDAR_NATUREZA' 
          filterDescription='Natureza' 
          filterOptionsData={natureOptionsData  }
        />     
      </Styled.FilterSecondSection>
    </Styled.Container>
  )
}