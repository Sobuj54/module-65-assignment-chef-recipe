import React from "react";
import { useLoaderData } from "react-router-dom";
import "./Recipes.css";

const Recipes = () => {
  const recipes = useLoaderData();
  const { name, picture, yearsOfExperience, numRecipes, likes, bio, id } =
    recipes;

  return (
    <div className="chef-description">
      <img src={picture} alt="" />
      <section>
        <h4>Name : {name}</h4>
        <p>
          <span className="fw-semibold">Bio</span> : {bio}
        </p>
        <p>
          <span className="fw-semibold">Likes</span> : {likes}
        </p>
        <p>
          <span className="fw-semibold">Recipes</span> : {numRecipes}
        </p>
        <p>
          <span className="fw-semibold">Experience</span> : {yearsOfExperience}{" "}
          years
        </p>
      </section>
    </div>
  );
};

export default Recipes;
