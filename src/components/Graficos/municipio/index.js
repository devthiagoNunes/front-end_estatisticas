import React, { useContext, useEffect, useState } from "react"
import { ContextGlobal } from '../../../contexts/GlobalContext/context'
import { getDataEmpresasAbertas, getDataEmpresasAtivas } from '../../../services/pinot'
import './style.css'

export default () => {

  const context = useContext(ContextGlobal)
  const [quantidade, setQuantidade] = useState(null)
  const [municipios, setMunicipio] = useState([])

  useEffect(() => {
    const getQtdAbertas = async () => {
      var filtros = {classificacao: "", ...context.state};
      const response = await getDataEmpresasAbertas(filtros);
      if(context.state.empresasAbertas == true) await setQuantidade(response.values[0].toLocaleString())
    }

    const getQtdAtivas = async () => {
      var filtros = {classificacao: "", ...context.state};
      const response = await getDataEmpresasAtivas(filtros);
      if(context.state.empresasAbertas == false) await setQuantidade(response.values[0]);
    }

    const getAbertasMunicipio = async (filtros) => { 
      const response = await getDataEmpresasAbertas(filtros);
      setMunicipio(response.values);
    }

    const getAtivasMunicipio = async (filtros) => { 
      const response =  await getDataEmpresasAtivas(filtros);
      setMunicipio(response.values);
    }
    
    const fetchMunicipio = async () => {
      var filtros = {classificacao: "municipio_empresa", ...context.state};
      if(context.state.empresasAbertas) {
        getAbertasMunicipio(filtros);
      }else{
        getAtivasMunicipio(filtros);
      }
    }
    getQtdAbertas()
    getQtdAtivas()
    fetchMunicipio();
  }, [context]);

  return(
    <div className="content-municipio">
      {(window.innerWidth >= 320 && window.innerWidth < 768) ? null : <div className="total-empresasAbertas">
        <p>{`Total de Empresas ${context.state.empresasAbertas ? 'Abertas' : 'Ativas'}`}</p>
        <p>{quantidade !== null && quantidade.toLocaleString('pt-br')}</p>
      </div> 
      }
      <div className="content-dataMunicipio">
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
                  <tr>{municipio[1].toLocaleString('pt-BR')}</tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}