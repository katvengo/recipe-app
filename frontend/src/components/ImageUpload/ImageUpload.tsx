'use client';
import React, { useEffect } from 'react';
import { StorageManager } from '@aws-amplify/ui-react-storage';
import '@aws-amplify/ui-react/styles.css';
import { StorageManagerHandle, ProcessFileParams } from '@aws-amplify/ui-react-storage/dist/types/components/StorageManager/types';
import { useFiles } from '../../providers/FileProvider';

interface ImageUploadProps {
  ref?: React.ForwardedRef<StorageManagerHandle>;
  maxFileCount?: number;
  acceptedFileTypes?: string[];
  path?: string[];
  onFileRemove?:(file: {key: string}) => void;
  onUploadError?: (error: string, file: {key: string}) => void;
  onUploadSuccess?: (file: {key: string}) => void;
  onUploadStart?: (file: {key: string}) => void;
}

const processFile = async ({ file }: { file: File }): Promise<ProcessFileParams> => {
  
  const fileExtension = file.name.split('.').pop();
  const name = file.name.split('.')[0];
  const filebuffer = await file.arrayBuffer();
  const hashBuffer = await window.crypto.subtle.digest('SHA-1', filebuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((a) => a.toString(16).padStart(2, '0'))
    .join('');
  return { file, key: `${name}${hashHex}.${fileExtension}` };
};

const ImageUpload: React.FC<ImageUploadProps> = ({ ref }) => {
  const { files, setFiles } = useFiles();

  useEffect(() => {
    console.log('Files state changed:', files);
  }, [files]);


  const handleFileRemove = ({ key }: { key: string }) => {
    
    setFiles((prevFiles) => {
      const updatedFiles = { ...prevFiles };
      delete updatedFiles[key]; // Correct way to remove a key
      return updatedFiles;
    });
  };

  const handleUploadError = (error: string, { key }: { key: string }) => {
    console.log(error, key, 'key')
    setFiles((prevFiles) => ({
      ...prevFiles,
      [key]: {
        status: 'error',
      },
    }));
  };

  const handleUploadSuccess = ({ key }: { key?: string | undefined }) => {
    if (key) {
      setFiles((prevFiles) => ({
        ...prevFiles,
        [key]: {
          status: 'success',
        },
      }));
    }
  };

  const handleUploadStart = ({ key }: { key?: string }) => {
    console.log(files, 'files from imageUpload')
    if(key) {
      setFiles((prevFiles) => ({
      ...prevFiles,
      [key]: {
        status: 'uploading',
      },
    }));
  }
  };

  return (
    <>
      <StorageManager
        acceptedFileTypes={['image/*']}
        path={({ identityId }) => `recipe-photos/${identityId}/`}
        maxFileCount={1}
        processFile={processFile}
        ref={ref}
        onFileRemove={handleFileRemove}
        onUploadError={handleUploadError}
        onUploadSuccess={handleUploadSuccess}
        onUploadStart={handleUploadStart}
      />
    </>
  );
};

export default ImageUpload;
