"use client";

import React from "react";
import RecipeForm from "../components/RecipeForm/RecipeForm";
import "@aws-amplify/ui-react/styles.css";
//import SignUpForm from "../components/Auth/SignUp/SignUpForm";
import '../styles.css'; // Import your custom styles

export default function App() {

  return (
    <>
    <RecipeForm/>
    </>   
  );
}
