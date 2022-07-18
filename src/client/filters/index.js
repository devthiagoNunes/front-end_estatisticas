import React, { useEffect, useState, useContext } from "react"

import { getFilter } from '../../services/pinot'
import { ContextGlobal } from '../../contexts/GlobalContext/context'
import FiLter from '../../components/filter/model'
import * as action from '../../contexts/GlobalContext/actions'

export default () => {

  const context = useContext(ContextGlobal)

  const [filtrosPorte, setFiltrosPorte] = useState([])
  const [filtrosSetor, setFiltrosSetor] = useState([])
  const [filtrosNatureza, setFiltrosNatureza] = useState([])
  const [filtrosSecaoAtividade, setFiltrosSecaoAtividade] = useState([])
  const [filtrosMunicipio, setFiltrosMunicipio] = useState([])
  const [filtrosDescricaoAtividade, setFiltrosDescricaoAtividade] = useState([])
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

  useEffect(() => {

    const getFiltros_Porte = async () => {
      const get_filtros_porte =  await getFilter(context, '/porte')

      let options_filters = []
      get_filtros_porte.map((arr, index) => (
        options_filters.push({
          Country: arr[0],
          id: index
        })
      ))
      setFiltrosPorte(options_filters)
    }

    const getFiltros_Setor = async () => {
      const get_filtros_setor =  await getFilter(context, '/setor')

      let options_filters = []
      get_filtros_setor.map((arr, index) => (
        options_filters.push({
          Country: arr[0],
          id: index
        })
      ))
      setFiltrosSetor(options_filters)
    }

    const getFiltros_Natureza = async () => {
      const get_filtros_natureza =  await getFilter(context, '/natureza')

      let options_filters = []
      get_filtros_natureza.map((arr, index) => (
        options_filters.push({
          Country: arr[0],
          id: index
        })
      ))
      setFiltrosNatureza(options_filters)
    }

    const getFiltros_SecaoAtividade = async () => {
      const get_filtros_secao_atividade = await getFilter(context, '/secao_atividade')

      let options_filters = []
      get_filtros_secao_atividade.map((arr, index) => (
        options_filters.push({
          Country: arr[0],
          id: index
        })
      ))
      setFiltrosSecaoAtividade(options_filters)
    }

    const getFiltros_municipio = async () => {
      const get_filtros_municipio =  await getFilter(context, '/municipio_empresa')

      let options_filters = []
      get_filtros_municipio.map((arr, index) => (
        options_filters.push({
          Country: arr[0],
          id: index
        })
      ))
      setFiltrosMunicipio(options_filters)
    }

    const getFiltros_descricaoAtividade = async () => {
      const get_filtros_descticao_atividade =  await getFilter(context, '/descricao_atividade')

      let options_filters = []
      get_filtros_descticao_atividade.map((arr, index) => (
        options_filters.push({
          Country: arr[0],
          id: index
        })
      ))
      setFiltrosDescricaoAtividade(options_filters)
    }

    const monthlyFilterBuilder = () => {
      const allMonths = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
      const allValidMonths = []

      if(context.state.ano < new Date().getFullYear()) {
        allMonths.forEach((month, index) => {
          allValidMonths.push({
            Country: month,
            label: index
          })
        })
      } else {
        for (let monthIndex = 0; monthIndex <= new Date().getMonth(); monthIndex++) {
          allValidMonths.push({
            Country: allMonths[monthIndex],
            label: monthIndex
          })
        }
      }
      setValidMonthss(allValidMonths)
    }

    set_ano()
    getFiltros_Porte()
    getFiltros_Setor()
    getFiltros_Natureza()
    getFiltros_SecaoAtividade()
    getFiltros_municipio()
    getFiltros_descricaoAtividade()
    monthlyFilterBuilder()
    //eslint-disable-next-line
  }, [context])

  return(
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
              showCheckbox={false}
              placeholder={context.state.ano}
              action={action.MUDAR_ANO}
            />
          }
            {context.state.empresasAbertas && <FiLter
              descriptionFilter='Mês:'
              options={validMonths}
              selectionLimit={1}
              action={action.MUDAR_MES}
            />}
            <FiLter
              descriptionFilter='Setor de Atuação:'
              options={filtrosSetor}
              action={action.MUDAR_SETOR}
            />
            <FiLter
              descriptionFilter='Municipio:'
              options={filtrosMunicipio}
              action={action.MUDAR_MUNICIPIO}
            />
          </div>
          <div className="secao-bottom">
            <FiLter
              descriptionFilter='Seção de Atividade:'
              options={filtrosSecaoAtividade}
              action={action.MUDAR_SECAO_ATIVIDADE}
            />
            <FiLter
              descriptionFilter='Porte da Empresa:'
              options={filtrosPorte}
              action={action.MUDAR_PORTE}
            />
            <FiLter
              descriptionFilter='Atividade:'
              options={filtrosDescricaoAtividade}
              action={action.MUDAR_ATIVIDADE}
            />
            <FiLter
              descriptionFilter='Natureza:'
              options={filtrosNatureza}
              action={action.MUDAR_NATUREZA}
            />
          </div>
        </div>
      </div>
  )
}