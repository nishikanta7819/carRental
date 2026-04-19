import React from "react";
import "../styles/featuredVehicles.css";
import VehicleCard from "./VehicleCard";
import VehicleType from "./VehicleType";

const cars = [
  {
    image:
      "https://www.hondacarindia.com/_next/image?url=https%3A%2F%2Fwww.hondacarindia.com%2Fweb-data%2Fmodels%2F2024%2FnewAmaze%2Fexterior360Desktop%2FAMAZE_EXT_360_PEARL_WHITE_V-3__00009_chooseCar.png&w=3840&q=75",
    name: "Honda Amaze",
    price: "100",
    seater: "5",
    fuelType: "Petrol",
    location: "Bhubaneswar",
  },
  {
    image:
      "https://imgd.aeplcdn.com/370x208/n/cw/ec/170173/dzire-exterior-right-front-three-quarter-27.png?isig=0&q=80",
    name: "Maruti Suzuki Dzire",
    price: "7,50,000",
    seater: "5",
    fuelType: "Petrol",
    location: "Cuttack",
  },
  {
    image:
      "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/139133/aura-exterior-right-front-three-quarter-9.png?isig=0&q=80&q=80",
    name: "Hyundai Aura",
    price: "7,80,000",
    seater: "5",
    fuelType: "Petrol",
    location: "Puri",
  },
  {
    image:
      "https://cdn.carhp.in/tata/tata_altroz_arcade_grey.jpg?format=webp&width=800&q=75",
    name: "Tata Altroz",
    price: "8,50,000",
    seater: "5",
    fuelType: "Petrol",
    location: "Bhubaneswar",
  },
  {
    image:
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/102663/baleno-exterior-right-front-three-quarter-69.png?isig=0&q=80",
    name: "Maruti Suzuki Baleno",
    price: "8,20,000",
    seater: "5",
    fuelType: "Petrol",
    location: "Khordha",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREfiLWSgKLyZZiDN_4bZohiQKPL_XpPkBXNQ&s",
    name: "Hyundai Creta",
    price: "11,00,000",
    seater: "5",
    fuelType: "Petrol",
    location: "Bhubaneswar",
  },
];

const FeaturedVehicles = () => {
  return (
    <div className="featuredVehicles">
      <div className="featuredVehiclesHeading">
        <p>Featured Vehicles</p>
      </div>

      <div className="featuredVehiclesParagraph">
        <p>
          Explore our selection of premium vehicles available for your next
          adventure
        </p>
      </div>

      <VehicleType />

      <div className="featuredVehiclesCards">
        {cars.slice(0, 6).map((car, index) => (
          <VehicleCard
            key={index}
            image={car.image}
            name={car.name}
            price={car.price}
            seater={car.seater}
            fuelType={car.fuelType}
            location={car.location}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedVehicles;