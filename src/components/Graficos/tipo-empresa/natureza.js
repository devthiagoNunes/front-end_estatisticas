import React, { useContext, useEffect, useState } from "react"
import { ContextGlobal } from '../../../contexts/GlobalContext/context'
import { getDataEmpresasAtivas, getDataEmpresasAbertas } from '../../../services/pinot'
import './style.css'

export default () => {

  const context = useContext(ContextGlobal)
  const [natureza, setNatureza] = useState([])

  useEffect(() => {
    const getAbertasNatureza = async (filtros) => {
      const response = await getDataEmpresasAbertas(filtros);
      setNatureza(response.values)
    }
    
    const getAtivasNatureza = async (filtros) => {
      const response =  await getDataEmpresasAtivas(filtros);
      setNatureza(response.values);
    }

    const fetchNatureza = async () => {
      var filtros = {classificacao: "natureza", ...context.state};
      if(context.state.empresasAbertas)
        getAbertasNatureza(filtros);
      else
        getAtivasNatureza(filtros);
    }
    
    fetchNatureza();
  }, [context])

  const colors = ['#4592E6', '#99c1de', '#bcd4e6', '#d7e3fc']

  return(
    <div className="content-tables" style={{
      marginTop: '.5rem',
      marginBottom: '1rem',
    }}>
      <div className="content-dataTables" >
        <p>{`Empresas ${context.state.empresasAbertas ? 'Abertas' : 'Ativas'} Por Natureza`}</p>
        <div className="content-table-empresas">
          <div className="tables-empresas" style={{
            overflowX: 'hidden',
            overflowY: context.state.empresasAbertas ? 'hidden' : 'scroll',
            paddingBottom: '4rem'
          }}>
            <table>
              <thead>
                <tr>
                  <th style={{
                    textAlign: 'center'
                  }}>Natureza da Empresa</th>
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
                      borderRight: '1px solid black',
                    }}>{natureza[0]}</td>
                    <td style={{
                      textAlign: 'center',
                      background: colors[index],
                    }}>{natureza[1].toLocaleString('pt-BR')}</td>
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