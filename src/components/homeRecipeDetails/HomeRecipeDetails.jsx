import React from "react";

const HomeRecipeDetails = ({ recipes }) => {
  return (
    <div>
      <img src={recipes.image} alt="" />
      <p>{recipes.name}</p>
    </div>
  );
};

export default HomeRecipeDetails;
