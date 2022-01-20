import React, { useContext, useEffect, useState } from "react"
import { ContextGlobal } from '../../../contexts/GlobalContext/context'
import { getAbertasAnual, getDataEmpresasAtivas, getAbertas } from '../../../services/pinot'
import './style.css'

export default () => {

  const context = useContext(ContextGlobal)
  const [quantidade, setQuantidade] = useState(null)
  const [municipios, setMunicipio] = useState([])

  useEffect(() => {
    const get_abertura_ano = async () => {
      switch (context.state.empresasAbertas) {
        case false:
          const quantidade_ativas =  await getDataEmpresasAtivas('municipio_empresa', context)
          setMunicipio(quantidade_ativas.resultTable.rows)
          setQuantidade(quantidade_ativas.numDocsScanned)
          return

        default:
          const abertura_ano =  await getAbertasAnual(context.state.ano)
          setQuantidade(abertura_ano)
      }
    }

    const get_qntd_por_municipio = async () => {
      const response = await getAbertas('municipio_empresa', context)
      setMunicipio(response)
    }
      
    get_abertura_ano()
    if(context.state.empresasAbertas == true) get_qntd_por_municipio()
  }, [context])

  return(
    <div className="content-municipio">
      <div className="total-empresasAbertas">
        <p>{`Total de Empresas ${context.state.empresasAbertas ? 'Abertas' : 'Ativas'}`}</p>
        <p>{quantidade !== null && quantidade.toLocaleString('pt-br')}</p>
      </div>
      <div className="content-dataMunicipio" style={{
      }}>
        <p>{`Empresas ${context.state.empresasAbertas ? 'Abertas' : 'Ativas'} Por Município`}</p>
        <div className="content-table">
          <div className="tabelas">
            <table>
              {municipios.map((municipio, index) => (
                <tbody key={index}>
                  <tr>{municipio[0]}</tr>
                </tbody>
              ))}
            </table>
            <table>
            {municipios.map((municipio, index) => (
                <tbody key={index}>
                  <tr>{municipio[1]}</tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}