import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
    name: 'recipeImageStorage',
    access: (allow) => ({
      'recipe-photos/{entity_id}/*': [
        allow.guest.to(['read']),
        allow.entity('identity').to(['read', 'write', 'delete'])
      ],
      'profile-photos/{entity_id}/*': [
        allow.guest.to(['read']),
        allow.entity('identity').to(['read', 'write', 'delete'])
      ],
    })
})