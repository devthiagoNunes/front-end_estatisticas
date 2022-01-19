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

  return(
    <div className="content-natureza" style={{
      marginBottom: context.state.empresasAbertas !== true ? 0 : null,
      height: context.state.empresasAbertas == true ? '50vh' : '54vh'
    }}>
      <div className="content-dataNatureza" style={{
        overflowX: context.state.empresasAbertas !== true ? 'hidden' : 'hidden',
      }}>
        <p>{`Empresas ${context.state.empresasAbertas ? 'Abertas' : 'Ativas'} Por Natureza`}</p>
        <div className="content-table-natureza">
          <div className="tabelas-natureza">
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
                      borderRight: '1px solid black'
                    }}>{natureza[0]}</td>
                    <td style={{
                      textAlign: 'center'
                    }}>{natureza[1]}</td>
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