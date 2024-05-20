"use client";

import React from "react";
import RecipeForm from "../components/RecipeForm/RecipeForm";
import { Authenticator, ThemeProvider } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
//import SignUpForm from "../components/Auth/SignUp/SignUpForm";
import customTheme from "../theme";
import { Navigation } from "../components/Navigation/Navigation";
import '../styles.css'; // Import your custom styles
import Title from "../components/Title/Title"

export default function App() {

  return (
    <Authenticator.Provider>
      <ThemeProvider theme={customTheme}>
        <Authenticator variation="modal" loginMechanisms={["email"]}>
          {({ signOut, user }) => (
            <>
            <Navigation></Navigation>
            <main className="main-content">
                <RecipeForm/>
            </main>
            </>
          )}
        </Authenticator>
      </ThemeProvider>
    </Authenticator.Provider>
  );
}
