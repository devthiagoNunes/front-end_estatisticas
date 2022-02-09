import React, { useContext, useEffect, useState } from "react"
import { ContextGlobal } from '../../../contexts/GlobalContext/context'
import { getDataEmpresasAtivas, getAbertas } from '../../../services/pinot'
import './style.css'

export default () => {

  const context = useContext(ContextGlobal)
  const [natureza, setNatureza] = useState([])

  useEffect(() => {
    const get_qntd_por_municipio = async () => {
      const response = await getAbertas('natureza', context)
      setNatureza(response)
    }

    const get_abertura_ano = async () => {
      switch (context.state.empresasAbertas) {
        case false:
          const quantidade_ativas =  await getDataEmpresasAtivas('natureza', context)
          setNatureza(quantidade_ativas.resultTable.rows)
          return
        case true:
          get_qntd_por_municipio()
      }
    }

    get_abertura_ano()
  }, [context])

  const colors = ['#4592E6', '#99c1de', '#bcd4e6', '#d7e3fc']

  return(
    <div className="content-tables" style={{
      marginTop: '.5rem',
      marginBottom: '1rem',
    }}>
      <div className="content-dataTables" >
        <p>{`Empresas ${context.state.empresasAbertas ? 'Abertas' : 'Ativas'} Por Natureza`}</p>
        <div className="content-table-empresas">
          <div className="tables-empresas" style={{
            overflowX: 'hidden',
            overflowY: context.state.empresasAbertas ? 'hidden' : 'scroll',
          }}>
            <table>
              <thead>
                <tr>
                  <th style={{
                    textAlign: 'center'
                  }}>Natureza da Empersa</th>
                  <th style={{
                    textAlign: 'center'
                  }}>Quantidade</th>
                </tr>
              </thead>
              {natureza.map((natureza, index) => (
                <tbody>
                  <tr key={index}>
                    <td style={{
                      textAlign: "left",
                      borderRight: '1px solid black',
                    }}>{natureza[0]}</td>
                    <td style={{
                      textAlign: 'center',
                      background: colors[index],
                    }}>{natureza[1].toLocaleString('pt-BR')}</td>
                  </tr> 
                </tbody>
              ))}
              </table>
          </div>
        </div>
      </div>
    </div>
  )
}