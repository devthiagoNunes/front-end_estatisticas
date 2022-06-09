import React, { useEffect, useState, useContext } from "react"
import {Multiselect} from 'multiselect-react-dropdown'

import {getFiltrosPorte, getFiltrosSetor, getFiltrosNatureza, getFiltrosSecaoAtividade, getFiltrosMunicipio, getFiltrosDescricaoAtividade, getFilter } from '../../services/pinot'
import { ContextGlobal } from '../../contexts/GlobalContext/context'
import * as action from '../../contexts/GlobalContext/actions'
import './style.css'

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
      const get_filtros_setor  =  await getFilter(context, '/setor')
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
      const get_filtros_natureza  =  await getFilter(context, '/natureza')
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
      const get_filtros_secaoAtividade  =  await getFilter(context, '/secaoAtividade')
      let options_filters = []
      get_filtros_secaoAtividade.map((arr, index) => (
        options_filters.push({
          Country: arr[0],
          id: index
        })
      ))
      setFiltrosSecaoAtividade(options_filters)
    }

    const getFiltros_municipio = async () => {
      const get_filtros_municipio  =  await getFilter(context, '/municipios')
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
      const get_descricao_atividade  =  await getFilter(context, '/descricaoAtividade')
      let options_filters = []
      get_descricao_atividade.map((arr, index) => (
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
            {context.state.empresasAbertas !== false && <div>
              <p>Ano de Abertura:</p>
              <Multiselect
                className='filtros'
                options={ano}
                singleSelect={true}
                displayValue="Country"
                placeholder={context.state.ano} 
                onSelect={(e) => context.dispatch({type:action.MUDAR_ANO, payload: e})}
                onRemove={(e) => context.dispatch({type:action.MUDAR_ANO, payload: e})}
              />
            </div>
            }
            <div>
              <p>Mês:</p>
              <Multiselect
                className='filtros'
                options={validMonths}
                displayValue="Country"
                placeholder={'Selecionar'}
                showCheckbox={true}
                onSelect={(e) => context.dispatch({type:action.MUDAR_MES, payload: e})}
                onRemove={(e) => context.dispatch({type:action.MUDAR_MES, payload: e})}
              />
            </div>
            <div>
              <p>Setor de Atuação:</p>
              <Multiselect
                className='filtros'
                options={filtrosSetor}
                displayValue="Country"
                placeholder={'Selecionar'} 
                showCheckbox={true}
                onSelect={(e) => context.dispatch({type:action.MUDAR_SETOR, payload: e})}
                onRemove={(e) => context.dispatch({type:action.MUDAR_SETOR, payload: e})}
              />
            </div>
            <div>
              <p>Municipio:</p>
              <Multiselect
                className='filtros'
                options={filtrosMunicipio}
                displayValue="Country"
                placeholder={'Selecionar'} 
                showCheckbox={true}
                onSelect={(e) => context.dispatch({type:action.MUDAR_MUNICIPIO, payload: e})}
                onRemove={(e) => context.dispatch({type:action.MUDAR_MUNICIPIO, payload: e})}
              />
            </div>
          </div>
          <div className="secao-bottom">
            <div>
              <p>Seção de Atividade:</p>
              <Multiselect
                className='filtros'
                options={filtrosSecaoAtividade}
                displayValue="Country"
                placeholder={'Selecionar'}
                showCheckbox={true}
                onSelect={(e) => context.dispatch({type:action.MUDAR_SECAO_ATIVIDADE, payload: e})}
                onRemove={(e) => context.dispatch({type:action.MUDAR_SECAO_ATIVIDADE, payload: e})}
              />
            </div>
            <div>
              <p>Porte da Empresa:</p>
              <Multiselect
                className='filtros'
                options={filtrosPorte}
                displayValue="Country"
                placeholder={'Selecionar'} 
                showCheckbox={true}
                onSelect={(e) => context.dispatch({type:action.MUDAR_PORTE, payload: e})}
                onRemove={(e) => context.dispatch({type:action.MUDAR_PORTE, payload: e})}
              />
            </div>
            <div>
              <p>Atividade:</p>
              <Multiselect
                className='filtros'
                options={filtrosDescricaoAtividade}
                displayValue="Country"
                placeholder={'Selecionar'}
                showCheckbox={true}
                onSelect={(e) => context.dispatch({type:action.MUDAR_ATIVIDADE, payload: e})}
                onRemove={(e) => context.dispatch({type:action.MUDAR_ATIVIDADE, payload: e})}
              />
            </div>
            <div>
              <p>Natureza:</p>
              <Multiselect
                className='filtros'
                options={filtrosNatureza}
                displayValue="Country"
                placeholder={'Selecionar'}
                showCheckbox={true}
                onSelect={(e) => context.dispatch({type:action.MUDAR_NATUREZA, payload: e})}
                onRemove={(e) => context.dispatch({type:action.MUDAR_NATUREZA, payload: e})}
              />
            </div>
          </div>
        </div>
      </div>
  )
}