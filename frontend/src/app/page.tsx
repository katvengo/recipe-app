"use client";

import React from "react";
import RecipeFormProvider from "../components/RecipeForm/RecipeFormProvider/RecipeFormProvider";
import "@aws-amplify/ui-react/styles.css";
//import SignUpForm from "../components/Auth/SignUp/SignUpForm";
import '../styles.css'; // Import your custom styles

export default function App() {

  return (
    <>
    <RecipeFormProvider/>
    </>   
  );
}
