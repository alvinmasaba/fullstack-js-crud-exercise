import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import "./AddEdit.css";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  name: "",
  code: "",
  profession: "",
  color: "",
  city: "",
  branch: "",
  active: "",
};

const Edit = () => {
  const [state, setState] = useState(initialState);

  const { name, code, profession, color, city, branch, active } = state;

  const history = useNavigate(); // Use to navigate to homepage.

  const {id} = useParams();
  
  useEffect(() => {
    axios
      .get(`http://localhost:5000/employees/${id}`)
      .then((resp) => setState({ ...resp.data }));
  }, [id]);
  
  const handleSubmit = (e) => {
    e.preventDefault(); // To prevent the default behavior of the browser.
    if(!name) {
      toast.error("Please provide a name.")
    } else {
      axios.patch(`http://localhost:5000/employees/${id}`, {
          name,
          code,
          profession,
          color,
          city,
          branch,
          active
        }).then(() => {
           setState({ name: "", code: "", profession: "", color: "", city: "", branch: "", active: "" });
        }).catch((err) => toast.error(err.response.data));
      toast.success("Employee Updated Successfully!")
      setTimeout(() => history(-1), 500);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center"
      }}  
      onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name ..."
          value={state.name}
          onChange={handleInputChange}
        />
        <label htmlFor="code">Code</label>
        <input
          type="text"
          id="code"
          name="code"
          placeholder="Code ..."
          value={ code }
          onChange={handleInputChange}
        />
        <label htmlFor="profession">Profession</label>
        <input
          type="text"
          id="profession"
          name="profession"
          placeholder="Your Profession ..."
          value={ profession }
          onChange={handleInputChange}
        />
        <label htmlFor="color">Color</label>
        <input
          type="text"
          id="color"
          name="color"
          placeholder="Your Color ..."
          value={ color }
          onChange={handleInputChange}
        />
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          name="city"
          placeholder="Your City ..."
          value={ city }
          onChange={handleInputChange}
        />
        <label htmlFor="branch">Branch</label>
        <input
          type="text"
          id="branch"
          name="branch"
          placeholder="Your Branch ..."
          value={ branch }
          onChange={handleInputChange}
        />
        <div>
          <label htmlFor="active">Active</label>
          <input
            type="radio"
            id="active"
            name="active"
            value="true"
            onChange={handleInputChange}
            checked={active === 'true'}
          />
        </div>
        <div>
          <label htmlFor="active">Inactive</label>
          <input
            type="radio"
            id="inactive"
            name="active"
            value="false"
            onChange={handleInputChange}
            checked={active === 'false'}
          />
        </div>
        <input type="submit" value="Save" />
        <Link to="/employees">
          <input type="button" value="Go Back" />
        </Link>
      </form>
    </div>
  );
};

export default Edit;
