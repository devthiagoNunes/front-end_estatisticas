import React from "react";
import './style.css'

export default () => {
  return (
    <div className='header'>
      <section>
        <h2>PAINEL DE EMPRESAS DO MARANHÃO - {window.innerWidth == 320 ? 'JUCEMA' : 'Junta Comercial do Maranhão'}</h2>
        <img src="http://api.jucema.ma.gov.br/files/1632146487_logo.svg" alt="logo-jucema"/>
        <svg xmlns="http:www.w3.org/2000/svg" height="30px" viewBox="0 0 24 24" width="30px" fill="#fff"
          onClick={() => {
            document.getElementById('content-filtros').style.display = 'block'
          }}
        ><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" className="menu-mobile" 
        />
        </svg>
      </section>
    </div>
  )
}