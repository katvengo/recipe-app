'use client';
import React, { useState, FormEvent } from 'react'
import { Button } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { type ClientSchema } from '@aws-amplify/backend';

interface MyButtonProps {
  children: React.ReactNode,
  type: string,
  variation: string,
  colorTheme: string
}

const RecipeButton:React.FC<MyButtonProps> = ({ children }) => {
  const childrenAsReactNode = children as React.ReactNode;

  return <Button>{childrenAsReactNode}</Button>;

}

export default RecipeButton
