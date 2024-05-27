/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Recipes = {
  __typename: "Recipes",
  createdAt: string,
  id: string,
  recipeDirections?: string | null,
  recipeImage?: string | null,
  recipeIngredients?: string | null,
  recipeName?: string | null,
  updatedAt: string,
  userProfile?: UserProfile | null,
  userProfileID?: string | null,
};

export type UserProfile = {
  __typename: "UserProfile",
  createdAt: string,
  email?: string | null,
  id: string,
  owner?: string | null,
  profileOwner?: string | null,
  profilePicture?: string | null,
  recipes?: ModelRecipesConnection | null,
  updatedAt: string,
  username?: string | null,
};

export type ModelRecipesConnection = {
  __typename: "ModelRecipesConnection",
  items:  Array<Recipes | null >,
  nextToken?: string | null,
};

export type ModelRecipesFilterInput = {
  and?: Array< ModelRecipesFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelRecipesFilterInput | null,
  or?: Array< ModelRecipesFilterInput | null > | null,
  recipeDirections?: ModelStringInput | null,
  recipeImage?: ModelStringInput | null,
  recipeIngredients?: ModelStringInput | null,
  recipeName?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userProfileID?: ModelIDInput | null,
};

export type ModelStringInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  _null = "_null",
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
}


export type ModelSizeInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelIDInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelUserProfileFilterInput = {
  and?: Array< ModelUserProfileFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelUserProfileFilterInput | null,
  or?: Array< ModelUserProfileFilterInput | null > | null,
  owner?: ModelStringInput | null,
  profileOwner?: ModelStringInput | null,
  profilePicture?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  username?: ModelStringInput | null,
};

export type ModelUserProfileConnection = {
  __typename: "ModelUserProfileConnection",
  items:  Array<UserProfile | null >,
  nextToken?: string | null,
};

export type ModelRecipesConditionInput = {
  and?: Array< ModelRecipesConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  not?: ModelRecipesConditionInput | null,
  or?: Array< ModelRecipesConditionInput | null > | null,
  recipeDirections?: ModelStringInput | null,
  recipeImage?: ModelStringInput | null,
  recipeIngredients?: ModelStringInput | null,
  recipeName?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userProfileID?: ModelIDInput | null,
};

export type CreateRecipesInput = {
  id?: string | null,
  recipeDirections?: string | null,
  recipeImage?: string | null,
  recipeIngredients?: string | null,
  recipeName?: string | null,
  userProfileID?: string | null,
};

export type ModelUserProfileConditionInput = {
  and?: Array< ModelUserProfileConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  not?: ModelUserProfileConditionInput | null,
  or?: Array< ModelUserProfileConditionInput | null > | null,
  owner?: ModelStringInput | null,
  profileOwner?: ModelStringInput | null,
  profilePicture?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  username?: ModelStringInput | null,
};

export type CreateUserProfileInput = {
  email?: string | null,
  id?: string | null,
  profileOwner?: string | null,
  profilePicture?: string | null,
  username?: string | null,
};

export type DeleteRecipesInput = {
  id: string,
};

export type DeleteUserProfileInput = {
  id: string,
};

export type UpdateRecipesInput = {
  id: string,
  recipeDirections?: string | null,
  recipeImage?: string | null,
  recipeIngredients?: string | null,
  recipeName?: string | null,
  userProfileID?: string | null,
};

export type UpdateUserProfileInput = {
  email?: string | null,
  id: string,
  profileOwner?: string | null,
  profilePicture?: string | null,
  username?: string | null,
};

export type ModelSubscriptionRecipesFilterInput = {
  and?: Array< ModelSubscriptionRecipesFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionRecipesFilterInput | null > | null,
  recipeDirections?: ModelSubscriptionStringInput | null,
  recipeImage?: ModelSubscriptionStringInput | null,
  recipeIngredients?: ModelSubscriptionStringInput | null,
  recipeName?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userProfileID?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionStringInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIDInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionUserProfileFilterInput = {
  and?: Array< ModelSubscriptionUserProfileFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionUserProfileFilterInput | null > | null,
  owner?: ModelStringInput | null,
  profileOwner?: ModelSubscriptionStringInput | null,
  profilePicture?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  username?: ModelSubscriptionStringInput | null,
};

export type GetRecipesQueryVariables = {
  id: string,
};

export type GetRecipesQuery = {
  getRecipes?:  {
    __typename: "Recipes",
    createdAt: string,
    id: string,
    recipeDirections?: string | null,
    recipeImage?: string | null,
    recipeIngredients?: string | null,
    recipeName?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      createdAt: string,
      email?: string | null,
      id: string,
      owner?: string | null,
      profileOwner?: string | null,
      profilePicture?: string | null,
      updatedAt: string,
      username?: string | null,
    } | null,
    userProfileID?: string | null,
  } | null,
};

