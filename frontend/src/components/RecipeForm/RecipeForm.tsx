'use client';

import React, { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import RecipeInput from '../RecipeInput/RecipeInput';
import RecipeTextarea from '../RecipeTextarea/RecipeTextarea';
import { Schema } from '@/amplify/data/resource';
import { generateClient } from 'aws-amplify/data';
import FormComponent, { MyFormComponentProps } from '../FormComponent/FormComponent'
import { useAuthenticator } from '@aws-amplify/ui-react';
import RecipeImage from '../Image/Image';

const client = generateClient<Schema>();


interface FormData {
    recipeName: string;
    recipeIngredients: string;
    recipeDirections: string;
    recipeImage: string;
  }
  
  const initialFormData: FormData = {
    recipeName: '',
    recipeIngredients: '',
    recipeDirections: '',
    recipeImage: '',
  };
  
  const clearForm = (
    setFormData: React.Dispatch<React.SetStateAction<FormData>>,
    initialFormData: FormData
  ) => {
    setFormData(initialFormData);
  };


const RecipeForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [recipes, setRecipes] = useState<Schema['Recipes']['type'][]>([]);
  const { user, signOut } = useAuthenticator((context) => [context.user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    putRecipe(formData.recipeName, formData.recipeIngredients, formData.recipeDirections, formData.recipeImage);
  };

  const putRecipe = async (name: string, ingredients: string, directions: string, image: string) => {
    await client.models.Recipes.create({
      recipeName: name,
      recipeIngredients: ingredients,
      recipeDirections: directions,
      recipeImage: image,
      userProfileID: user.userId
    },
    {
      authMode: 'apiKey',
    })
      .then((response) => {
        if (response.data) {
          alert('Recipe created!');
          clearForm(setFormData, initialFormData);
        }
      })
      .catch((error) => {
        console.log(error, 'error from putRecipe');
      });
  };

  return (
    <>
      <FormComponent 
      onSubmit={handleSubmit}
      formName="Recipe Form"
      type="submit"
      >
        <RecipeInput
          inputName="recipeName"
          labelName="Name"
          value={formData.recipeName}
          onChange={handleChange}
        />
        <RecipeInput
          inputName="recipeImage"
          labelName="Image URL"
          value={formData.recipeImage}
          onChange={handleChange}
        />
        <RecipeTextarea
          name="recipeIngredients"
          label="Ingredients"
          rows={3}
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
      </FormComponent>
      </>
  );
};

export default RecipeForm;
