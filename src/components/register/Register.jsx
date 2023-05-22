import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { cuisineContext } from "../../context/AuthContext";

const Register = () => {
  const [active, setActive] = useState(true);
  const { signUp, userProfile } = useContext(cuisineContext);

  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    signUp(email, password)
      .then((result) => {
        // setting display name
        result.user.displayName = name;
        const newUser = result.user;
        // update profile
        userProfile(name, newUser)
          .then(() => {
            console.log("profile updated");
          })
          .catch((error) => {
            console.log(error.message);
          });
        console.log(newUser);
        form.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      <form
        onSubmit={handleRegister}
        className="form_width mx-auto mt-5 border border-2 rounded  border-warning mb-4">
        <h3 className="mb-4">Register</h3>

        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="password"
            name="confirm"
            placeholder="Confirm Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
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
      </form>
    </Container>
  );
};

export default Register;
