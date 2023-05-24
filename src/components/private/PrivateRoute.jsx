import React, { useContext } from "react";
import { cuisineContext } from "../../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  console.log(location);

  const { user, loader } = useContext(cuisineContext);

  if (loader) {
    return (
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
