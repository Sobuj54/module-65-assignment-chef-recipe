import React from "react";
import "./RecipeDetails.css";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RecipeDetails = ({ recipe }) => {
  const { name, ingredients, cookingMethod, rating, image } = recipe;

  //   using react toast
  const showToastMessage = () => {
    toast.info("Added to Favorite", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

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
      <div className="button-favorite">
        <Button onClick={showToastMessage} className="w-100" variant="success">
          Favorite
        </Button>
        {/* toastContainer is a must because without it the toast pop up won't be displayed */}
        <ToastContainer />
      </div>
    </>
  );
};

export default RecipeDetails;
