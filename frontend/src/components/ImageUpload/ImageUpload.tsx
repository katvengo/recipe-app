'use client';
import React, { useState } from 'react';
import { StorageManager } from '@aws-amplify/ui-react-storage';
import '@aws-amplify/ui-react/styles.css';
import { StorageManagerHandle, ProcessFileParams } from '@aws-amplify/ui-react-storage/dist/types/components/StorageManager/types';

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

interface FileWithKey {
  file?: File;
  key?: string;
}

interface FileStatus {
  status?: 'uploading' | 'success' | 'error';
}

type FileState = Record<string, FileStatus | undefined>;

const processFile = async ({ file }: { file: File }): Promise<ProcessFileParams> => {
  const fileExtension = file.name.split('.').pop();

  const filebuffer = await file.arrayBuffer();
  const hashBuffer = await window.crypto.subtle.digest('SHA-1', filebuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((a) => a.toString(16).padStart(2, '0'))
    .join('');

  return { file, key: `${hashHex}.${fileExtension}` };
};

const ImageUpload: React.FC<ImageUploadProps> = ({ ref, maxFileCount, path }) => {
  const [files, setFiles] = useState<FileState>({});

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
      {Object.keys(files).map((key) => (
        files[key] ? (
          <div key={key}>
            {key}: {files[key]?.status}
          </div>
        ) : null
      ))}
    </>
  );
};

export default ImageUpload;
