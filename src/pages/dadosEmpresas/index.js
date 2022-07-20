import React, { useContext, useEffect, useState } from 'react'
import Header from '../../client/Header'
import Filters from '../../client/filters'
import Mes from "../../client/graphics/mes"
import Botoes from '../../components/Botoes'
import GraphicCompany from '../../components/graphic/model'
import CompanyActivity from '../../client/tables/company-activity'
import CompanyNature from '../../client/tables/company-nature'
import Counties from '../../client/tables/counties'
import { ContextGlobal } from '../../contexts/GlobalContext/context'
import { allDataOfOpenCompanies } from '../../services/pinot'

import {AllCharts, LayoutStyle, TypeCompany} from './styled'
import './styleGlobal.css'

export default ({tipo}) => {
  const context = useContext(ContextGlobal)
  const [allDatas, setALldData] = useState(null)

  useEffect(() => {
    const datasOfOpenCompanies = async () => {
      const response = await allDataOfOpenCompanies(context.state)
      setALldData(response.data)
    }

    datasOfOpenCompanies()
  }, [context])

  return (
    <LayoutStyle empresasAbertas={context.state.empresasAbertas}>
      <Header />
      {allDatas !== null && <Filters /> }
      {allDatas !== null && <main>
        <Botoes tipo={tipo} />
        <AllCharts>
          <TypeCompany>
            {(window.innerWidth >= 320 && window.innerWidth < 768) ? <div className="total-empresasAbertas">
              <p>{`Total de Empresas ${context.state.empresasAbertas ? 'Abertas' : 'Ativas'}`}</p>
              <p>{allDatas.quantity[0][0].toLocaleString('pt-br')}</p>
            </div> : null}
            <section>
              <GraphicCompany classificationGraphic='porte' isVetical={true} arr_data_company={allDatas.porte} />
              {context.state.empresasAbertas == true && <GraphicCompany classificationGraphic='setor' arr_data_company={allDatas.setor} />}
              {context.state.empresasAbertas == false && <CompanyActivity arr_data_company_activity={allDatas.descricao_atividade} />}
              <CompanyNature arr_dada_nature_company={allDatas.natureza} />
            </section>
            <Counties arr_data_counties={allDatas.municipio_empresa} total_quantity={allDatas.quantity[0][0]} />  
          </TypeCompany>
          {context.state.empresasAbertas !== false && context.state.mes === '' && <Mes arr_data_month={allDatas.mes} />}
        </AllCharts>
      </main>}
    </LayoutStyle>
  );
}
