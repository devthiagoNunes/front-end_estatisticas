import React, { useState } from "react"
import {Link} from 'react-router-dom'
import './style.css'

export default ({setState, tipo}) => {

  let [bgColor, setBackGround] = useState(true)
  const alterState = (boolean) => setBackGround(boolean)

  return(
    <div className="content-buttons">
      <Link to='/estatisticas/empresas-abertas'>
        <div onClick={() => alterState(true)}>
          <button onClick={() => setState(true)} style={{
            color: tipo == 'Abertas' ? 'white' : '#007CC1',
            background: tipo == 'Abertas' ? '#007CC1' : 'white'
          }}>Empresas {tipo == 'Abertas' ? 'Abertas': 'Abertas'}</button>
        </div>
      </Link>
      
      <Link to='/estatisticas/empresas-ativas'>
        <div onClick={() => alterState(false)}>
          <button onClick={() => setState(false)} style={{
              color: tipo == 'Ativas' ? 'white' : '#007CC1',
              background: tipo == 'Ativas' ? '#007CC1' : 'white'
            }}>Empresas {tipo == 'Ativas' ? 'Ativas' : 'Ativas'}
          </button>
        </div>
      </Link>
    </div>
  )
}