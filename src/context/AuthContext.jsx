import React from "react";
import { createContext } from "react";
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";

export const cuisineContext = createContext(null);

export const authProvider = getAuth(app);

const AuthContext = ({ children }) => {
  const userInfo = {};

  return (
    <cuisineContext.Provider value={userInfo}>
      {children}
    </cuisineContext.Provider>
  );
};

export default AuthContext;
