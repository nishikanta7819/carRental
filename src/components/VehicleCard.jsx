import React from "react";
import "../styles/vehicleCard.css";
import carPrice from "../assets/price.png";
import carSeater from "../assets/carSeater.png";
import carFuel from "../assets/fuelType.png";
import carLocation from "../assets/location.png";

const VehicleCard = ({ image, name, price, seater, fuelType, location }) => {
  return (
    <div className="vehicleCard">
      <div className="carImage">
        <img src={image} alt="" />
      </div>

      <div className="carName">
        <p>{name}</p>
      </div>
      <div className="carDesc">
        <div className="carPrice">
          <img src={carPrice} alt="" />
          <p>₹{price}/hr</p>
        </div>
        <div className="carSeater">
          <img src={carSeater} alt="" />
          <p>{seater}Seats</p>
        </div>
        <div className="fuelType">
          <img src={carFuel} alt="" />
          <p>{fuelType}</p>
        </div>
        <div className="location">
          <img src={carLocation} alt="" />
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
