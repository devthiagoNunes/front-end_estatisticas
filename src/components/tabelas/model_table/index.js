import React, { useMemo } from 'react'
import { useTable, usePagination } from 'react-table'
import './style.css'

const Table = ({ columns, data }) => {
  const {
    getTableProps, getTableBodyProps, headerGroups, rows, prepareRow
  } = useTable({
    columns,
    data,
  }, usePagination)

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
        {rows.map((row) => {
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
    </table>
  )
}

/**
 * Parametros de CreateTable:
 * - quantidade_linhas -> é a quantidade de linhas que sará criada e exibida na tabela
 * - table_name -> nome que aparecerá acima das linhas a esquerda da tabela
 * - arr_dados -> deve ser um array onde os dados são vários array com pelo menos duas posições, sendo a primeira uma string e a segunda um numero
 *  */
export const CreateTable = ({table_name, arr_dados}) => {

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
    <div className='contentTable'>
      <Table columns={columns} data={data_memo} />
    </div>
  )
}