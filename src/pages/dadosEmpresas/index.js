import React from 'react'
import Header from '../../components/Header/Header'
import Filtros from '../../components/Filtros'
import Municipio from '../../components/Graficos/municipio'
import Mes from "../../components/Graficos/mes"
import Botoes from '../../components/Botoes'
import Porte from '../../components/Graficos/tipo-empresa/porte'
import Setor from '../../components/Graficos/tipo-empresa/setor'
import s from './Layout.module.scss'
import './style.css'
import './styleGlobal.css'

export default ({setState, tipo}) => {
  return (
    <div>
      <div className={s.wrap}>
        <Header />
        <Filtros />
        <div className='main'>
          <Botoes setState={setState} tipo={tipo} />
          <div className='content-data'>
            <div className='content-tipoEmpresa'>
              <div className='tipoEmpresa'>
                <Porte />
                <Setor />
              </div>
              <Municipio /> 
            </div>
            <Mes />
          </div>
        </div>
      </div>
    </div>
  );
}
