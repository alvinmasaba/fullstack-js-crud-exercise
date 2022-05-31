import React, { useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useTable } from "react-table";
import { toast } from "react-toastify";
import { COLUMNS } from "./columns";
import "./Table.css"

export const Table = () => {
  const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:5000/employees");
    setData(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);
  
  const columns = useMemo(() => COLUMNS, [])

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

  // Handles styling for color, assigned and action columns.
  function CheckCellHeader(cell) {
    if (cell.column.Header === 'Assigned') {
      return AssignedState(cell.value)
    } else if (cell.column.Header === 'Color') {
      return DisplayColor(cell.value)
    } else if (cell.column.Header === 'Action') {
      // Inserts action buttons beneath the Action column.
      // Target id can be retrieved from cell.row.original.
      return <>
              <Link to={`/update-employee/${cell.row.original.id}`}>
                <button className="btn btn-edit">Edit</button>
              </Link>
              <button className="btn btn-delete" onClick={() => deleteEmployee(cell.row.original.id)}>Delete</button>
              <Link to={`/view-employee/${cell.row.original.id}`}>
                <button className="btn btn-view">View</button>
              </Link>
            </>
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

  // Delete button functionality.
  const deleteEmployee = (id) => {
    if(window.confirm("Are you sure you want to delete this employee?")) {
      axios.delete(`http://localhost:5000/employees/${id}`);
      toast.success("Employee Deleted Successfully");
      setTimeout(() => loadData(), 500);
    }
  };

  return (
    <div style={{marginTop: "150px"}}>
      <Link to="/add-employee">
        <button className="btn btn-add">Add Employee</button>
      </Link>
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
                  return <td {...cell.getCellProps()}>{CheckCellHeader(cell)}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
};

export default Table;
