import React, { useContext, useEffect, useState } from "react"
import { ContextGlobal } from '../../../contexts/GlobalContext/context'
import { getDataEmpresasAbertas, getDataEmpresasAtivas } from '../../../services/pinot'
import { CreateTable } from '../../tabelas'
import './style.css'

export default () => {

  const context = useContext(ContextGlobal)
  const [quantidade, setQuantidade] = useState(null)

  useEffect(() => {
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
  }, [context]);

  return(
    <div className="content-municipio">
      {(window.innerWidth >= 320 && window.innerWidth < 768) ? null : <div className="total-empresasAbertas">
        <p>{`Total de Empresas ${context.state.empresasAbertas ? 'Abertas' : 'Ativas'}`}</p>
        <p>{quantidade !== null && quantidade.toLocaleString('pt-br')}</p>
      </div> 
      }
      <div>
        <CreateTable />
      </div>
    </div>
  )
}