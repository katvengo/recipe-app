"use client";

import React from "react";
import RecipeForm from "../components/RecipeForm/RecipeForm";
import "@aws-amplify/ui-react/styles.css";
//import SignUpForm from "../components/Auth/SignUp/SignUpForm";
import { Navigation } from "../components/Navigation/Navigation";
import '../styles.css'; // Import your custom styles
import Title from "../components/Title/Title"

export default function App() {

  return (
    <>
    <RecipeForm/>
    </>   
  );
}
