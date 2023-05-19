import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { cuisineContext } from "../../context/AuthContext";

const LogIn = () => {
  const { signIn } = useContext(cuisineContext);

  const handleSignIn = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
  };

  return (
    <Container>
      <form
        onSubmit={handleSignIn}
        className="  w-50 mx-auto mt-5 border border-2 rounded p-5 border-warning mb-4">
        <h3 className="mb-4">Login</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Button className="w-100 " variant="primary" type="submit">
          Login
        </Button>
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
