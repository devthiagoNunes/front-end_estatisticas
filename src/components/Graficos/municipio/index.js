import React, { useContext, useEffect, useState } from "react"
import { ContextGlobal } from '../../../contexts/GlobalContext/context'
import { getAbertasAnual, getQuantidadeAbertasPorMunicipio } from '../../../services/pinot'
import './style.css'

export default () => {

  const context = useContext(ContextGlobal)
  const [quantidade, setQuantidade] = useState(null)
  const [municipios, setMunicipio] = useState([])

  useEffect(() => {
    const get_abertura_ano = async () => {
      const abertura_ano = await getAbertasAnual()
      setQuantidade(abertura_ano)
    }

    const get_qntd_por_municipio = async () => {
      const response = await getQuantidadeAbertasPorMunicipio()
      setMunicipio(response.rows)
    }

    get_abertura_ano()
    get_qntd_por_municipio()
  }, [])

  return(
    <div className="content-municipio">
      <div className="total-empresasAbertas">
        <p>{`Total de Empresas ${context.state.empresasAbertas ? 'Abertas' : 'Ativas'}`}</p>
        <p>{quantidade}</p>
      </div>
      <div className="content-dataMunicipio">
        <p>{`Total de Empresas ${context.state.empresasAbertas ? 'Abertas' : 'Ativas'}`}</p>
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