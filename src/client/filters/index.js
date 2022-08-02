import React, { useEffect, useState, useContext } from "react"

import { ContextGlobal } from '../../contexts/GlobalContext/context'
import FiLter from '../../components/filter/model'
import * as action from '../../contexts/GlobalContext/actions'

export default ({ data }) => {

  const context = useContext(ContextGlobal)

  let [filtersParsed] = useState({})
  const [validMonths, setValidMonthss] = useState([])
  const [ano, setAno] = useState([])

  const year = (new Date().getMonth() >= 1 && new Date().getDate() >= 1) ? new Date().getFullYear() : new Date().getFullYear()-1

  const set_ano = () => {
    let arrAno = []
    for (let index = 2014; index <= year; index++) {
      arrAno.unshift({
        Country: index, label: index
      })
    }
    setAno(arrAno)
  }

  if(data !== undefined)
  for (const key in data.filtersData) {
    const allFilters = []

    data.filtersData[key].forEach((element, index) => {
      allFilters.push({
        Country: element[0],
        id: index
      })
    })
    
    filtersParsed = {
      ...filtersParsed,
      [key]: allFilters
    }
  }

  useEffect(() => {
    const monthlyFilterBuilder = () => {
      const allMonths = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
      const allValidMonths = []

      if(context.state.ano < new Date().getFullYear()) {
        allMonths.forEach((month, index) => {
          allValidMonths.push({
            Country: month,
            label: index + 1
          })
        })
      } else {
        for (let monthIndex = 0; monthIndex <= new Date().getMonth(); monthIndex++) {
          allValidMonths.push({
            Country: allMonths[monthIndex],
            label: monthIndex + 1
          })
        }
      }
      setValidMonthss(allValidMonths)
    }

    set_ano()
    monthlyFilterBuilder()
  }, [context])

  return(
    filtersParsed !== {} && (
      <div className="content" id="content-filtros">
        <div className="all-filtros">
          <div className="header-filters">
            <p className="txt-filtros">Filtros:</p>
          </div>
          <div className="secao-topo">
          {context.state.empresasAbertas !== false &&
            <FiLter
              descriptionFilter='Ano de Abertura:'
              options={ano}
              singleSelect
              showCheckbox={false}
              placeholder={context.state.ano}
              action={action.MUDAR_ANO}
            />
          }
            {context.state.empresasAbertas && <FiLter
              descriptionFilter='Mês:'
              options={validMonths}
              action={action.MUDAR_MES}
            />}
            <FiLter
              descriptionFilter='Setor de Atuação:'
              options={filtersParsed.setor}
              action={action.MUDAR_SETOR}
            />
            <FiLter
              descriptionFilter='Municipio:'
              options={filtersParsed.municipio_empresa}
              action={action.MUDAR_MUNICIPIO}
            />
          </div>
          <div className="secao-bottom">
            <FiLter
              descriptionFilter='Seção de Atividade:'
              options={filtersParsed.secao_atividade}
              action={action.MUDAR_SECAO_ATIVIDADE}
            />
            <FiLter
              descriptionFilter='Porte da Empresa:'
              options={filtersParsed.porte}
              action={action.MUDAR_PORTE}
            />
            <FiLter
              descriptionFilter='Atividade:'
              options={filtersParsed.descricao_atividade}
              action={action.MUDAR_ATIVIDADE}
            />
            <FiLter
              descriptionFilter='Natureza:'
              options={filtersParsed.natureza}
              action={action.MUDAR_NATUREZA}
            />
          </div>
        </div>
      </div>
    )
  )
}