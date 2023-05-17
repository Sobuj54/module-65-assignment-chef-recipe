// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFKVSb9RWDl1EusGpiKLh-bJsVBYYOM8o",
  authDomain: "chef-recipe-cuisine.firebaseapp.com",
  projectId: "chef-recipe-cuisine",
  storageBucket: "chef-recipe-cuisine.appspot.com",
  messagingSenderId: "1050603752188",
  appId: "1:1050603752188:web:65dfe46b5d9eb3b92de579",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
