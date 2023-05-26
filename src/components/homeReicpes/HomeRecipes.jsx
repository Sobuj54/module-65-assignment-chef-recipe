import React from "react";
import HomeRecipeDetails from "../homeRecipeDetails/HomeRecipeDetails";
import { Button } from "react-bootstrap";

const HomeRecipes = ({ recipe, setRecipe }) => {
  return (
    <div>
      {recipe.map((d) => (
        <HomeRecipeDetails key={d.id} recipes={d}></HomeRecipeDetails>
      ))}
      <div>
        <Button variant="outline-primary">Show more</Button>
      </div>
    </div>
  );
};

export default HomeRecipes;
