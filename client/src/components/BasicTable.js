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

  // Handles styling for color and assigned state.

  function CheckCellValue(cell) {
    if (cell.column.Header === 'Assigned') {
      return AssignedState(cell.value)
    } else if (cell.column.Header === 'Color') {
      return DisplayColor(cell.value)
    } else {
      return cell.render('Cell')
    };
  };

  // Displays employee color.
  function DisplayColor(color) {
    if (color === "") {
      return "";
    }
    return <span className="color-circle" style={{backgroundColor: color, boxShadow: `0px 0px 2px 1px ${color}`}}></span>;
  };

  // Displays red or green dot in home table based on active state.
  function AssignedState(value) {
      if (value === true || value === 'true') {
        return <span className="dot" id="green"></span>;
      } else {
        return <span className="dot" id="red"></span>;
      }
    };

  return (
    <div style={{marginTop: "150px"}}>
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
                  return <td {...cell.getCellProps()}>{CheckCellValue(cell)}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
};

export default BasicTable;
