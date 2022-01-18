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
    }}>
      <div className="content-dataNatureza" style={{
        overflowX: context.state.empresasAbertas !== true ? 'hidden' : 'hidden',
      }}>
        <p>{`Empresas ${context.state.empresasAbertas ? 'Abertas' : 'Ativas'} Por Natureza`}</p>
        <div className="content-table-natureza">
          <div className="tabelas-natureza">
            <table>
              <thead>
                <tr style={{
                  textAlign: 'center'
                }}>
                  <th>Natureza da empresa</th>
                  <th>Quantidade</th>
                </tr>
              </thead>
              {natureza.map((natureza, index) => (
                <tfoot>
                  <tr key={index}>
                    <td style={{
                      textAlign: "left",
                      borderRight: '1px solid black'
                    }}>{natureza[0]}</td>
                    <td style={{
                      textAlign: 'center'
                    }}>{natureza[1]}</td>
                  </tr> 
                </tfoot>
              ))}
              </table>
          </div>
        </div>
      </div>
    </div>
  )
}