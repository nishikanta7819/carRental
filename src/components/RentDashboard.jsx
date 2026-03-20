import React from "react";
import "../styles/rentDashboard.css"
import rentDashboardLogo from "../assets/carrental.png"

const RentDashboard = () => {
  return (
    <div className="rentDashboard">
      <div className="rentdashboardHeading">
        <p>Luxury Cars on Rent</p>
      </div>
      <div className="rentdashboardSection">

      </div>
      <div className="rentdashboardImage">
        <img src={rentDashboardLogo} alt="" />
      </div>
    </div>
  );
};

export default RentDashboard;
