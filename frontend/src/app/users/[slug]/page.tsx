'use client';

import React, { useEffect, useState } from "react";
import Welcome from "@/components/UserProfileComponents/Welcome/Welcome"
import { useAuthenticator } from '@aws-amplify/ui-react';
import { Schema } from '@/amplify/data/resource';
import { generateClient } from 'aws-amplify/data';
const client = generateClient<Schema>();


interface Props {
  params: { slug: string };
}

interface RecipeProps {
id?: string,
recipeDirections?: string,
recipeImage?: string,
recipeIngredients?: string,
recipeName?: string,
userProfileID?: string
}

interface UserProfileType {
  id: string | null;
  email: string | null;
  profilePicture: string | null;
  username: string | null;
  recipes: RecipeProps[];
  profileOwner: string | null;
}

const UserDetailPage = ({ params: { slug } }: Props ) => {
  const { user, signOut } = useAuthenticator((context) => [context.user])
  const [userDetails, setUserDetails] = useState<Schema['UserProfile']['type'] | null>(null);
  // const [ userRecipes, setUserRecipes ] = useState([]);

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        await client.models.UserProfile.get({ 
          id: user.userId 
        })
          .then((response) => {
              const userInfo = response.data
              setUserDetails(userInfo)  
            })
          .catch((error) => {
            console.log(error, 'error from grab userProfile');
          });
      } catch (error) {
        console.log(error, 'error from getting current user');
      }
    };

    getUserProfile();
  }, [user.userId, userDetails, setUserDetails]);

  return (
    <>
  <Welcome username={userDetails?.username} />
  
    </>
  );
};

export default UserDetailPage;
