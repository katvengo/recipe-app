'use client';

import React, { useEffect, useState } from "react";
import Welcome from "@/components/UserProfileComponents/Welcome/Welcome"
import { Schema } from '@/amplify/data/resource';
import { generateClient } from 'aws-amplify/data';
import RecipeCard from "@/components/RecipeCard/RecipeCard"
const client = generateClient<Schema>();

interface Props {
  params: { slug: string };
}

const UserDetailPage = ({ params: { slug } }: Props) => {
  const [userDetails, setUserDetails] = useState<Schema['UserProfile']['type'] | null>(null);
  const [recipes, setRecipes] = useState<Schema['Recipes']['type'][]>([]);

  useEffect(() => {
    const getUserProfile = (userId: string) => {
      client.models.UserProfile.get({ id: userId })
        .then(response => {
          const userInfo = response.data;
          setUserDetails(userInfo);
          return getUserRecipes(userId); // Return the promise to chain
        })
        .then(recipesData => {
          setRecipes(recipesData);
        })
        .catch(error => {
          console.log(error, 'error from getting current user');
        });
    };
  
    const getUserRecipes = (userId: string) => {
      return client.models.Recipes.list({filter: { userProfileID: { eq: userId } }})
        .then(response => {
          return response.data;
        });
    };
  
    if (slug) {
      getUserProfile(slug);
    }
  }, [slug]);

  return (
    <>
      <Welcome username={userDetails?.username} />
      <ul>
        {recipes.map(({ id, recipeName, recipeImage, recipeIngredients, recipeDirections }) => (
          <RecipeCard
            key={id}
            recipeName={recipeName}
            recipeImage={recipeImage}
            recipeIngredients={recipeIngredients}
            recipeDirections={recipeDirections}
          />
        ))}
      </ul>
    </>
  );
};

export default UserDetailPage;
