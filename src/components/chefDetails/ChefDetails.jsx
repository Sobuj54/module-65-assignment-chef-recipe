import React from "react";

const ChefDetails = ({ chef }) => {
  const { name, picture, yearsOfExperience, numRecipes, likes } = chef;
  return (
    <div>
      <h4>{name}</h4>
      <img src={picture} className="rounded" />
      <p>Experience: {yearsOfExperience} Years</p>
      <p>Recipes: {numRecipes}</p>
      <p>Likes: {likes}</p>
    </div>
  );
};

export default ChefDetails;
