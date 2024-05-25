/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getRecipes = /* GraphQL */ `query GetRecipes($id: ID!) {
  getRecipes(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetRecipesQueryVariables,
  APITypes.GetRecipesQuery
>;
export const getUserProfile = /* GraphQL */ `query GetUserProfile($id: ID!) {
  getUserProfile(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetUserProfileQueryVariables,
  APITypes.GetUserProfileQuery
>;
export const listRecipes = /* GraphQL */ `query ListRecipes(
  $filter: ModelRecipesFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listRecipes(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      createdAt
      id
      owner
      recipeDirections
      recipeImage
      recipeIngredients
      recipeName
      updatedAt
      userProfileID
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRecipesQueryVariables,
  APITypes.ListRecipesQuery
>;
export const listUserProfiles = /* GraphQL */ `query ListUserProfiles(
  $filter: ModelUserProfileFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listUserProfiles(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      createdAt
      email
      id
      profileOwner
      profilePicture
      updatedAt
      username
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserProfilesQueryVariables,
  APITypes.ListUserProfilesQuery
>;
