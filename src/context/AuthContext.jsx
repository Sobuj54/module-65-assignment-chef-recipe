import React, { useEffect, useState } from "react";
import { createContext } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const cuisineContext = createContext(null);

export const auth = getAuth(app);
// google provider
const googleProvider = new GoogleAuthProvider();

// github provider
const githubProvider = new GithubAuthProvider();

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  // google sign in
  const googleSignIn = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };

  // github login
  const githubSignIn = () => {
    setLoader(true);
    return signInWithPopup(auth, githubProvider);
  };

  const signUp = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoader(true);
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
      setLoader(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const userInfo = {
    user,
    loader,
    signUp,
    signIn,
    logOut,
    userProfile,
    googleSignIn,
    githubSignIn,
  };

  return (
    <cuisineContext.Provider value={userInfo}>
      {children}
    </cuisineContext.Provider>
  );
};

export default AuthContext;
