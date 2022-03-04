import React, { useContext } from "react"
import {Link} from 'react-router-dom'

import { ContextGlobal } from '../../contexts/GlobalContext/context'
import * as actions from '../../contexts/GlobalContext/actions'
import './style.css'

export default ({tipo}) => {

  const context = useContext(ContextGlobal)

  return(
    <div className="content-buttons">
      <Link to='/estatisticas/empresas-abertas'>
        <div onClick={() => context.dispatch({type: actions.LIMPAR_FILTROS})}>
          <button onClick={() => context.dispatch({type: actions.MUDAR_ESTADO_INICIAL_EMPRESAS, payload: true})}
            style={{
            color: tipo == 'Abertas' ? 'white' : '#007CC1',
            background: tipo == 'Abertas' ? '#007CC1' : 'white'
          }}>Empresas {tipo == 'Abertas' ? 'Abertas': 'Abertas'}</button>
        </div>
      </Link>
      
      <Link to='/estatisticas/empresas-ativas'>
        <div onClick={() => context.dispatch({type: actions.LIMPAR_FILTROS})}>
          <button onClick={() => context.dispatch({type: actions.MUDAR_ESTADO_INICIAL_EMPRESAS, payload: false})} style={{
              color: tipo == 'Ativas' ? 'white' : '#007CC1',
              background: tipo == 'Ativas' ? '#007CC1' : 'white'
            }}
            
            >Empresas {tipo == 'Ativas' ? 'Ativas' : 'Ativas'}
          </button>
        </div>
      </Link>
    </div>
  )
}