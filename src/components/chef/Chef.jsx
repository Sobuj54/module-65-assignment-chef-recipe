import React from "react";
import { Container } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import ChefDetails from "../chefDetails/ChefDetails";

const Chef = () => {
  const chefs = useLoaderData();

  return (
    <Container>
      {chefs.map((chef) => (
        <ChefDetails key={chef.id} chef={chef}></ChefDetails>
      ))}
    </Container>
  );
};

export default Chef;
