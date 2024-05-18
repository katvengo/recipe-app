'use client';
import React, { useState, FormEvent } from 'react'
import { Button } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';


const RecipeButton = ({text, size, variation, colorTheme, type, isDisabled, ...props}) => {
  return (
    <Button 
    size={size} 
    variation={variation} 
    colorTheme={colorTheme} 
    type={type}
    isDisabled={isDisabled}
    >
        {text}
        </Button>
  )
}

export default RecipeButton
