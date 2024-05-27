'use client';

import React, { useEffect, useState } from "react";
import Welcome from "@/components/UserProfileComponents/Welcome/Welcome"
import { useAuthenticator } from '@aws-amplify/ui-react';
import { Schema } from '@/amplify/data/resource';
import { generateClient } from 'aws-amplify/data';
import RecipeCard from "@/components/RecipeCard/RecipeCard"
import { UserProfile } from '../../../../amplify/auth/post-confirmation/graphql/API';
const client = generateClient<Schema>();

interface Props {
  params: { slug: string };
}

const UserDetailPage = ({ params: { slug } }: Props) => {
  // Initialize userDetails to null and use the correct type
  const [userDetails, setUserDetails] = useState<Schema['UserProfile']['type'] | null>(null);
  const [recipes, setRecipes] = useState<Schema['Recipes']['type'][]>([]);

  useEffect(() => {
    const getUserProfile = async (userId: string) => {
      try {
        const response = await client.models.UserProfile.get({ id: userId });
        const userInfo = response.data;
        setUserDetails(userInfo);
        getUserRecipes(userId);
      } catch (error) {
        console.log(error, 'error from getting current user');
      }
    };

    const getUserRecipes = async (userId: string) => {
      try {
        const response = await client.models.Recipes.list({filter: { userProfileID: { eq: userId } }});
        const recipesData = response.data;
        setRecipes(recipesData);
      } catch (error) {
        console.log(error, 'error from getting current user');
      }
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
