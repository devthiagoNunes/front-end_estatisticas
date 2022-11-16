import { useContext } from 'react'
import { Filter } from '../../components/filter'
import { FilterContext } from '../../contexts/filtersContext/contextProvider'
import * as Styled from './styled'

export type TemplateFilterProps = {
  sectorFilterData: [[string]]
  countyFilterData: [[string]]
  setionFilterData: [[string]]
  porteFilterData: [[string]]
  activityFilterData: [[string]]
  natureFilterData: [[string]]
}

type YearOptionsData = {
  filterValue: number
  label: number 
} []

type MonthOptionsData = {
  filterValue: string
  label: string 
} []

export const TemplateFilter = ({ ...data }: TemplateFilterProps) => {

  const { state: { ano } } = useContext(FilterContext)
  const selectedYear = ano

  function returnObjectList(listaData: [[string | number]]) {
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
      months.forEach((month) => {
        monthOptions.push({
          filterValue: month,
          label: month
        })
      })
    } else {
      for (let i = 0; i <= date.getMonth(); i++) {
        monthOptions.push({
          filterValue: months[i],
          label: months[i]
        })
      }
    }

    return monthOptions
  }

  const yearOptionsData = createYearOptionsData()
  const monthOptionsData = createMonthOptions()
  const sectorOptionsData = returnObjectList(data.sectorFilterData)
  const countyOptionsData = returnObjectList(data.countyFilterData)
  const setionOptionsData = returnObjectList(data.setionFilterData)
  const porteOptionsData = returnObjectList(data.porteFilterData)
  const activityOptionsData = returnObjectList(data.activityFilterData)
  const natureOptionsData = returnObjectList(data.natureFilterData)
  
  return (
    <Styled.Container>
      <p>Fltros:</p>
      <Styled.FilterFirstSection>
        <Filter 
          action='MUDAR_ANO' 
          filterDescription='Ano de Abertura' 
          filterOptionsData={yearOptionsData}
        />

        <Filter 
          action='MUDAR_MES' 
          filterDescription='Mês' 
          filterOptionsData={monthOptionsData}
        />
        
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