import React, { useEffect, useState, useContext } from "react"
import {Multiselect} from 'multiselect-react-dropdown'

import {getFiltrosPorte, getFiltrosSetor, getFiltrosNatureza, getFiltrosSecaoAtividade, getFiltrosMunicipio, getFiltrosDescricaoAtividade} from '../../services/pinot'
import { ContextGlobal } from '../../contexts/GlobalContext/context'
import * as action from '../../contexts/GlobalContext/actions'
import './style.css'

export default () => {

  const content = useContext(ContextGlobal);

  const [filtrosPorte, setFiltrosPorte] = useState([])
  const [filtrosSetor, setFiltrosSetor] = useState([])
  const [filtrosNatureza, setFiltrosNatureza] = useState([])
  const [filtrosSecaoAtividade, setFiltrosSecaoAtividade] = useState([])
  const [filtrosMunicipio, setFiltrosMunicipio] = useState([])
  const [filtrosDescricaoAtividade, setFiltrosDescricaoAtividade] = useState([])
  const [ano, setAno] = useState([])

  const [valorOptionAno, setValorOptionAno] = useState('Selecionar')
  const [valorOptionPorte, setValorOptionPorte] = useState('Selecionar')
  const [valorOptionSetor, setValorOptionSetor] = useState('Selecionar')
  const [valorOptionMunicipio, setValorOptionMunicipio] = useState('Selecionar')
  const [valorOptionSecaoAtividade, setValorOptionSecaoAtividade] = useState('Selecionar')
  const [valorOptionAtividade, setValorOptionAtividade] = useState('Selecionar')

  const set_ano = () => {
    let arrAno = []
    let counter = 0
    for (let index = 2015; index <= content.state.ano; index++) {
      arrAno.push({
        Country: index,
        id: counter++
      })     
      counter++ 
    }
    setAno(arrAno)
  }

  useEffect(() => {
    const getFiltros_Porte = async () => {
      const get_filtros_porte =  await getFiltrosPorte()
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

    getFiltros_Porte()
    getFiltros_Setor()
    getFiltros_Natureza()
    getFiltros_SecaoAtividade()
    getFiltros_municipio()
    getFiltros_descricaoAtividade()
    set_ano()
  }, [])

  const context = useContext(ContextGlobal)

  return(
      <div className="content" id="content-filtros">
        <div className="all-filtros">
          <div className="header-filters">
            <p className="txt-filtros">Filtros:</p>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000" onClick={() => {
              document.getElementById('content-filtros').style.display = 'none'
            }}><path d="M0 0h24v24H0V0z" fill="none" opacity=".87"/><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z" className="close-filters"
            /></svg>
          </div>  
          <div className="secao-topo">
            {context.state.empresasAbertas !== false && <div>
              <p>Ano de Abertura:</p>
              <Multiselect
                options={ano}
                displayValue="Country"
                onSelect={(e) => context.dispatch({type:action.MUDAR_ANO, payload: e})}
                onRemove={(e) => context.dispatch({type:action.MUDAR_ANO, payload: e})}
                showCheckbox={true}
              />
            </div>
            }
            <div>
              <p>Porte da Empresa:</p>
              <Multiselect
                options={filtrosPorte}
                displayValue="Country"
                onSelect={(e) => context.dispatch({type:action.MUDAR_PORTE, payload: e})}
                onRemove={(e) => context.dispatch({type:action.MUDAR_PORTE, payload: e})}
              />
            </div>
            <div>
              <p>Setor de Atuação:</p>
              <Multiselect
                options={filtrosSetor}
                displayValue="Country"
                onSelect={(e) => context.dispatch({type:action.MUDAR_SETOR, payload: e})}
                onRemove={(e) => context.dispatch({type:action.MUDAR_SETOR, payload: e})}
              />
            </div>
            <div>
              <p>Municipio:</p>
              <Multiselect
                options={filtrosMunicipio}
                displayValue="Country"
                onSelect={(e) => context.dispatch({type:action.MUDAR_MUNICIPIO, payload: e})}
                onRemove={(e) => context.dispatch({type:action.MUDAR_MUNICIPIO, payload: e})}
              />
            </div>
          </div>
          <div className="secao-bottom">
            <div>
              <p>Seção de Atividade:</p>
              <Multiselect
                options={filtrosSecaoAtividade}
                displayValue="Country"
                onSelect={(e) => context.dispatch({type:action.MUDAR_SECAO_ATIVIDADE, payload: e})}
                onRemove={(e) => context.dispatch({type:action.MUDAR_SECAO_ATIVIDADE, payload: e})}
              />
            </div>
            <div>
              <p>Atividade:</p>
              <Multiselect
                options={filtrosDescricaoAtividade}
                displayValue="Country"
                onSelect={(e) => context.dispatch({type:action.MUDAR_ATIVIDADE, payload: e})}
                onRemove={(e) => context.dispatch({type:action.MUDAR_ATIVIDADE, payload: e})}
              />
            </div>
            <div>
              <p>Natureza:</p>
              <Multiselect
                options={filtrosNatureza}
                displayValue="Country"
                onSelect={(e) => context.dispatch({type:action.MUDAR_NATUREZA, payload: e})}
                onRemove={(e) => context.dispatch({type:action.MUDAR_NATUREZA, payload: e})}
              />
            </div>
          </div>
        </div>
      </div>
  )
}