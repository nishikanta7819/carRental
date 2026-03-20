import React from "react";
import Navbar from "./components/Navbar";
import RentDashboard from "./components/RentDashboard";
import FeaturedVehicles from "./components/FeaturedVehicles";
import FAQs from "./components/FAQs";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <RentDashboard />
      <FeaturedVehicles />
      <FAQs/>
      <Reviews/>
      <Footer/>
    </>
  );
};

export default App;
