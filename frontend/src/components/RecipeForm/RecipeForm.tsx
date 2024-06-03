'use client';

import React, { useState, useEffect } from 'react';
import RecipeInput from '../RecipeInput/RecipeInput';
import RecipeTextarea from '../RecipeTextarea/RecipeTextarea';
import { Schema } from '@/amplify/data/resource';
import { generateClient } from 'aws-amplify/data';
import FormComponent from '../FormComponent/FormComponent';
import { useAuthenticator, Heading, Grid, Card, HeadingLevel } from '@aws-amplify/ui-react';
import ImageUpload from '../ImageUpload/ImageUpload';
import MainDiv from '../MainDivComponent/MainDiv';
import { RecipeInterface } from "../../interfaces/RecipeInterface";
import { useFiles } from "../../providers/FileProvider";
const client = generateClient<Schema>();

const initialFormData: RecipeInterface = {
  recipeName: '',
  recipeIngredients: '',
  recipeDirections: '',
  recipeImage: '',
};

interface MyRecipeFormProps {
  level?: HeadingLevel | undefined

}
const clearForm = (
  setFormData: React.Dispatch<React.SetStateAction<RecipeInterface>>,
  initialFormData: RecipeInterface
) => {
  setFormData(initialFormData);
};

const RecipeForm: React.FC<MyRecipeFormProps> = () => {
  const [formData, setFormData] = useState<RecipeInterface>(initialFormData);
  const { user } = useAuthenticator((context) => [context.user]);
  const { files } = useFiles();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    if (files) {
      console.log(files, 'files being found for useEffect')
      const fileKey = Object.keys(files)[0];
      if (fileKey) {
        const imageSrc = `${process.env.STORAGE_URL}${fileKey}`
        console.log(imageSrc, 'image src')
        setFormData((prevData) => ({
          ...prevData,
          recipeImage: imageSrc || '',
        }));
      }
    }
  }, [files]);


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();     
    console.log(formData, 'formData ')
    createRecipe(formData.recipeName, formData.recipeIngredients, formData.recipeDirections, formData.recipeImage);
  };

  const createRecipe = async (name: string, ingredients: string, directions: string, image: string) => {
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
        console.log(error, 'error from createRecipe');
      });
  };

  return (
    <>
      <MainDiv>
        <Heading level={3}>Recipe Form</Heading>
        <Grid
          columnGap="0.5rem"
          rowGap="0.5rem"
          templateColumns="1fr 1fr"
          templateRows="1fr"
        >
          <Card
            columnStart="1"
            columnEnd="3"
            backgroundColor='#27B463'
          >
            <FormComponent 
              onSubmit={handleSubmit}
              type="submit"
            > 
              <RecipeInput
                inputName="recipeName"
                labelName="Name"
                value={formData.recipeName}
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
          </Card>
          <Card
            columnStart="3"
            columnEnd="5"
            backgroundColor='#27B463'
          >
            <ImageUpload />
          </Card>
        </Grid>
      </MainDiv>
    
    </>
  );
};

export default RecipeForm;
