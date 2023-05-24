import React from "react";
import "./RecipeDetails.css";

const RecipeDetails = ({ recipe }) => {
  const { name, ingredients, cookingMethod, rating, image } = recipe;

  return (
    <>
      <h4 className="text-center mt-5">{name}</h4>
      <div className="recipe-details">
        <div>
          <img src={image} alt="" />
        </div>
        <p>
          <span className="fw-semibold">Ingredients</span> :{ingredients}
        </p>
        <p>
          <span className="fw-semibold">Cooking Method</span> : {cookingMethod}
        </p>
      </div>
    </>
  );
};

export default RecipeDetails;
