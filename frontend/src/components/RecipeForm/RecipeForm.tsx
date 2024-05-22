'use client';

import React, { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import RecipeInput from '../RecipeInput/RecipeInput';
import RecipeTextarea from '../RecipeTextarea/RecipeTextarea';
import { Schema } from '@/amplify/data/resource';
import { generateClient } from 'aws-amplify/data';
import FormComponent, { MyFormComponentProps } from '../FormComponent/FormComponent'

const client = generateClient<Schema>();


interface FormData {
    recipeName: string;
    recipeIngredients: string;
    recipeDirections: string;
  }
  
  const initialFormData: FormData = {
    recipeName: '',
    recipeIngredients: '',
    recipeDirections: '',
  };
  
  const clearForm = (
    setFormData: React.Dispatch<React.SetStateAction<FormData>>,
    initialFormData: FormData
  ) => {
    setFormData(initialFormData);
  };


const RecipeForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [recipes, setRecipes] = useState<Schema['Recipe']['type'][]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    putRecipe(formData.recipeName, formData.recipeIngredients, formData.recipeDirections);
  };

  const putRecipe = async (name: string, ingredients: string, directions: string) => {
    await client.models.Recipe.create({
      recipeName: name,
      recipeIngredients: ingredients,
      recipeDirections: directions,
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
      >
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
      </FormComponent>
      <ul>
        {recipes.map(({ id, recipeName }) => (
          <li key={id}>{recipeName}</li>
        ))}
      </ul>
      </>
  );
};

export default RecipeForm;
