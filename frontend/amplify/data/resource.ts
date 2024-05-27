import { type ClientSchema, a, defineData } from '@aws-amplify/backend';
import { postConfirmation } from "../auth/post-confirmation/resource";
 
const schema = a.schema({
  Recipes: a.model({
    id: a.id(),
    recipeName: a.string(),
    recipeIngredients: a.string(),
    recipeDirections: a.string(),
    recipeImage: a.string(),
    userProfileID: a.id(), // Foreign key field
    userProfile: a.belongsTo('UserProfile', 'userProfileID') // Correctly reference the foreign key field
  })
  .authorization(allow => [allow.publicApiKey()]),
      
  UserProfile: a.model({
    id: a.id(), // Adding id field for UserProfile
    email: a.string(),
    profilePicture: a.string(),
    username: a.string(),
    recipes: a.hasMany('Recipes', 'userProfileID'), // Reference the foreign key in Recipes
    profileOwner: a.string()
  })
  .authorization((allow) => [
    allow.publicApiKey().to(['read']),
    allow.owner(),
  ]),
})
.authorization((allow) => [allow.resource(postConfirmation)]);

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'apiKey',
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});
