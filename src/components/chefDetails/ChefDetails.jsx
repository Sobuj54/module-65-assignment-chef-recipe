import React from "react";
import "./chefDetails.css";

const ChefDetails = ({ chef }) => {
  const { name, picture, yearsOfExperience, numRecipes, likes } = chef;
  return (
    <div className="chefDetails">
      <h4>{name}</h4>
      <img src={picture} className="rounded image" />
      <p className="fw-semibold mt-3">Experience: {yearsOfExperience} Years</p>
      <p className="fw-semibold">Recipes: {numRecipes}</p>
      <p className="fw-semibold">Likes: {likes}</p>
    </div>
  );
};

export default ChefDetails;
