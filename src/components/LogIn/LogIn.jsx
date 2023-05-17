import React from "react";
import { Button, Container, Form } from "react-bootstrap";

const LogIn = () => {
  return (
    <Container>
      <Form className="w-50 mx-auto mt-5 border border-2 rounded p-5">
        <h3 className="mb-4">Login</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Accept terms & conditions" />
        </Form.Group>

        <Button className="w-100" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default LogIn;
