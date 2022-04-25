import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const UserList = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios.get("https://reqres.in/api/users").then(({ data }) => {
      setUser(data.data);
    });
  }, []);
      console.log("--->", user);

  return (
    <div>
      {user.map((user) => (
        <p key={user.id}>
          <Link to={`/users/${user.id}`}>
            {user.id}.{user.first_name}
          </Link>
        </p>
      ))}
      <h1>Users</h1>
    </div>
  );
};

export default UserList;
