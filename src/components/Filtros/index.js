import React, { useEffect, useState, useContext } from "react"

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
    for (let index = 2015; index <= content.state.ano; index++) {
      arrAno.push(index)      
    }
    setAno(arrAno)
  }

  useEffect(() => {
    const getFiltros_Porte = async () => {
      const get_filtros_porte =  await getFiltrosPorte()
      setFiltrosPorte(get_filtros_porte)
    }

    const getFiltros_Setor = async () => {
      const get_filtros_setor  =  await getFiltrosSetor()
      setFiltrosSetor(get_filtros_setor)
    }

    const getFiltros_Natureza = async () => {
      const get_filtros_natureza  =  await getFiltrosNatureza()
      setFiltrosNatureza(get_filtros_natureza)
    }
    
    const getFiltros_SecaoAtividade = async () => {
      const get_filtros_secaoAtividade  =  await getFiltrosSecaoAtividade()
      setFiltrosSecaoAtividade(get_filtros_secaoAtividade)
    }

    const getFiltros_municipio = async () => {
      const get_filtros_municipio  =  await getFiltrosMunicipio()
      setFiltrosMunicipio(get_filtros_municipio)
    }

    const getFiltros_descricaoAtividade = async () => {
      const get_descricao_atividade  =  await getFiltrosDescricaoAtividade()
      setFiltrosDescricaoAtividade(get_descricao_atividade)
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
              <select className="filtros" onClick={(e) => {
                if(e.target.value !== valorOptionAno) {
                  const initial_date = new Date()
                  const date = initial_date.getMonth() >= 2 ? initial_date.getFullYear() : initial_date.getFullYear()-1
                  context.dispatch({type: action.MUDAR_ANO, payload: e.target.value === 'Selecionar' ? date : e.target.value})
                  setValorOptionAno(e.target.value)
                }
              }}>
                <option defaultValue={"Selecionar"}>Selecionar</option>
                {ano.map((ano, index) => (
                  <option key={index}>{ano}</option>
                ))}
              </select>
            </div>
            }
            <div>
              <p>Porte da Empresa:</p>
              <select className="filtros" onClick={(e) => {
                if(e.target.value !== valorOptionPorte) {
                  setValorOptionPorte(e.target.value)
                  context.dispatch({type: action.MUDAR_PORTE, payload: e.target.value === 'Selecionar' ? '' : e.target.value})
                }
              }}>
                <option defaultValue={"Selecionar"}>Selecionar</option>
                {filtrosPorte.map((arr, index) => (
                  <option key={index}>{arr[0]}</option>
                ))}
              </select>
            </div>
            <div>
              <p>Setor de Atuação:</p>
              <select className="filtros" onClick={(e) => {
                if(e.target.value !== valorOptionSetor) {
                  setValorOptionSetor(e.target.value)
                  context.dispatch({type: action.MUDAR_SETOR, payload: e.target.value === 'Selecionar' ? '' : e.target.value})
                }
              }}>
                <option defaultValue={"Selecionar"}>Selecionar</option>
                {filtrosSetor.map((arr, index) => (
                  <option key={index}>{ arr[0]}</option>
                ))}
              </select>
            </div>
            <div>
              <p>Municipio:</p>
              <select className="filtros" onClick={(e) => {
                if(e.target.value !== valorOptionMunicipio) {
                  setValorOptionMunicipio(e.target.value)
                  context.dispatch({type: action.MUDAR_MUNICIPIO, payload: e.target.value === 'Selecionar' ? '' : e.target.value})
                }
              }}>
                <option defaultValue={"Selecionar"}>Selecionar</option>
                {filtrosMunicipio.map((arr, index) => (
                  <option key={index}>{arr}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="secao-bottom">
            <div>
              <p>Seção de Atividade:</p>
              <select className="filtros" onClick={(e) => {
                if(e.target.value !== valorOptionSecaoAtividade) {
                  setValorOptionSecaoAtividade(e.target.value)
                  context.dispatch({type: action.MUDAR_SECAO_ATIVIDADE, payload: e.target.value === 'Selecionar' ? '' : e.target.value})
                }
              }}>
                <option defaultValue={"Selecionar"}>Selecionar</option>
                {filtrosSecaoAtividade.map((arr, index) => (
                  <option key={index}>{arr[0]}</option>
                ))}
              </select>
            </div>
            <div>
              <p>Atividade:</p>
              <select className="filtros"  onClick={(e) => {
                if(e.target.value !== valorOptionAtividade) {
                  setValorOptionAtividade(e.target.value)
                  context.dispatch({type: action.MUDAR_ATIVIDADE, payload: e.target.value === 'Selecionar' ? '' : e.target.value})
                }
              }}>
                <option defaultValue={"Selecionar"}>Selecionar</option>
                {filtrosDescricaoAtividade.map((arr, index) => (
                  <option key={index}>{arr[0]}</option>
                ))}
              </select>
            </div>
            <div>
              <p>Natureza:</p>
              <select className="filtros" onClick={(e) => {
                if(e.target.value !== valorOptionSetor) {
                  setValorOptionSetor(e.target.value)
                  context.dispatch({type: action.MUDAR_NATUREZA, payload: e.target.value === 'Selecionar' ? '' : e.target.value})
                }
              }}>
                <option defaultValue={"Selecionar"}>Selecionar</option>
                {filtrosNatureza.map((arr, index) => (
                  <option key={index}>{arr[0]}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
  )
}