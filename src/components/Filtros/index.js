import React, { useEffect, useState } from "react"

import {getFiltrosPorte, getFiltrosSetor, getFiltrosNatureza, getFiltrosSecaoAtividade, getFiltrosMunicipio, getFiltrosDescricaoAtividade} from '../../services/filtros'
import './style.css'

export default () => {

  const [filtrosPorte, setFiltrosPorte] = useState([])
  const [filtrosSetor, setFiltrosSetor] = useState([])
  const [filtrosNatureza, setFiltrosNatureza] = useState([])
  const [filtrosSecaoAtividade, setFiltrosSecaoAtividade] = useState([])
  const [filtrosMunicipio, setFiltrosMunicipio] = useState([])
  const [filtrosDescricaoAtividade, setFiltrosDescricaoAtividade] = useState([])
  const [ano] = useState([])

  const camposFiltros = ['inicio_atividade', 'porte', 'setor', 'municipio_empresa', 'secao_atividade', 'descricao_atividade', 'natureza']

  const set_ano = () => {
    for (let index = 2015; index <= new Date().getFullYear(); index++) {
      ano.push(index)      
    }
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
  
  return(
      <div className="content" id="content-filtros">
        <div className="all-filtros">
          <div className="header-filters">
            <p className="txt-filtros">Filtros:</p>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" opacity=".87"/><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z" className="close-filters"
            onClick={() => {
              document.getElementById('content-filtros').style.display = 'none'
            }}/></svg>
          </div>  
          <div className="secao-topo">
            <div>
              <p>Ano de Abertura:</p>
              <select className="filtros-topo">
                <option defaultValue={"Selecionar"}>Selecionar</option>
                {ano !== undefined ? ano.map(ano => (
                  <option>{ano}</option>
                )) : null}
              </select>
            </div>
            <div>
              <p>Porte da Empresa:</p>
              <select className="filtros-topo">
                <option defaultValue={"Selecionar"}>Selecionar</option>
                {filtrosPorte.map((arr, index) => (
                  <option key={index}>{arr[0]}</option>
                ))}
              </select>
            </div>
            <div>
              <p>Setor de Atuação:</p>
              <select className="filtros-topo">
                <option defaultValue={"Selecionar"}>Selecionar</option>
                {filtrosSetor.map((arr, index) => (
                  <option key={index}>{ arr[0]}</option>
                ))}
              </select>
            </div>
            <div>
              <p>Municipio:</p>
              <select className="filtros-topo">
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
              <select className="filtros-topo">
                <option defaultValue={"Selecionar"}>Selecionar</option>
                {filtrosSecaoAtividade.map((arr, index) => (
                  <option key={index}>{arr[0]}</option>
                ))}
              </select>
            </div>
            <div>
              <p>Atividade:</p>
              <select className="filtros-topo">
                <option defaultValue={"Selecionar"}>Selecionar</option>
                {filtrosDescricaoAtividade.map((arr, index) => (
                  <option key={index}>{arr[0]}</option>
                ))}
              </select>
            </div>
            <div>
              <p>Natureza:</p>
              <select className="filtros-topo">
                <option defaultValue={"Selecionar"}>Selecionar</option>
                {filtrosNatureza.map(arr => (
                  <option>{arr[0]}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
  )
}