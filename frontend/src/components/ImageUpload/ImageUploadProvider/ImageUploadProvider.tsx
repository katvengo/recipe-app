import React from 'react';
import { FilesProvider } from '../../../providers/FileProvider'; // Adjust the import path accordingly
import ImageUpload from '../ImageUpload'; // Adjust the import path accordingly

const ImageUploadWithProvider: React.FC = () => {
  return (
    <FilesProvider>
      <ImageUpload />
    </FilesProvider>
  );
};

export default ImageUploadWithProvider;
