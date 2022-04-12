import React, { useContext, useEffect, useMemo, useState } from 'react'
import { useTable, usePagination } from 'react-table'
import { ContextGlobal } from '../../contexts/GlobalContext/context'
import { getDataEmpresasAbertas, getDataEmpresasAtivas } from '../../services/pinot'

const Table = ({ columns, data }) => {
  const {
    getTableProps, getTableBodyProps, headerGroups, page, state, prepareRow, nextPage, previousPage, canPreviousPage, canNextPage, setPageSize, pageOptions
  } = useTable({
    columns,
    data,
  }, usePagination)

  useEffect(() => {
    setPageSize(35)
  },[setPageSize])

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
        {page.map((row, i) => {
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
      <div>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>voltar</button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>passar</button>
        <span>{pageIndex + 1}/{pageOptions.length}</span>
      </div>
    </table>
  )
}

export const CreateTable = ({data}) => {
  const context = useContext(ContextGlobal)
  const [municipios, setMunicipio] = useState([])

  useEffect(() => {
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
    fetchMunicipio()
  }, [context.state]);

  const generate_data_table = () => {
    const parse_datas = []

    if(municipios.length) {
      municipios.forEach(arr_municipio => {
        parse_datas.push({
          municipio: arr_municipio[0],
          quantidade: arr_municipio[1]
        })
      })
    }
    return parse_datas
  }

  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        columns: [
          {
            Header: 'Município',
            accessor: 'municipio',
          },
          {
            Header: 'Quantidade',
            accessor: 'quantidade',
          },
        ],
      },
    ],
    []
  )

  //eslint-disable-next-line
  const data_memo = useMemo(() => generate_data_table(), [municipios])

  return (
    <Table columns={columns} data={data_memo} />
  )
}