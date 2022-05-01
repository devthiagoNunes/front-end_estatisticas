import React, { useContext, useEffect, useState } from "react"
import { ContextGlobal } from '../../../contexts/GlobalContext/context'
import { CreateTable } from '../../tabelas/model_table';
import { getDataEmpresasAbertas, getDataEmpresasAtivas } from '../../../services/pinot';
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

  return(
    <div className="natureza">
      <div className='table'>
        <p>{`Empresas ${context.state.empresasAbertas ? 'Abertas' : 'Ativas'} Por Natureza`}</p>
        <CreateTable table_name='Natureza' arr_dados={natureza} />
      </div>
    </div>
  )
}