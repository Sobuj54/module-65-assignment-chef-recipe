import React, { useState } from "react";
import { Button, Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div
      style={{
        backgroundImage: `url("https://img.freepik.com/premium-photo/closeup-muslim-father-passing-his-son-lafah-bread-during-dinner-dining-table-ramadan-ai-generative_337384-4780.jpg?w=740") `,
        backgroundSize: "cover",
        height: "100vh",
        backgroundRepeat: "no-repeat",
      }}>
      <Navbar className="bg-primary bg-opacity-75 sticky-top" variant="dark">
        <Container>
          <Navbar.Brand className="me-6">Chefs Choice</Navbar.Brand>
          <div className="mx-auto ">
            <NavLink
              className={`me-3 me-md-5 text-decoration-none  ${(isActive) =>
                isActive ? "active" : "text-white"}`}
              to="/">
              Home
            </NavLink>
            <NavLink
              className={`me-2 me-md-5 text-decoration-none ${(isActive) =>
                isActive ? "active" : " text-white"}`}
              to="/blog">
              Blog
            </NavLink>
          </div>
          <Link to="/login">
            <Button variant="warning">Login</Button>
          </Link>
        </Container>
      </Navbar>
      <div className="hero-text d-flex align-items-center justify-content-center">
        <h1 className="text-white ">Arabian Cuisine</h1>
      </div>
    </div>
  );
};

export default NavBar;
