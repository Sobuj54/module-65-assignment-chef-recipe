import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../shared/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
