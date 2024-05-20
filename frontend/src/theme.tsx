// src/theme.ts
import { Theme } from '@aws-amplify/ui-react';

const customTheme: Theme = {
  name: 'custom-theme',
  tokens: {
    colors: {
      brand: {
        primary: {
          '10': '{colors.green.10}',
          '20': '{colors.green.20}',
          '40': '{colors.green.40}',
          '60': '{colors.green.60}',
          '80': '{colors.green.80}',
          '90': '{colors.green.90}',
          '100': '{colors.green.100}',  
        },
        secondary: {
          '10': '{colors.yellow.10}',
          '20': '{colors.yellow.20}',
          '40': '{colors.yellow.40}',
          '60': '{colors.yellow.60}',
          '80': '{colors.yellow.80}',
          '90': '{colors.yellow.90}',
          '100': '{colors.yellow.100}',        
        },
      },
      background: {
        primary: '{colors.brand.primary.40}', // Use green.40 as the background color
      },
      font: {
        primary: '{colors.white}', // Set the text color to white
      }, 
    },
    components: {
      input: {
        color: { value: '{colors.black}' },
      },
    },
  },
};

export default customTheme;
