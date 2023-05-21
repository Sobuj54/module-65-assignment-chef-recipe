import React from "react";
import "./chefDetails.css";

const ChefDetails = ({ chef }) => {
  const { name, picture, yearsOfExperience, numRecipes, likes } = chef;
  return (
    <div className="chefDetails">
      <h4>{name}</h4>
      <img src={picture} className="rounded image" />
      <p>Experience: {yearsOfExperience} Years</p>
      <p>Recipes: {numRecipes}</p>
      <p>Likes: {likes}</p>
    </div>
  );
};

export default ChefDetails;
