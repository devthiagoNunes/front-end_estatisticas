import React, { useContext, useEffect, useState } from "react"
import { ContextGlobal } from '../../../contexts/GlobalContext/context'
import { getDataEmpresasAtivas, getAbertas } from '../../../services/pinot'
import './style.css'

export default () => {

  const context = useContext(ContextGlobal)
  const [atividade, setAtividade] = useState([])

  useEffect(() => {
    const get_abertura_ano = async () => {
      switch (context.state.empresasAbertas) {
        case false:
          const quantidade_ativas =  await getDataEmpresasAtivas('secao_atividade', context)
          setAtividade(quantidade_ativas.resultTable.rows)
          return
      }
    }

    get_abertura_ano()
  }, [context])

  const colors = ['#4592E6', '#99c1de', '#bcd4e6', '#d7e3fc']

  return(
    <div className="content-natureza" style={{
      height: context.state.empresasAbertas == true ? '50vh' : '45vh',
      marginBottom: '1rem',
    }}>
      <div className="content-dataNatureza" style={{
        overflowX: 'hidden',
      }}>
        <p>{`Empresas Ativas Por Atividade `}</p>
        <div className="content-table-natureza">
          <div className="tabelas-natureza">
            <table>
              <thead>
                <tr>
                  <th style={{
                    textAlign: 'center'
                  }}>Atividade da Empersa</th>
                  <th style={{
                    textAlign: 'center'
                  }}>Quantidade</th>
                </tr>
              </thead>
              {atividade.map((atividade, index) => (
                <tbody>
                  <tr key={index}>
                    <td style={{
                      textAlign: "left",
                      borderRight: '1px solid black'
                    }}>{atividade[0]}</td>
                    <td style={{
                      textAlign: 'center',
                      background: colors[index]
                    }}>{atividade[1]}</td>
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