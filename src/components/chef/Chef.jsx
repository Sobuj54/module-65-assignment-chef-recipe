import React from "react";
import { useLoaderData } from "react-router-dom";
import ChefDetails from "../chefDetails/ChefDetails";
import "./Chef.css";
import Banner from "../banner/Banner";

const Chef = () => {
  const chefs = useLoaderData();

  return (
    <>
      <Banner></Banner>
      <div className="chefInfo">
        {chefs.map((chef) => (
          <ChefDetails key={chef.id} chef={chef}></ChefDetails>
        ))}
      </div>
    </>
  );
};

export default Chef;
