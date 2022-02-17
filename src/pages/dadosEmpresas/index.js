import React, { useContext, useEffect, useState } from 'react'
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
import { getAbertasAnual, getDataEmpresasAtivas } from '../../services/pinot'

export default ({tipo}) => {
  const context = useContext(ContextGlobal)
  const [quantidade, setQuantidade] = useState(null)
  const [municipios, setMunicipio] = useState([])

  useEffect(() => {
    const get_abertura_ano = async () => {
      switch (context.state.empresasAbertas) {
        case false:
          const quantidade_ativas =  await getDataEmpresasAtivas('municipio_empresa', context)
          setQuantidade(quantidade_ativas.numDocsScanned)
          return

        default:
          const abertura_ano =  await getAbertasAnual('inicio_atividades', context)
          setQuantidade(abertura_ano)
      }
    }

    get_abertura_ano()
  }, [context])

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
                {(window.innerWidth >= 320 && window.innerWidth < 768) && <div className="total-empresasAbertas">
                  <p>{`Total de Empresas ${context.state.empresasAbertas ? 'Abertas' : 'Ativas'}`}</p>
                  <p>{quantidade !== null && quantidade.toLocaleString('pt-br')}</p>
                </div>
                }
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
