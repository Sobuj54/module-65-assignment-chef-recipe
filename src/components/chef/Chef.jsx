import React from "react";
import { useLoaderData } from "react-router-dom";
import ChefDetails from "../chefDetails/ChefDetails";
import "./Chef.css";
import Banner from "../banner/Banner";

const Chef = () => {
  const chefs = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <h2 className="heading">Our Chefs</h2>
      <p className=" description">
        You can choose your favorite chef from here. We have world class chefs
        for you.
      </p>
      <div className="chefInfo">
        {chefs.map((chef) => (
          <ChefDetails key={chef.id} chef={chef}></ChefDetails>
        ))}
      </div>
    </div>
  );
};

export default Chef;
