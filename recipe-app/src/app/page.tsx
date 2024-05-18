import React from 'react'
import RecipeForm from '../components/RecipeForm/RecipeForm'

export default function App() {
  return (
    <>
    <div className="container">
     <h1>Recipe App</h1>
    </div>
    <div className="container">
    <h2>Create a Recipe Below</h2>
    </div>
    <div className="container">
    <RecipeForm></RecipeForm>
    </div>

     </>
  );
}
