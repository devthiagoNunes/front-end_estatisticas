import React, { useContext, useEffect, useState } from "react"
import { ContextGlobal } from '../../../contexts/GlobalContext/context'
import { getDataEmpresasAtivas } from '../../../services/pinot'
import './style.css'

export default () => {

  const context = useContext(ContextGlobal)
  const [atividade, setAtividade] = useState({
    classificacao: "Atividade", empresas: [], quantidade: []
  })

  useEffect(() => {
    const get_ativas_secao_atividade = async () => {
      switch (context.state.empresasAbertas) {
        case false:
          const obj = {classificacao: "Atividade", empresas: [], quantidade: []}
          const quantidade_ativas =  await getDataEmpresasAtivas('secao_atividade', context)
          quantidade_ativas.resultTable.rows.forEach(element => {
            obj.empresas.push(element[0])
            obj.quantidade.push(element[1])
          });
          setAtividade(obj);
          return
      }
    }

    get_ativas_secao_atividade()
  }, [context])

  const colors = ['#4592E6', '#99c1de', '#bcd4e6', '#d7e3fc']

  return(
    <div className="content-tables" style={{
      height: '52vh',
      marginBottom: '1rem',
    }}>
      <div className="content-dataTables" style={{
        paddingBottom: '3.5rem'
      }}>
        <p>{`Empresas Ativas Por Atividade `}</p>
        <div className="content-table-empresas">
          <div className="tables-empresas" style={{
            overflowX: 'hidden',
            overflowY: 'scroll',
            paddingBottom: '.5rem'
          }}>
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
              {atividade.quantidade.map((quantidade, index) => (
                <tbody>
                  <tr key={index}>
                    <td style={{
                      textAlign: "left",
                      borderRight: '1px solid black'
                    }}>{atividade.empresas[index]}</td>
                    <td style={{
                      textAlign: 'center',
                      background: colors[index]
                    }}>{quantidade.toLocaleString('pt-BR')}</td>
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