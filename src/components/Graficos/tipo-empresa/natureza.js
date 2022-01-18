import React, { useContext, useEffect, useState } from "react"
import { ContextGlobal } from '../../../contexts/GlobalContext/context'
import { getDataEmpresasAtivas, getAbertas } from '../../../services/pinot'
import './style.css'

export default () => {

  const context = useContext(ContextGlobal)
  const [natureza, setNatureza] = useState([])

  useEffect(() => {
    const get_abertura_ano = async () => {
      switch (context.state.empresasAbertas) {
        case false:
          const quantidade_ativas =  await getDataEmpresasAtivas('natureza', context)
          setNatureza(quantidade_ativas.resultTable.rows)
          return
      }
    }

    const get_qntd_por_municipio = async () => {
      const response = await getAbertas('natureza', context)
      setNatureza(response)
    }
      
    get_abertura_ano()
    if(context.state.empresasAbertas == true) get_qntd_por_municipio()
  }, [context])

  return(
    <div className="content-natureza">
      <div className="content-dataNatureza" style={{
        overflowX: 'hidden',
        overflowY: natureza.length > 11 ? 'scroll' : 'hidden'
      }}>
        <p>{`Empresas ${context.state.empresasAbertas ? 'Abertas' : 'Ativas'} Por Natureza`}</p>
        <div className="content-table-natureza">
          <div className="tabelas-natureza">
            <table>
              {natureza.map((natureza, index) => (
                <tbody key={index}>
                  <tr>{natureza[0]}</tr>
                </tbody>
              ))}
            </table>
            <table>
            {natureza.map((natureza, index) => (
                <tbody key={index}>
                  <tr>{natureza[1]}</tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}