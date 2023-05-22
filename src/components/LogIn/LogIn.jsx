import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { cuisineContext } from "../../context/AuthContext";
import "./LogIn.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LogIn = () => {
  const { signIn } = useContext(cuisineContext);
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);

  const handleSignIn = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
      })
      .catch((error) => {
        setError("Email and Password didn't match !!!");
        console.log(error);
      });
  };

  return (
    <Container>
      <form
        onSubmit={handleSignIn}
        className="form_width mx-auto mt-5 border border-2 rounded  border-warning mb-5">
        <h3 className="mb-4">Login</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3 password-container">
          <Form.Control
            // showing password or text depending on condition
            type={show ? "text" : "password"}
            name="password"
            placeholder="Password"
            required
          />

          {/* conditionally showing eye and eyeslash icon */}
          {show ? (
            <FaEyeSlash className="icon" onClick={() => setShow(!show)} />
          ) : (
            <FaEye className="icon" onClick={() => setShow(!show)} />
          )}
        </Form.Group>

        <Button className="w-100 " variant="primary" type="submit">
          Login
        </Button>
        <p className="text-danger mt-3 text-center">{error ? error : ""}</p>
        <p className="mt-4 text-center">
          <small>
            New to this site ?
            <Link
              to="/register"
              className="text-primary text-decoration-none ms-1">
              Register
            </Link>
          </small>
        </p>
      </form>
    </Container>
  );
};

export default LogIn;
