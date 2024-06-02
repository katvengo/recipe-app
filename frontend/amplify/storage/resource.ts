import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
    name: 'recipeImageStorage',
    access: (allow) => ({
        'recipe-photos/{identityId}/*': [
          allow.guest.to(['read']),
          allow.entity('identity').to(['read', 'write', 'delete'])
        ],
      })
})