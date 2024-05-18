'use client';

import React from 'react'
import RecipeForm from '../components/RecipeForm/RecipeForm'
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

export default function App() {
  return (
    <>
    <div className="container">
      <h1>PrepCado - The new way to create and save recipes!</h1>
      </div>
    <Authenticator>
      {({signOut, user}) => (
    <main>
    <div className="container">
    <h2>Create a Recipe Below</h2>
    </div>
    <div className="container">
    <RecipeForm></RecipeForm>
    <button onClick={signOut}>Sign out</button>

    </div>  
    </main>    
  )}
</Authenticator>
     </>
  );
}
