import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../shared/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </>
  );
};

export default Home;
