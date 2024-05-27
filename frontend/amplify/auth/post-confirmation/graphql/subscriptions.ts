/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateRecipes = /* GraphQL */ `subscription OnCreateRecipes($filter: ModelSubscriptionRecipesFilterInput) {
  onCreateRecipes(filter: $filter) {
    createdAt
    id
    recipeDirections
    recipeImage
    recipeIngredients
    recipeName
    updatedAt
    userProfile {
      createdAt
      email
      id
      owner
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
` as GeneratedSubscription<
  APITypes.OnCreateRecipesSubscriptionVariables,
  APITypes.OnCreateRecipesSubscription
>;
export const onCreateUserProfile = /* GraphQL */ `subscription OnCreateUserProfile(
  $filter: ModelSubscriptionUserProfileFilterInput
  $owner: String
) {
  onCreateUserProfile(filter: $filter, owner: $owner) {
    createdAt
    email
    id
    owner
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
` as GeneratedSubscription<
  APITypes.OnCreateUserProfileSubscriptionVariables,
  APITypes.OnCreateUserProfileSubscription
>;
export const onDeleteRecipes = /* GraphQL */ `subscription OnDeleteRecipes($filter: ModelSubscriptionRecipesFilterInput) {
  onDeleteRecipes(filter: $filter) {
    createdAt
    id
    recipeDirections
    recipeImage
    recipeIngredients
    recipeName
    updatedAt
    userProfile {
      createdAt
      email
      id
      owner
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
` as GeneratedSubscription<
  APITypes.OnDeleteRecipesSubscriptionVariables,
  APITypes.OnDeleteRecipesSubscription
>;
export const onDeleteUserProfile = /* GraphQL */ `subscription OnDeleteUserProfile(
  $filter: ModelSubscriptionUserProfileFilterInput
  $owner: String
) {
  onDeleteUserProfile(filter: $filter, owner: $owner) {
    createdAt
    email
    id
    owner
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserProfileSubscriptionVariables,
  APITypes.OnDeleteUserProfileSubscription
>;
export const onUpdateRecipes = /* GraphQL */ `subscription OnUpdateRecipes($filter: ModelSubscriptionRecipesFilterInput) {
  onUpdateRecipes(filter: $filter) {
    createdAt
    id
    recipeDirections
    recipeImage
    recipeIngredients
    recipeName
    updatedAt
    userProfile {
      createdAt
      email
      id
      owner
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
` as GeneratedSubscription<
  APITypes.OnUpdateRecipesSubscriptionVariables,
  APITypes.OnUpdateRecipesSubscription
>;
export const onUpdateUserProfile = /* GraphQL */ `subscription OnUpdateUserProfile(
  $filter: ModelSubscriptionUserProfileFilterInput
  $owner: String
) {
  onUpdateUserProfile(filter: $filter, owner: $owner) {
    createdAt
    email
    id
    owner
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserProfileSubscriptionVariables,
  APITypes.OnUpdateUserProfileSubscription
>;
