import React from "react"
import { CreateTableAtividade } from "../../tabelas/atividade"
import './style.css'

export default () => {

  return(
    <div className="content-tables" style={{
      height: '52vh',
      marginBottom: '1rem',
    }}>
      <div className="content-dataTables" style={{
        paddingBottom: '3.5rem'
      }}>
        <p>{`Empresas Ativas Por Atividade `}</p>
        <CreateTableAtividade quantidade_linhas={10} />
      </div>
    </div>
  )
}