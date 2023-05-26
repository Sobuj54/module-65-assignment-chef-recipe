import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ChefDetails from "../chefDetails/ChefDetails";
import "./Chef.css";
import Banner from "../banner/Banner";
import HomeRecipes from "../homeReicpes/HomeRecipes";

const Chef = () => {
  const chefs = useLoaderData();

  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    fetch("https://chefs-choice-server-sobuj54.vercel.app/recipe")
      .then((res) => res.json())
      .then((data) => setRecipe(data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Banner></Banner>
      <h2 className="heading">Our Chefs</h2>
      <p className="description">
        You can choose your favorite chef from here. We have world class chefs
        for you.
      </p>
      <div className="chefInfo">
        {chefs.map((chef) => (
          <ChefDetails key={chef.id} chef={chef}></ChefDetails>
        ))}
      </div>
      <div>
        <HomeRecipes recipe={recipe}></HomeRecipes>
      </div>
    </>
  );
};

export default Chef;
