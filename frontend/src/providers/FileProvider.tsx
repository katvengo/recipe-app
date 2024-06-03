'use client'
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface FileStatus {
  status: 'uploading' | 'success' | 'error';
}

type FileState = Record<string, FileStatus | undefined>;

interface FilesContextType {
  files: FileState;
  setFiles: React.Dispatch<React.SetStateAction<FileState>>;
}

const FilesContext = createContext<FilesContextType | undefined>(undefined);

export const FilesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [files, setFiles] = useState<FileState>({});

  return (
    <FilesContext.Provider value={{ files, setFiles }}>
      {children}
    </FilesContext.Provider>
  );
};

export const useFiles = (): FilesContextType => {
  const context = useContext(FilesContext);
  if (context === undefined) {
    throw new Error('useFiles must be used within a FilesProvider');
  }
  return context;
};
