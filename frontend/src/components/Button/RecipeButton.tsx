'use client';
import React, { useState, FormEvent } from 'react'
import { Button, ButtonProps, ButtonVariations, ButtonColorTheme } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import { type ClientSchema } from '@aws-amplify/backend';

export interface MyButtonProps extends ButtonProps {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset"; 
}

const RecipeButton:React.FC<MyButtonProps> = ({ 
  children,
  type = "button",
  ...props}) => {
  const childrenAsReactNode = children as React.ReactNode;

  return <Button type={type} {...props}>{childrenAsReactNode}</Button>;

}

export default RecipeButton
