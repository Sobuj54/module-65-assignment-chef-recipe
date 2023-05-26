import React, { useState } from "react";
import HomeRecipeDetails from "../homeRecipeDetails/HomeRecipeDetails";

const HomeRecipes = ({ recipe }) => {
  const slicedRecipe = recipe.slice(0, 5);

  return (
    <div style={{ marginTop: "100px", marginBottom: "100px" }}>
      <h2 className="text-center">Here are few recipes</h2>
      <p className="text-center mt-4">
        You can find your desired recipe from here. Our top recipes from top
        chefs are show here.
      </p>
      {slicedRecipe.map((d) => (
        <HomeRecipeDetails key={d.id} recipes={d}></HomeRecipeDetails>
      ))}
    </div>
  );
};

export default HomeRecipes;
