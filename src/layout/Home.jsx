import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../shared/Navbar/Navbar";
import Footer from "../shared/footer/Footer";

const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Home;
