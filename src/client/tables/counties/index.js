import React, { useContext, useState } from "react"
import { CSVLink } from "react-csv"

import { ContextGlobal } from "../../../contexts/GlobalContext/context" 
import { CreateTable } from "../../../components/table/model" 
import CapitalSocial from "../capitalSocial"
import { AlternationTablesStyle } from "./styled"
import './style.css'

export default ({arr_data_counties = [], total_quantity, arr_data_capital = []}) => {

  const context = useContext(ContextGlobal)
  const [popupVisible, setPopoupVisible] = useState(false);
    
    const dataToDownload = [
      ['municipio', 'quantidade'],
      ...arr_data_counties
    ]

  return(
    <AlternationTablesStyle stateempresasAbertas={context.state.empresasAbertas}>
      <div className="municipio">
        {(window.innerWidth >= 320 && window.innerWidth < 768) ? null : <div className="total-empresasAbertas">
          <p>{`Total de Empresas ${context.state.empresasAbertas ? 'Abertas' : 'Ativas'}`}</p>
          <p>{total_quantity.toLocaleString('pt-br')}</p>
        </div>
        }
          <div className='table'>
            <p>
                <div style={{
                    position: 'absolute',
                    background: '#666666',
                    right: '40px',
                    top: '2px',
                    fontSize: '.6rem',
                    padding: '.2rem',
                    borderRadius: '20%',
                    display: popupVisible ? 'block' : 'none'
                }}>
                    Baixar CSV
                </div>
                {`Empresas ${context.state.empresasAbertas ? 'Abertas' : 'Ativas'} Por Município`}
                <CSVLink className='icon-download-csv' data={dataToDownload} filename={"municipios"}
                    onMouseOver={() => setPopoupVisible(true)}
                    onMouseOut={() => setPopoupVisible(false)}  > 
                    <svg style={{
                      maxWidth: '35px'
                    }} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><g data-name="Layer 23"><path d="M21 31H8a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3h13a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3ZM8 21a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1ZM25 16H15a1 1 0 0 1-.92-.62 1 1 0 0 1 .21-1.09l10-10a1 1 0 0 1 1.09-.21A1 1 0 0 1 26 5v10a1 1 0 0 1-1 1Zm-7.59-2H24V7.41Z" fill="#ffffff" class="fill-000000"></path><path d="M10.78 27.29a2.49 2.49 0 0 1-2.55-2.55 2.48 2.48 0 0 1 2.55-2.55 2.61 2.61 0 0 1 1.22.31 2.32 2.32 0 0 1 .88.85l-.84.48a1.25 1.25 0 0 0-.51-.51 1.51 1.51 0 0 0-.76-.19 1.52 1.52 0 0 0-1.15.45 1.75 1.75 0 0 0 0 2.32 1.51 1.51 0 0 0 1.15.44 1.61 1.61 0 0 0 .76-.18 1.2 1.2 0 0 0 .51-.51l.84.48A2.32 2.32 0 0 1 12 27a2.44 2.44 0 0 1-1.22.29ZM15.15 27.29a2.16 2.16 0 0 1-1.22-.29 1.69 1.69 0 0 1-.7-.88l.82-.48a1.12 1.12 0 0 0 1.13.74 1 1 0 0 0 .6-.14.47.47 0 0 0 .19-.37.45.45 0 0 0-.24-.41 3.53 3.53 0 0 0-.82-.31 5.15 5.15 0 0 1-.56-.19 2.68 2.68 0 0 1-.45-.27 1.07 1.07 0 0 1-.35-.41 1.38 1.38 0 0 1-.12-.59 1.32 1.32 0 0 1 .47-1.06 1.76 1.76 0 0 1 1.14-.4 1.92 1.92 0 0 1 1.05.29 2 2 0 0 1 .7.81l-.81.47a1 1 0 0 0-.94-.63.73.73 0 0 0-.47.14.44.44 0 0 0-.17.35.45.45 0 0 0 .19.38 2.77 2.77 0 0 0 .74.31l.34.11.31.11a1.72 1.72 0 0 1 .31.16 1.51 1.51 0 0 1 .25.18.93.93 0 0 1 .21.25 1.42 1.42 0 0 1 .13.3 1.6 1.6 0 0 1 .05.39 1.31 1.31 0 0 1-.49 1.08 2 2 0 0 1-1.29.36ZM18.63 27.19 17 22.29h1l1.2 3.77 1.19-3.77h1.05l-1.65 4.9Z" fill="#ffffff" class="fill-000000"></path><path d="M40 43h-6.57a1 1 0 0 1 0-2H40a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H25.41L16 15.41V20a1 1 0 0 1-2 0v-5a1 1 0 0 1 .29-.71l10-10A1 1 0 0 1 25 4h15a3 3 0 0 1 3 3v33a3 3 0 0 1-3 3Z" fill="#ffffff" class="fill-000000"></path><path d="M30.57 43H17a3 3 0 0 1-3-3V30a1 1 0 0 1 2 0v10a1 1 0 0 0 1 1h13.57a1 1 0 0 1 0 2Z" fill="#ffffff" class="fill-000000"></path><path d="M32 45a1 1 0 0 1-.81-.42l-5-7A1 1 0 0 1 27 36h1v-5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v5h1a1 1 0 0 1 .81 1.58l-5 7A1 1 0 0 1 32 45Zm-3.06-7L32 42.28 35.06 38H35a1 1 0 0 1-1-1v-5h-4v5a1 1 0 0 1-1 1Z" fill="#ffffff" class="fill-000000"></path></g></svg>
                </CSVLink>
            </p>
            <CreateTable arr_dados={arr_data_counties} table_name='Município' />
          </div>
        {!context.state.empresasAbertas && <CapitalSocial arr_data_capital={arr_data_capital} />}
      </div>
    </AlternationTablesStyle>
  )
}