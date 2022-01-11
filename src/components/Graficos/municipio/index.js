import React, { useEffect, useState } from "react"

import {getAbertasPorMunicipio} from '../../../services/municipio'
import {getAbertasAnual} from '../../../services/municipio'
import './style.css'

export default ({tipo, total}) => {

  let valorTotalDeEmpresas = 0
  for (let i = 0; i < total.length; i++) {
    valorTotalDeEmpresas += total[i]
  }

  const [quantidade, setQuantidade] = useState(null)
  const [municipios, setMunicipios] = useState([])

  useEffect(() => {
    const get_abertas_municipio = async () => {
      const res_abertas_municipio = await getAbertasPorMunicipio()
      console.log(res_abertas_municipio)
      setMunicipios(res_abertas_municipio)
    }

    const get_abertura_ano = async () => {
      const abertura_ano =await getAbertasAnual()
      setQuantidade(abertura_ano)
    }

    get_abertas_municipio()
    get_abertura_ano()
  }, [])

  return(
    <div className="content-municipio">
      <div className="total-empresasAbertas">
        <p>{`Total de Empresas ${tipo}`}</p>
        <p>{quantidade}</p>
      </div>
      <div className="content-dataMunicipio">
        <p>{`Empresas ${tipo} Por Municipio`}</p>
        <div className="content-table">
          <div className="tabelas">
            <table>
              <tbody>
                {municipios.map((item, index) => (
                  item.map((item) => (
                    <tr key={index}><td>{item}</td></tr>
                  ))
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}