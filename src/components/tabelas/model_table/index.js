import React, { useEffect, useMemo } from 'react'
import { useTable, usePagination } from 'react-table'

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
        <span>Página {pageIndex + 1}/{pageOptions.length}</span>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>anterior</button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>próxima</button>
      </div>
    </table>
  )
}

/**
 * Parametros de CreateTable:
 * - quantidade_linhas -> é a quantidade de linhas que sará criada e exibida na tabela
 * - table_name -> nome que aparecerá acima das linhas a esquerda da tabela
 * - arr_dados -> deve ser um array onde os dados são vários array com pelo menos duas posições, sendo a primeira uma string e a segunda um numero
 *  */
export const CreateTable = ({quantidade_linhas, table_name, arr_dados}) => {

  const generate_data_table = () => {
    const parse_datas = []

    if(arr_dados.length) {
      arr_dados.forEach(arr_atividade => {
        parse_datas.push({
          tableData: arr_atividade[0],
          quantidade: arr_atividade[1].toLocaleString('pt-br')
        })
      })
    }
    return parse_datas
  }

  const columns = useMemo(
    () => [
      {
        Header: table_name,
        accessor: 'tableData',
      },
      {
        Header: 'Quantidade',
        accessor: 'quantidade',
      },
    ], [table_name])

  //eslint-disable-next-line
  const data_memo = useMemo(() => generate_data_table(), [arr_dados])

  return (
    <Table columns={columns} data={data_memo} quantidade_linhas={quantidade_linhas} />
  )
}