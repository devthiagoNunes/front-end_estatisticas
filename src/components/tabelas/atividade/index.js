import React, { useContext, useEffect, useMemo, useState } from 'react'
import { useTable, usePagination } from 'react-table'
import { ContextGlobal } from '../../../contexts/GlobalContext/context'
import { getDataEmpresasAtivas } from '../../../services/pinot'
import './style.css'

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

export const CreateTableAtividade = ({quantidade_linhas}) => {
  const context = useContext(ContextGlobal)
  const [atividade, setAtividade] = useState({
    classificacao: "Atividade", empresas: [], quantidade: []
  })

  useEffect(() => {
    const get_ativas_secao_atividade = async () => {
      //eslint-disable-next-line
      switch (context.state.empresasAbertas) {
        case false:
          var filtros = {classificacao: "secao_atividade", ...context.state};
          const quantidade_ativas =  await getDataEmpresasAtivas(filtros)
          setAtividade(quantidade_ativas.values);
          return
      }
    }

    get_ativas_secao_atividade()
  }, [context])

  console.log(atividade)


  const generate_data_table = () => {
    const parse_datas = []

    if(atividade.length) {
      atividade.forEach(arr_atividade => {
        parse_datas.push({
          atividade: arr_atividade[0],
          quantidade: arr_atividade[1].toLocaleString('pt-br')
        })
      })
    }
    return parse_datas
  }

  const columns = useMemo(
    () => [
      {
        Header: 'Atividade',
        accessor: 'atividade',
      },
      {
        Header: 'Quantidade',
        accessor: 'quantidade',
      },
    ], [])

  //eslint-disable-next-line
  const data_memo = useMemo(() => generate_data_table(), [atividade])

  return (
    <Table columns={columns} data={data_memo} quantidade_linhas={quantidade_linhas} />
  )
}