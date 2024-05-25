/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createRecipes = /* GraphQL */ `mutation CreateRecipes(
  $condition: ModelRecipesConditionInput
  $input: CreateRecipesInput!
) {
  createRecipes(condition: $condition, input: $input) {
    createdAt
    id
    owner
    recipeDirections
    recipeImage
    recipeIngredients
    recipeName
    updatedAt
    userProfile {
      createdAt
      email
      id
      profileOwner
      profilePicture
      updatedAt
      username
      __typename
    }
    userProfileID
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateRecipesMutationVariables,
  APITypes.CreateRecipesMutation
>;
export const createUserProfile = /* GraphQL */ `mutation CreateUserProfile(
  $condition: ModelUserProfileConditionInput
  $input: CreateUserProfileInput!
) {
  createUserProfile(condition: $condition, input: $input) {
    createdAt
    email
    id
    profileOwner
    profilePicture
    recipes {
      nextToken
      __typename
    }
    updatedAt
    username
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserProfileMutationVariables,
  APITypes.CreateUserProfileMutation
>;
export const deleteRecipes = /* GraphQL */ `mutation DeleteRecipes(
  $condition: ModelRecipesConditionInput
  $input: DeleteRecipesInput!
) {
  deleteRecipes(condition: $condition, input: $input) {
    createdAt
    id
    owner
    recipeDirections
    recipeImage
    recipeIngredients
    recipeName
    updatedAt
    userProfile {
      createdAt
      email
      id
      profileOwner
      profilePicture
      updatedAt
      username
      __typename
    }
    userProfileID
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteRecipesMutationVariables,
  APITypes.DeleteRecipesMutation
>;
export const deleteUserProfile = /* GraphQL */ `mutation DeleteUserProfile(
  $condition: ModelUserProfileConditionInput
  $input: DeleteUserProfileInput!
) {
  deleteUserProfile(condition: $condition, input: $input) {
    createdAt
    email
    id
    profileOwner
    profilePicture
    recipes {
      nextToken
      __typename
    }
    updatedAt
    username
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserProfileMutationVariables,
  APITypes.DeleteUserProfileMutation
>;
export const updateRecipes = /* GraphQL */ `mutation UpdateRecipes(
  $condition: ModelRecipesConditionInput
  $input: UpdateRecipesInput!
) {
  updateRecipes(condition: $condition, input: $input) {
    createdAt
    id
    owner
    recipeDirections
    recipeImage
    recipeIngredients
    recipeName
    updatedAt
    userProfile {
      createdAt
      email
      id
      profileOwner
      profilePicture
      updatedAt
      username
      __typename
    }
    userProfileID
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateRecipesMutationVariables,
  APITypes.UpdateRecipesMutation
>;
export const updateUserProfile = /* GraphQL */ `mutation UpdateUserProfile(
  $condition: ModelUserProfileConditionInput
  $input: UpdateUserProfileInput!
) {
  updateUserProfile(condition: $condition, input: $input) {
    createdAt
    email
    id
    profileOwner
    profilePicture
    recipes {
      nextToken
      __typename
    }
    updatedAt
    username
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserProfileMutationVariables,
  APITypes.UpdateUserProfileMutation
>;
