import React from 'react';
import Header from '../../components/Header/Header';
import Filtros from '../../components/Filtros'
import Municipio from '../../components/Graficos/municipio';
import Mes from '../../components/Graficos/mes';
import Botoes from '../../components/Botoes';
import GraficoEmpresa from '../../components/Graficos/tipo-empresa';
import s from './Layout.module.scss';
import '../empresasAbertas/style.css'
import './styleGlobal.css'

export default ({setState, data, tipo}) => {
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
              </div>
              <Municipio tipo={tipo} total={data[3].quantidade} /> 
            </div>
            <Mes tipo={tipo} categoria={data[3]} />
          </div>
        </div>
      </div>
    </div>
  );
}
