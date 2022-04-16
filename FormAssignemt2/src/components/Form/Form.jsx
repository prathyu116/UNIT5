import React, { useState } from "react";
import Table from "../Table/Table";
import "./Form.css";
const Form = () => {
  const [formData, setformData] = useState({ married: "No" });
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    console.log(e.target.checked);

    let { id, value, type, checked } = e.target;
    if (type === "checkbox" && checked === true) {
      value = "Yes";
    }
    setformData({
      ...formData,
      [id]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
     setData([...data, formData]);
  };
  return (
    <div className="formDiv">
      <form onSubmit={handleSubmit}>
        <input type="text" id="username" onChange={handleChange} placeholder="Enter Name" /> <br /> <br />
        <input type="number" id="age" onChange={handleChange} placeholder="Enter Age" /> <br /> <br />
        <input type="text" id="address" onChange={handleChange} placeholder="Enter Address" /> <br /> <br />
        <select id="department" onChange={handleChange}>
          <option>Choose Department</option>
          <option value="Department1">D1</option>
          <option value="Department2">D2</option>
          <option value="Department3">D3</option>
        </select>
        <br />
        <br />
        <input type="number" id="salary" onChange={handleChange} placeholder="Enter Salary" /> <br /> <br />
        <input type="checkbox" id="married" value="No" onChange={handleChange} />
        <span> Married ?</span>
        <br />
        <input type="submit" value="submit" />
      </form>
      <Table data={data} />
    </div>
  );
};

export default Form;
