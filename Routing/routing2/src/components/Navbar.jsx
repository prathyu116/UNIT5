import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const nav = [
    { title: "Home", to: "/" },
    { title: "About", to: "/about" },
    { title: "User", to: "/users" },
  ];
  return (
    <div>
      {nav.map((e, i) => {
        return (
          <Link key={i} to={e.to} style={{ margin: "5px" }}>
            {e.title}
          </Link>
        );
      })}
    </div>
  );
};

export default Navbar;
