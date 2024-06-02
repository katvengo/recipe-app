'use client';
import React from 'react'
import { Button, ButtonProps } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';

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
