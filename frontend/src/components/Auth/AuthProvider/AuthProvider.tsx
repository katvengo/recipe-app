'use client';

import React, { ReactNode, useContext, createContext } from 'react';
import { Authenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import { Schema } from '@/amplify/data/resource';
import { AuthUser } from '@aws-amplify/auth';


const AuthContext = createContext<Schema['UserProfile']['type'] | null>(null)

 interface AuthProps {
  children?: ReactNode;
}

const AuthProvider: React.FC<AuthProps> = ({ 
  children, 
}) => {  
  return (
    <Authenticator variation='modal' loginMechanisms={['email']} signUpAttributes={['preferred_username']}
    >
      {children}
    </Authenticator>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};