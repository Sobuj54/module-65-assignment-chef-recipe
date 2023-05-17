import React, { useState } from "react";
import { Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand className="me-6">Chefs Choice</Navbar.Brand>
        <div className="mx-auto ">
          <NavLink
            className={` me-5 text-decoration-none  ${(isActive) =>
              isActive ? "active" : "text-white"}`}
            to="/">
            Home
          </NavLink>
          <NavLink
            className={` me-5 text-decoration-none ${(isActive) =>
              isActive ? "active" : " text-white"}`}
            to="/blog">
            Blog
          </NavLink>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavBar;
