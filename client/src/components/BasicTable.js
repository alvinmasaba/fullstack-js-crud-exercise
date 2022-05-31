import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import { COLUMNS } from './columns';
import '../pages/Home.css'
import EMPLOYEES from './EMPLOYEES.json'

export const BasicTable = () => {
  
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => EMPLOYEES, [])

  const tableInstance = useTable({
    columns,
    data,
  })

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance

  // Displays red or green dot in home table based on active state.
  function AssignedState(cell) {
    if (cell.column.Header === 'Assigned') {
      if (cell.value === true) {
        return <span className="dot" id="green"></span>;
      } else {
        return <span className="dot" id="red"></span>;
      }
    } else {
      return cell.render('Cell')
    }
  };

  return (
    <table {...getTableProps()} className="styled-table">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map( column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{AssignedState(cell)}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
};

export default BasicTable;
