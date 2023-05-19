import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  const [active, setActive] = useState(true);

  return (
    <Container>
      <Form className="  w-50 mx-auto mt-5 border border-2 rounded p-5 border-warning mb-4">
        <h3 className="mb-4">Register</h3>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter Name"
            required
          />
        </Form.Group>
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
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            name="confirm"
            placeholder="Confirm Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onClick={() => setActive(!active)}
            type="checkbox"
            label="Accept terms & conditions"
          />
        </Form.Group>

        <Button
          disabled={active}
          className="w-100"
          variant="primary"
          type="submit">
          Register
        </Button>
        <p className="mt-4 text-center">
          <small>
            Already have an account ?
            <Link
              to="/login"
              className="text-primary text-decoration-none ms-1">
              Login
            </Link>
          </small>
        </p>
      </Form>
    </Container>
  );
};

export default Register;
