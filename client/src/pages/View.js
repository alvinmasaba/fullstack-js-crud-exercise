import React, { useState, useEffect } from 'react';
import { useParams, Link} from "react-router-dom";
import axios from 'axios';
import "./View.css";

const View = () => {
  const [employee, setEmployee] = useState({});

  const {id} = useParams();

  function IsActive(data) {
    const active = data;
    if (active === 'true') {
      return "Yes";
    }
    return "No";
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/employees/${id}`)
      .then((resp) => setEmployee({ ...resp.data }));
  }, [id]);
  return (
    <div style={{marginTop: "150px"}}>
      <div className="card">
        <div className="card-header">
          <p>Employee Details</p>
        </div>
        <div className="container">
            <strong>Name: </strong>
            <span>{employee.name}</span>
            <br />
            <br />
            <strong>Code: </strong>
            <span>{employee.code}</span>
            <br />
            <br />
            <strong>Profession: </strong>
            <span>{employee.profession}</span>
            <br />
            <br />
            <strong>Color: </strong>
            <span>{employee.color}</span>
            <br />
            <br />
            <strong>City: </strong>
            <span>{employee.city}</span>
            <br />
            <br />
            <strong>Branch: </strong>
            <span>{employee.branch}</span>
            <br />
            <br />
            <strong>Assigned: </strong>
            <span>{IsActive(employee.active)}</span>
            <br />
            <br />
            <Link to="/employees">
              <div className="btn btn-edit">Go Back</div>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default View
