import React, { useContext, useEffect, useState } from "react"
import { CreateTable } from '../../tabelas/model_table';
import { ContextGlobal } from '../../../contexts/GlobalContext/context';
import { getDataEmpresasAtivas } from '../../../services/pinot';
import './style.css'

export default () => {

  const context = useContext(ContextGlobal)
  const [atividade, setAtividade] = useState({
    classificacao: "Atividade", empresas: [], quantidade: []
  })

  useEffect(() => {
    const get_ativas_secao_atividade = async () => {
      //eslint-disable-next-line
      switch (context.state.empresasAbertas) {
        case false:
          var filtros = {classificacao: "secao_atividade", ...context.state};
          const quantidade_ativas =  await getDataEmpresasAtivas(filtros)
          setAtividade(quantidade_ativas.values);
          return
      }
    }

    get_ativas_secao_atividade()
  }, [context])

  return(
    <div className="content-dataTables">
      <div className="table">
        <p>{`Empresas Ativas Por Atividade `}</p>
        <CreateTable arr_dados={atividade} table_name='Atividade' />
      </div>
    </div>
  )
}