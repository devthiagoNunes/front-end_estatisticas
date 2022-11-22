import { useContext, useMemo } from 'react'
import { useTable, usePagination } from 'react-table'

import { ChartsHeader } from '../../components/chartsHeader'
import { FilterContext } from '../../contexts/filtersContext/contextProvider'

import * as Styled from './styled'

type TableProps = {
  columns: {
    Header: string
    accessor: string
  }[]
  data: (string | number)[][]
}

const Table = ({ columns, data }: TableProps) => {
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

export type TemplateTableProps = {
  tableType: 'Natureza'
  tableData: (string | number)[][]
}

export const TemplateTable = ({tableType, tableData}: TemplateTableProps) => {
  const { state: { empresasAbertas } } = useContext(FilterContext)

  const generate_data_table = () => {
    const parse_datas = []

    if(tableData.length) {
      tableData.forEach(data => {
          parse_datas.push({
            tableData: data[0],
            quantidade: data[1].toLocaleString('pt-br')
          })
      })
    }
    return parse_datas
  }

  const columns = useMemo(
    () => [
      {
        Header: tableType,
        accessor: 'tableData',
      },
      {
        Header: 'Quantidade',
        accessor: 'quantidade',
      },
    ], [tableType])

  const data_memo: (string | number)[][] = useMemo(() => generate_data_table(), [tableData])

  return (
    <Styled.Container tableType={tableType}>
      <ChartsHeader 
        chartData={tableData} 
        chartType={tableType} 
        textToHeader={`Empresas ${empresasAbertas ? 'Abertas' : 'Ativas'} Por ${tableType}`} 
      />
      <Table columns={columns} data={data_memo} />
    </Styled.Container>
  )
}