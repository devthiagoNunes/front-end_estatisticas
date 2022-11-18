import { Dispatch, SetStateAction, useState } from 'react'

import Logo from '../../assets/Governo-Maranhao-MA.png'

import * as Styled from './styled'

export type HeaderProps = {
  filtersVisible: boolean
  setFiltersVisible: Dispatch<SetStateAction<boolean>>
}

export const Header = ({ filtersVisible = false, setFiltersVisible }: HeaderProps) => {
  const widthScreen = window.innerWidth

  return (
    <Styled.Container>
      <Styled.Content>
        <h2>{widthScreen <= 540 ? 'PAINEL DE EMPRESAS DO MARANHÃO - Jucema' : 'PAINEL DE EMPRESAS DO MARANHÃO - Junta Comercial do Maranhão'}</h2>
        <img src={Logo} alt="logo-jucema"/>
        <svg xmlns="http:www.w3.org/2000/svg" height="30px" viewBox="0 0 24 24" width="30px" fill="#fff"
          onClick={() => setFiltersVisible(!filtersVisible)}
        ><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" className="menu-mobile" 
        />
        </svg>
      </Styled.Content>
    </Styled.Container>
  )
}