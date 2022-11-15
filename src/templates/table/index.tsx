import { CSVLink } from 'react-csv'
import { useContext, useMemo, useState } from 'react'
import { useTable, usePagination } from 'react-table'

import { FilterContext } from '../../contexts/filtersContext/contextProvider'

import DOWNLOADICON from '../../assets/download-icon.svg'

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
  tableType: 'Atividade' | 'Natureza'
  tableData: (string | number)[][]
}

export const TemplateTable = ({tableType, tableData}: TemplateTableProps) => {
  const [messageInfo, setMessageInfo] = useState(false);
  const { state: { empresasAbertas } } = useContext(FilterContext)

  const dataToDownload = [
    [tableType, 'quantidade'],
    ...tableData
  ]

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
        Header: tableType,
        accessor: 'quantidade',
      },
    ], [tableType])

  //eslint-disable-next-line
  const data_memo: (string | number)[][] = useMemo(() => generate_data_table(), [tableData])

  return (
    <Styled.Container tableType={tableType}>
       <Styled.Header>
        <p>Empresas {empresasAbertas ? 'Abertas' : 'Ativas'} Por {tableType}</p>
        {messageInfo && <p className='info'>Baixar CSV</p>}
        <span>
          <CSVLink data={dataToDownload}
            filename={`${tableType}-empresa`} 
            className='icon-download'
              onMouseOver={() => setMessageInfo(true)}
              onMouseOut={() => setMessageInfo(false)}
            > 
              <img src={DOWNLOADICON} alt="icone de download para arquivo svg" />
          </CSVLink>
        </span>
      </Styled.Header>
      <Table columns={columns} data={data_memo} />
    </Styled.Container>
  )
}