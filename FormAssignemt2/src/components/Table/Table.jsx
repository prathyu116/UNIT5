import React from "react";
import "./Table.css";

const Table = ({ data }) => {
    console.log("DAAA",data);
  return (
    <>
      <div className="showbox">
        <table>
          <thead>
            <tr>
              <th>User Name</th>
              <th>Age</th>
              <th>Address</th>
              <th>Department</th>
              <th>Salary</th>
              <th>Marital State</th>
            </tr>
          </thead>
       
              {
                  data.map((data,index)=>{
                   return (
                     <tbody>
                       <td>{data.username}</td>
                       <td>{data.age}</td>
                       <td>{data.address}</td>
                       <td>{data.department}</td>
                       <td>{data.salary}</td>
                       <td>{data.married}</td>
                     </tbody>
                   );
                  })
              }
          
        </table>
      </div>
    </>
  );
};

export default Table;
