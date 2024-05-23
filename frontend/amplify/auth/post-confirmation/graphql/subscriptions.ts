/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateRecipes = /* GraphQL */ `subscription OnCreateRecipes(
  $filter: ModelSubscriptionRecipesFilterInput
  $owner: String
) {
  onCreateRecipes(filter: $filter, owner: $owner) {
    createdAt
    id
    owner
    recipeDirections
    recipeIngredients
    recipeName
    updatedAt
    userProfile {
      createdAt
      email
      id
      profileOwner
      updatedAt
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
  $profileOwner: String
) {
  onCreateUserProfile(filter: $filter, profileOwner: $profileOwner) {
    createdAt
    email
    id
    profileOwner
    recipes {
      nextToken
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserProfileSubscriptionVariables,
  APITypes.OnCreateUserProfileSubscription
>;
export const onDeleteRecipes = /* GraphQL */ `subscription OnDeleteRecipes(
  $filter: ModelSubscriptionRecipesFilterInput
  $owner: String
) {
  onDeleteRecipes(filter: $filter, owner: $owner) {
    createdAt
    id
    owner
    recipeDirections
    recipeIngredients
    recipeName
    updatedAt
    userProfile {
      createdAt
      email
      id
      profileOwner
      updatedAt
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
  $profileOwner: String
) {
  onDeleteUserProfile(filter: $filter, profileOwner: $profileOwner) {
    createdAt
    email
    id
    profileOwner
    recipes {
      nextToken
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserProfileSubscriptionVariables,
  APITypes.OnDeleteUserProfileSubscription
>;
export const onUpdateRecipes = /* GraphQL */ `subscription OnUpdateRecipes(
  $filter: ModelSubscriptionRecipesFilterInput
  $owner: String
) {
  onUpdateRecipes(filter: $filter, owner: $owner) {
    createdAt
    id
    owner
    recipeDirections
    recipeIngredients
    recipeName
    updatedAt
    userProfile {
      createdAt
      email
      id
      profileOwner
      updatedAt
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
  $profileOwner: String
) {
  onUpdateUserProfile(filter: $filter, profileOwner: $profileOwner) {
    createdAt
    email
    id
    profileOwner
    recipes {
      nextToken
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserProfileSubscriptionVariables,
  APITypes.OnUpdateUserProfileSubscription
>;
