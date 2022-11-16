import { useState } from 'react'

import Logo from '../../assets/Governo-Maranhao-MA.png'

import * as Styled from './styled'

export type HeaderProps = {
  
}

export const Header = () => {
  const [filtersBlock, setFiltersBlock] = useState(false)

  return (
    <Styled.Container>
      <h2>PAINEL DE EMPRESAS DO MARANHÃO - Junta Comercial do Maranhão</h2>
      <img src={Logo} alt="logo-jucema"/>
      <svg xmlns="http:www.w3.org/2000/svg" height="30px" viewBox="0 0 24 24" width="30px" fill="#fff"
        onClick={() => {
          setFiltersBlock(!filtersBlock)
          document.getElementById('content-filtros').style.display = !filtersBlock ? 'block' : 'none'
        }}
      ><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" className="menu-mobile" 
      />
      </svg>
    </Styled.Container>
  )
}