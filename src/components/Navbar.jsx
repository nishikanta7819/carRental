import React from "react";
import carlogo from "../assets/car-logo.png";
import "../styles/navBar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarLogo">
        <p>CarRental</p>
        <img src={carlogo} alt="carlogo" />
      </div>
      <div className="navbarLinks">
        <ul>
          <li>home</li>
          <li>cars</li>
          <li>about</li>
        </ul>
      </div>
      <div className="navbarRight">
        <div className="navbarSearch">
          <input type="search" placeholder="Search Cars" />
        </div>
        <div className="navbarButtons">
          <button>listcars</button>
          <button>signup</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
