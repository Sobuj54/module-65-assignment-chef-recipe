import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const LogIn = () => {
  const [active, setActive] = useState(true);

  return (
    <Container>
      <Form className="  w-50 mx-auto mt-5 border border-2 rounded p-5 border-warning">
        <h3 className="mb-4">Login</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onClick={() => setActive(!active)}
            type="checkbox"
            label="Accept terms & conditions"
          />
        </Form.Group>

        <Button
          className="w-100"
          disabled={active}
          variant="primary"
          type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default LogIn;
