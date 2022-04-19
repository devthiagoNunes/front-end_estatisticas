import React, { useContext, useState } from 'react'
import Header from '../../components/Header/Header'
import Filtros from '../../components/Filtros'
import Municipio from '../../components/Graficos/municipio'
import Mes from "../../components/Graficos/mes"
import Botoes from '../../components/Botoes'
import Porte from '../../components/Graficos/tipo-empresa/porte'
import Setor from '../../components/Graficos/tipo-empresa/setor'
import Natureza from '../../components/Graficos/tipo-empresa/natureza'
import AtividadeEmpresa from '../../components/Graficos/tipo-empresa/atividade-empresa'
import { ContextGlobal } from '../../contexts/GlobalContext/context'
import s from './Layout.module.scss'
import './style.css'
import './styleGlobal.css'
import { getDataEmpresasAbertas, getDataEmpresasAtivas } from '../../services/pinot'

export default ({tipo}) => {
  const context = useContext(ContextGlobal)
  const [quantidade, setQuantidade] = useState(null)

  const getQtdAbertas = async () => {
    var filtros = {classificacao: "", ...context.state};
    const response = await getDataEmpresasAbertas(filtros);
    if(context.state.empresasAbertas == true) await setQuantidade(response.values[0].toLocaleString())
  }

  const getQtdAtivas = async () => {
    var filtros = {classificacao: "", ...context.state};
    const response = await getDataEmpresasAtivas(filtros);
    if(context.state.empresasAbertas == false) await setQuantidade(response.values[0]);
  }

  getQtdAbertas()
  getQtdAtivas()

  return (
      <div>
        <div className={s.wrap}>
          <Header />
          <Filtros />
          <div className='main'>
            <Botoes tipo={tipo} />
            <div className='content-data'>
              <div className='content-tipoEmpresa'>
                {(window.innerWidth >= 320 && window.innerWidth < 768) ? <div className="total-empresasAbertas">
                  <p>{`Total de Empresas ${context.state.empresasAbertas ? 'Abertas' : 'Ativas'}`}</p>
                  <p>{quantidade !== null && quantidade.toLocaleString('pt-br')}</p>
                </div> : null}
                <div className='tipoEmpresa'>
                  <Porte />
                  {context.state.empresasAbertas == true && <Setor />}
                  {context.state.empresasAbertas == false && <AtividadeEmpresa />}
                  <Natureza />
                </div>
              <Municipio />
              </div>
              {context.state.empresasAbertas !== false && <Mes />}
            </div>
          </div>
        </div>
      </div>
  );
}
