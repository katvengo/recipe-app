import React from 'react';
import { FilesProvider } from '../../../providers/FileProvider'; // Adjust the import path accordingly
import RecipeForm from '../RecipeForm'; // Adjust the import path accordingly

const RecipeFormWithProvider: React.FC = () => {
  return (
    <FilesProvider>
      <RecipeForm />
    </FilesProvider>
  );
};

export default RecipeFormWithProvider;
