import React, { useEffect, useState } from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const cuisineContext = createContext(null);

export const auth = getAuth(app);

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const userProfile = (name, currentUser) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  //   must use useEffect to get the current user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      console.log("current user", loggedUser);
      setUser(loggedUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const userInfo = { user, signUp, signIn, logOut, userProfile };

  return (
    <cuisineContext.Provider value={userInfo}>
      {children}
    </cuisineContext.Provider>
  );
};

export default AuthContext;
