import React from "react";
import { Link } from "react-router-dom";

export const NavBarComponent = () => {
  return (
    <>
      <div className="logoContent">
        <img src="images/logo.png" height="50px" width="50px" />
      </div>
      <div className="webpageName">
        <p>Library Management</p>
      </div>
      <div className="nav-items">
        <Link to="/login" className="nav-items-text">
          {" "}
          Login
        </Link>
        <Link to="/register" className="nav-items-text">
          {" "}
          Register
        </Link>
      </div>
    </>
  );
};
