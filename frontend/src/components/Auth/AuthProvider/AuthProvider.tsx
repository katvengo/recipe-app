'use client';

import React, { ReactNode, useContext, createContext } from 'react';
import { Authenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import { Schema } from '@/amplify/data/resource';
import { AuthUser } from '@aws-amplify/auth';
import Title from "../../Title/Title"


const AuthContext = createContext<Schema['UserProfile']['type'] | null>(null)

 interface AuthProps {
  children?: ReactNode;
}

const components = {
  Header() {
    return (
      <Title />
    );
  },
}
const AuthProvider: React.FC<AuthProps> = ({ 
  children, 
}) => {  
  return (
    <Authenticator loginMechanisms={['email']} signUpAttributes={['preferred_username']} components={components}
    >
      {children}
    </Authenticator>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};