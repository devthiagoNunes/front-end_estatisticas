import React, { useContext } from 'react'
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

export default ({tipo}) => {
  const context = useContext(ContextGlobal)

  return (
      <div>
        <div className={s.wrap}>
          <Header />
          <Filtros />
          <div className='main'>
            <Botoes tipo={tipo} />
            <div className='content-data'>
              <div className='content-tipoEmpresa'>
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
