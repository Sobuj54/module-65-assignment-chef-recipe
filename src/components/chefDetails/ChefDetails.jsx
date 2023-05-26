import React from "react";
import "./chefDetails.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ChefDetails = ({ chef }) => {
  const { id, name, picture, yearsOfExperience, numRecipes, likes } = chef;

  return (
    <div className="chefDetails">
      <h4>{name}</h4>
      <img src={picture} className="rounded image" />
      <p className="fw-semibold mt-3">Experience: {yearsOfExperience} Years</p>
      <p className="fw-semibold">Recipes: {numRecipes}</p>
      <p className="fw-semibold">Likes: {likes}</p>
      <div>
        <Link to={`/chef/${id}`}>
          <Button variant="outline-success" className="w-100">
            View Recipes
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ChefDetails;
