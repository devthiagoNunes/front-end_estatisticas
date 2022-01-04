import React, {useState, useEffect} from "react"

import pinot from "../../../services/pinot"
import './style.css'
require('cors')

export default ({tipo, total}) => {

  useEffect(() => {
    const reqData = async () => {
      fetch("http://179.127.13.245:8099/query/sql", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({sql: "select * from statistical limit 10"})
      }).then(res => {
        console.log(res)
      }).catch(err => console.log(err));
    }
    reqData();
  }, [])

  let valorTotalDeEmpresas = 0
  for (let i = 0; i < total.length; i++) {
    valorTotalDeEmpresas += total[i]
  }

  return(
    <div className="content-municipio">
      <div className="total-empresasAbertas">
        <p>{`Total de Empresas ${tipo}`}</p>
        <p>{valorTotalDeEmpresas.toLocaleString('pt-BR')}</p>
      </div>
      <div className="content-dataMunicipio">
        <p>{`Empresas ${tipo} Por Municipio`}</p>
        <div className="content-table">
          <div className="tabelas">
            <table>
              <tbody>
                <tr><td>São Luis</td></tr>
                <tr><td>São José de Ribamar</td></tr>
                <tr><td>Timon</td></tr>
                <tr><td>Arari</td></tr>
                <tr><td>São Luis</td></tr>
                <tr><td>São José de Ribamar</td></tr>
                <tr><td>Timon</td></tr>
                <tr><td>Arari</td></tr>
                <tr><td>São Luis</td></tr>
                <tr><td>São José de Ribamar</td></tr>
                <tr><td>Timon</td></tr>
                <tr><td>Arari</td></tr>
                <tr><td>São Luis</td></tr>
                <tr><td>São José de Ribamar</td></tr>
                <tr><td>Timon</td></tr>
                <tr><td>Arari</td></tr>
                <tr><td>São Luis</td></tr>
                <tr><td>São José de Ribamar</td></tr>
                <tr><td>Timon</td></tr>
                <tr><td>Arari</td></tr>
                <tr><td>São Luis</td></tr>
                <tr><td>São José de Ribamar</td></tr>
                <tr><td>Timon</td></tr>
                <tr><td>Arari</td></tr>
                <tr><td>São Luis</td></tr>
                <tr><td>São José de Ribamar</td></tr>
                <tr><td>Timon</td></tr>
                <tr><td>Arari</td></tr>
                <tr><td>São Luis</td></tr>
                <tr><td>São José de Ribamar</td></tr>
                <tr><td>Timon</td></tr>
                <tr><td>Arari</td></tr>
                <tr><td>São Luis</td></tr>
                <tr><td>São José de Ribamar</td></tr>
                <tr><td>Timon</td></tr>
                <tr><td>Arari</td></tr>
                <tr><td>São Luis</td></tr>
                <tr><td>São José de Ribamar</td></tr>
                <tr><td>Timon</td></tr>
                <tr><td>Arari</td></tr>
                <tr><td>São Luis</td></tr>
                <tr><td>São José de Ribamar</td></tr>
                <tr><td>Timon</td></tr>
                <tr><td>Arari</td></tr>
                <tr><td>São Luis</td></tr>
                <tr><td>São José de Ribamar</td></tr>
                <tr><td>Timon</td></tr>
                <tr><td>Arari</td></tr>
                <tr><td>São Luis</td></tr>
                <tr><td>São José de Ribamar</td></tr>
                <tr><td>Timon</td></tr>
                <tr><td>Arari</td></tr>
                <tr><td>São Luis</td></tr>
                <tr><td>São José de Ribamar</td></tr>
                <tr><td>Timon</td></tr>
                <tr><td>Arari</td></tr>
                <tr><td>São Luis</td></tr>
                <tr><td>São José de Ribamar</td></tr>
                <tr><td>Timon</td></tr>
                <tr><td>Arari</td></tr>
              </tbody>
            </table>
            <table>
              <tbody>
                <tr><td>12224</td></tr>
                <tr><td>3280</td></tr>
                <tr><td>1699</td></tr>
                <tr><td>1094</td></tr>
                <tr><td>12224</td></tr>
                <tr><td>3280</td></tr>
                <tr><td>1699</td></tr>
                <tr><td>1094</td></tr>
                <tr><td>12224</td></tr>
                <tr><td>3280</td></tr>
                <tr><td>1699</td></tr>
                <tr><td>1094</td></tr>
                <tr><td>12224</td></tr>
                <tr><td>3280</td></tr>
                <tr><td>1699</td></tr>
                <tr><td>1094</td></tr>
                <tr><td>12224</td></tr>
                <tr><td>3280</td></tr>
                <tr><td>1699</td></tr>
                <tr><td>1094</td></tr>
                <tr><td>12224</td></tr>
                <tr><td>3280</td></tr>
                <tr><td>1699</td></tr>
                <tr><td>1094</td></tr>
                <tr><td>12224</td></tr>
                <tr><td>3280</td></tr>
                <tr><td>1699</td></tr>
                <tr><td>1094</td></tr>
                <tr><td>12224</td></tr>
                <tr><td>3280</td></tr>
                <tr><td>1699</td></tr>
                <tr><td>1094</td></tr>
                <tr><td>12224</td></tr>
                <tr><td>3280</td></tr>
                <tr><td>1699</td></tr>
                <tr><td>1094</td></tr>
                <tr><td>12224</td></tr>
                <tr><td>3280</td></tr>
                <tr><td>1699</td></tr>
                <tr><td>1094</td></tr>
                <tr><td>12224</td></tr>
                <tr><td>3280</td></tr>
                <tr><td>1699</td></tr>
                <tr><td>1094</td></tr>
                <tr><td>12224</td></tr>
                <tr><td>3280</td></tr>
                <tr><td>1699</td></tr>
                <tr><td>1094</td></tr>
                <tr><td>12224</td></tr>
                <tr><td>3280</td></tr>
                <tr><td>1699</td></tr>
                <tr><td>1094</td></tr>
                <tr><td>12224</td></tr>
                <tr><td>3280</td></tr>
                <tr><td>1699</td></tr>
                <tr><td>1094</td></tr>
                <tr><td>12224</td></tr>
                <tr><td>3280</td></tr>
                <tr><td>1699</td></tr>
                <tr><td>1094</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}