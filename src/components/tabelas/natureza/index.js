import React, { useContext, useEffect, useMemo, useState } from 'react'
import { useTable, usePagination } from 'react-table'
import { ContextGlobal } from '../../../contexts/GlobalContext/context'
import { getDataEmpresasAbertas, getDataEmpresasAtivas } from '../../../services/pinot'

const Table = ({ columns, data, quantidade_linhas }) => {
  const {
    getTableProps, getTableBodyProps, headerGroups, page, state, prepareRow, nextPage, previousPage, canPreviousPage, canNextPage, setPageSize, pageOptions
  } = useTable({
    columns,
    data,
  }, usePagination)

  useEffect(() => {
    setPageSize(quantidade_linhas)
  },[quantidade_linhas, setPageSize])

  const { pageIndex } = state 

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {page.map((row) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
      <div className='buttons'>
        <span>Página {pageIndex + 1} de {pageOptions.length}</span>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>anterior</button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>próxima</button>
      </div>
    </table>
  )
}

export const CreateTableNatureza = ({quantidade_linhas}) => {
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

  const generate_data_table = () => {
    const parse_datas = []

    if(natureza.length) {
      natureza.forEach(arr_municipio => {
        parse_datas.push({
          natureza: arr_municipio[0],
          quantidade: arr_municipio[1].toLocaleString('pt-br')
        })
      })
    }
    return parse_datas
  }

  const columns = useMemo(
    () => [
      {
        Header: 'Natureza',
        accessor: 'natureza',
      },
      {
        Header: 'Quantidade',
        accessor: 'quantidade',
      },
    ], [])

  //eslint-disable-next-line
  const data_memo = useMemo(() => generate_data_table(), [natureza])

  return (
    <Table columns={columns} data={data_memo} quantidade_linhas={quantidade_linhas} />
  )
}