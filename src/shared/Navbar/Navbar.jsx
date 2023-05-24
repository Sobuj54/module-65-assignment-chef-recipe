import React, { useContext } from "react";
import { Button, Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
import { cuisineContext } from "../../context/AuthContext";

const NavBar = () => {
  const { user, logOut } = useContext(cuisineContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("logout complete");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Navbar className="bg-primary bg-opacity-75 sticky-top" variant="dark">
      <Container>
        <Navbar.Brand className="me-6">Chefs Choice</Navbar.Brand>
        <div className="mx-auto">
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

        {/* conditional rendering of login and logout */}
        {user ? (
          <>
            <img className="photo-container" src={user.photoURL} alt="" />

            <Link to="/login">
              <Button
                onClick={handleLogOut}
                className="text-white margin"
                variant="warning">
                Logout
              </Button>
            </Link>
          </>
        ) : (
          <Link to="/login">
            <Button className="text-white" variant="warning">
              Login
            </Button>
          </Link>
        )}
      </Container>
    </Navbar>
  );
};

export default NavBar;
