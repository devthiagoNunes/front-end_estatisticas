import React, { useEffect, useState, useContext } from "react"
import {Multiselect} from 'multiselect-react-dropdown'

import {getFiltrosPorte, getFiltrosSetor, getFiltrosNatureza, getFiltrosSecaoAtividade, getFiltrosMunicipio, getFiltrosDescricaoAtividade, getFiltersBuild} from '../../services/pinot'
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
  const [ano, setAno] = useState([])

  const set_ano = () => {
    let arrAno = []
    for (let index = 2014; index <= context.state.ano; index++) {
      arrAno.unshift({
        Country: index, label: index
      })     
    }
    setAno(arrAno)
  }

  useEffect(() => {
    const getFiltros_Porte = async () => {
      const get_filtros_porte =  await getFiltrosPorte()
      getFiltersBuild(context )

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
      const get_filtros_setor  =  await getFiltrosSetor()
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
      const get_filtros_natureza  =  await getFiltrosNatureza()
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
      const get_filtros_secaoAtividade  =  await getFiltrosSecaoAtividade()
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
      const get_filtros_municipio  =  await getFiltrosMunicipio()
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
      const get_descricao_atividade  =  await getFiltrosDescricaoAtividade()
      let options_filters = []
      get_descricao_atividade.map((arr, index) => (
        options_filters.push({
          Country: arr[0],
          id: index
        })
      ))
      setFiltrosDescricaoAtividade(options_filters)
    }

    set_ano()
    getFiltros_Porte()
    getFiltros_Setor()
    getFiltros_Natureza()
    getFiltros_SecaoAtividade()
    getFiltros_municipio()
    getFiltros_descricaoAtividade()
    //eslint-disable-next-line
  }, [])

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
                displayValue="Country"
                selectionLimit={1}
                placeholder={context.state.ano} 
                onSelect={(e) => context.dispatch({type:action.MUDAR_ANO, payload: e})}
                onRemove={(e) => context.dispatch({type:action.MUDAR_ANO, payload: e})}
              />
            </div>
            }
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