export type GetUserProfileQueryVariables = {
  id: string,
};

export type GetUserProfileQuery = {
  getUserProfile?:  {
    __typename: "UserProfile",
    createdAt: string,
    email?: string | null,
    id: string,
    owner?: string | null,
    profileOwner?: string | null,
    profilePicture?: string | null,
    recipes?:  {
      __typename: "ModelRecipesConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    username?: string | null,
  } | null,
};

export type ListRecipesQueryVariables = {
  filter?: ModelRecipesFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListRecipesQuery = {
  listRecipes?:  {
    __typename: "ModelRecipesConnection",
    items:  Array< {
      __typename: "Recipes",
      createdAt: string,
      id: string,
      recipeDirections?: string | null,
      recipeImage?: string | null,
      recipeIngredients?: string | null,
      recipeName?: string | null,
      updatedAt: string,
      userProfileID?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUserProfilesQueryVariables = {
  filter?: ModelUserProfileFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListUserProfilesQuery = {
  listUserProfiles?:  {
    __typename: "ModelUserProfileConnection",
    items:  Array< {
      __typename: "UserProfile",
      createdAt: string,
      email?: string | null,
      id: string,
      owner?: string | null,
      profileOwner?: string | null,
      profilePicture?: string | null,
      updatedAt: string,
      username?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CreateRecipesMutationVariables = {
  condition?: ModelRecipesConditionInput | null,
  input: CreateRecipesInput,
};

export type CreateRecipesMutation = {
  createRecipes?:  {
    __typename: "Recipes",
    createdAt: string,
    id: string,
    recipeDirections?: string | null,
    recipeImage?: string | null,
    recipeIngredients?: string | null,
    recipeName?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      createdAt: string,
      email?: string | null,
      id: string,
      owner?: string | null,
      profileOwner?: string | null,
      profilePicture?: string | null,
      updatedAt: string,
      username?: string | null,
    } | null,
    userProfileID?: string | null,
  } | null,
};

export type CreateUserProfileMutationVariables = {
  condition?: ModelUserProfileConditionInput | null,
  input: CreateUserProfileInput,
};

export type CreateUserProfileMutation = {
  createUserProfile?:  {
    __typename: "UserProfile",
    createdAt: string,
    email?: string | null,
    id: string,
    owner?: string | null,
    profileOwner?: string | null,
    profilePicture?: string | null,
    recipes?:  {
      __typename: "ModelRecipesConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    username?: string | null,
  } | null,
};

export type DeleteRecipesMutationVariables = {
  condition?: ModelRecipesConditionInput | null,
  input: DeleteRecipesInput,
};

export type DeleteRecipesMutation = {
  deleteRecipes?:  {
    __typename: "Recipes",
    createdAt: string,
    id: string,
    recipeDirections?: string | null,
    recipeImage?: string | null,
    recipeIngredients?: string | null,
    recipeName?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      createdAt: string,
      email?: string | null,
      id: string,
      owner?: string | null,
      profileOwner?: string | null,
      profilePicture?: string | null,
      updatedAt: string,
      username?: string | null,
    } | null,
    userProfileID?: string | null,
  } | null,
};

export type DeleteUserProfileMutationVariables = {
  condition?: ModelUserProfileConditionInput | null,
  input: DeleteUserProfileInput,
};

export type DeleteUserProfileMutation = {
  deleteUserProfile?:  {
    __typename: "UserProfile",
    createdAt: string,
    email?: string | null,
    id: string,
    owner?: string | null,
    profileOwner?: string | null,
    profilePicture?: string | null,
    recipes?:  {
      __typename: "ModelRecipesConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    username?: string | null,
  } | null,
};

export type UpdateRecipesMutationVariables = {
  condition?: ModelRecipesConditionInput | null,
  input: UpdateRecipesInput,
};

export type UpdateRecipesMutation = {
  updateRecipes?:  {
    __typename: "Recipes",
    createdAt: string,
    id: string,
    recipeDirections?: string | null,
    recipeImage?: string | null,
    recipeIngredients?: string | null,
    recipeName?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      createdAt: string,
      email?: string | null,
      id: string,
      owner?: string | null,
      profileOwner?: string | null,
      profilePicture?: string | null,
      updatedAt: string,
      username?: string | null,
    } | null,
    userProfileID?: string | null,
  } | null,
};

export type UpdateUserProfileMutationVariables = {
  condition?: ModelUserProfileConditionInput | null,
  input: UpdateUserProfileInput,
};

export type UpdateUserProfileMutation = {
  updateUserProfile?:  {
    __typename: "UserProfile",
    createdAt: string,
    email?: string | null,
    id: string,
    owner?: string | null,
    profileOwner?: string | null,
    profilePicture?: string | null,
    recipes?:  {
      __typename: "ModelRecipesConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    username?: string | null,
  } | null,
};

export type OnCreateRecipesSubscriptionVariables = {
  filter?: ModelSubscriptionRecipesFilterInput | null,
};

export type OnCreateRecipesSubscription = {
  onCreateRecipes?:  {
    __typename: "Recipes",
    createdAt: string,
    id: string,
    recipeDirections?: string | null,
    recipeImage?: string | null,
    recipeIngredients?: string | null,
    recipeName?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      createdAt: string,
      email?: string | null,
      id: string,
      owner?: string | null,
      profileOwner?: string | null,
      profilePicture?: string | null,
      updatedAt: string,
      username?: string | null,
    } | null,
    userProfileID?: string | null,
  } | null,
};

export type OnCreateUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserProfileSubscription = {
  onCreateUserProfile?:  {
    __typename: "UserProfile",
    createdAt: string,
    email?: string | null,
    id: string,
    owner?: string | null,
    profileOwner?: string | null,
    profilePicture?: string | null,
    recipes?:  {
      __typename: "ModelRecipesConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    username?: string | null,
  } | null,
};

export type OnDeleteRecipesSubscriptionVariables = {
  filter?: ModelSubscriptionRecipesFilterInput | null,
};

export type OnDeleteRecipesSubscription = {
  onDeleteRecipes?:  {
    __typename: "Recipes",
    createdAt: string,
    id: string,
    recipeDirections?: string | null,
    recipeImage?: string | null,
    recipeIngredients?: string | null,
    recipeName?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      createdAt: string,
      email?: string | null,
      id: string,
      owner?: string | null,
      profileOwner?: string | null,
      profilePicture?: string | null,
      updatedAt: string,
      username?: string | null,
    } | null,
    userProfileID?: string | null,
  } | null,
};

export type OnDeleteUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserProfileSubscription = {
  onDeleteUserProfile?:  {
    __typename: "UserProfile",
    createdAt: string,
    email?: string | null,
    id: string,
    owner?: string | null,
    profileOwner?: string | null,
    profilePicture?: string | null,
    recipes?:  {
      __typename: "ModelRecipesConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    username?: string | null,
  } | null,
};

export type OnUpdateRecipesSubscriptionVariables = {
  filter?: ModelSubscriptionRecipesFilterInput | null,
};

export type OnUpdateRecipesSubscription = {
  onUpdateRecipes?:  {
    __typename: "Recipes",
    createdAt: string,
    id: string,
    recipeDirections?: string | null,
    recipeImage?: string | null,
    recipeIngredients?: string | null,
    recipeName?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      createdAt: string,
      email?: string | null,
      id: string,
      owner?: string | null,
      profileOwner?: string | null,
      profilePicture?: string | null,
      updatedAt: string,
      username?: string | null,
    } | null,
    userProfileID?: string | null,
  } | null,
};

export type OnUpdateUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserProfileSubscription = {
  onUpdateUserProfile?:  {
    __typename: "UserProfile",
    createdAt: string,
    email?: string | null,
    id: string,
    owner?: string | null,
    profileOwner?: string | null,
    profilePicture?: string | null,
    recipes?:  {
      __typename: "ModelRecipesConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    username?: string | null,
  } | null,
};
