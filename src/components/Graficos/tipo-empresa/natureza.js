import React, { useContext } from "react"
import { ContextGlobal } from '../../../contexts/GlobalContext/context'
import { CreateTableNatureza } from "../../tabelas/natureza"
import './style.css'

export default () => {

  const context = useContext(ContextGlobal)

  return(
    <div className="content-tables" style={{
      marginTop: '.5rem',
      marginBottom: '1rem',
    }}>
      <div className="content-dataTables" >
        <p>{`Empresas ${context.state.empresasAbertas ? 'Abertas' : 'Ativas'} Por Natureza`}</p>
        <CreateTableNatureza quantidade_linhas={10} />
      </div>
    </div>
  )
}