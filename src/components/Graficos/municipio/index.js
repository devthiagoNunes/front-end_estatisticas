import React from "react"
import './style.css'
require('cors')

export default ({tipo, total}) => {

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