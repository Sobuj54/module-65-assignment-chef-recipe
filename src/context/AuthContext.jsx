import React from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";

export const cuisineContext = createContext(null);

export const auth = getAuth(app);

const AuthContext = ({ children }) => {
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userInfo = { signUp };

  return (
    <cuisineContext.Provider value={userInfo}>
      {children}
    </cuisineContext.Provider>
  );
};

export default AuthContext;
