import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
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
  assigned: "",
};

const Add = () => {
  const [state, setState] = useState(initialState);

  const { name, code, profession, color, city, branch, assigned } = state;

  const history = useNavigate(); // Use to navigate to homepage.

  const handleSubmit = (e) => {
    e.preventDefault(); // To prevent the default behavior of the browser.
    if(!name) {
      toast.error("Please provide a name.")
    } else {
      axios.post("http://localhost:5000/employees", {
          name,
          code,
          profession,
          color,
          city,
          branch,
          assigned
        }).then(() => {
           setState({ name: "", code: "", profession: "", color: "", city: "", branch: "", assigned: "" });
        });
      toast.success("Employee Added Successfully!")
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
          placeholder="Full Name ..."
          value={name}
          onChange={handleInputChange}
        />
        <label htmlFor="code">Code</label>
        <input
          type="text"
          id="code"
          name="code"
          placeholder="Employee Code ..."
          value={code}
          onChange={handleInputChange}
        />
        <label htmlFor="profession">Profession</label>
        <input
          type="text"
          id="profession"
          name="profession"
          placeholder="Your Profession ..."
          value={profession}
          onChange={handleInputChange}
        />
        <label htmlFor="color">Color</label>
        <input
          type="text"
          id="color"
          name="color"
          placeholder="Your Color ..."
          value={color}
          onChange={handleInputChange}
        />
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          name="city"
          placeholder="Your City ..."
          value={city}
          onChange={handleInputChange}
        />
        <label htmlFor="branch">Branch</label>
        <input
          type="text"
          id="branch"
          name="branch"
          placeholder="Your Branch ..."
          value={branch}
          onChange={handleInputChange}
        />
        <section className="toggle-active">Assigned:
          <div>
            <label htmlFor="assigned">Yes</label>
            <input
              type="radio"
              id="active"
              name="assigned"
              value="true"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="assigned">No</label>
            <input
              type="radio"
              id="inactive"
              name="assigned"
              value="false"
              onChange={handleInputChange}
            />
          </div>
        </section>
        <input type="submit" value="Save" />
        <Link to="/employees">
          <input type="button" value="Go Back" />
        </Link>
      </form>
    </div>
  );
};

export default Add;
