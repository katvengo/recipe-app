'use client';
import React, { useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import RecipeInput from '../RecipeInput/RecipeInput'
import RecipeButton from '../Button/RecipeButton'
import RecipeTextarea from '../RecipeTextarea/RecipeTextarea'

const styles = {
    container: {
        borderRadius: '1em',
        padding: '20px',
        color: 'white',
    }
}

const RecipeForm = () => {
    const [formData, setFormData] = useState({
        recipeName: '',
        recipeIngredients: '',
        recipeDirections: '',
      });
      
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };

return (
   <div className="sub-container" style={styles.container}>
    <h1>Recipe Form</h1>
    <form onSubmit={handleSubmit}>
        <RecipeInput 
          inputName="recipeName"
          labelName="Name"
          value={formData.recipeName}
          onChange={handleChange}
        />
        <RecipeInput
            inputName="recipeIngredients"
            labelName="Ingredients"
            value={formData.recipeIngredients}
            onChange={handleChange}
        />
        <RecipeTextarea
        name="recipeDirections"
        label="Directions"
        rows={3}
        value={formData.recipeDirections}
        onChange={handleChange}
        />
        <RecipeButton 
        type="submit" 
        variation="none"
        colorTheme="overlay"
        >
          Submit
        </RecipeButton>

        </form>
        </div>
)
}

export default RecipeForm