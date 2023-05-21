import React from "react";
import { Container } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import ChefDetails from "../chefDetails/ChefDetails";
import "./Chef.css";

const Chef = () => {
  const chefs = useLoaderData();

  return (
    <div className="chefInfo">
      {chefs.map((chef) => (
        <ChefDetails key={chef.id} chef={chef}></ChefDetails>
      ))}
    </div>
  );
};

export default Chef;
