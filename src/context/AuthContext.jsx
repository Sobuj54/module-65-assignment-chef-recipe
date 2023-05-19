import React from "react";
import { createContext } from "react";

export const cuisineContext = createContext(null);

const AuthContext = ({ children }) => {
  const userInfo = {};

  return (
    <cuisineContext.Provider value={userInfo}>
      {children}
    </cuisineContext.Provider>
  );
};

export default AuthContext;
