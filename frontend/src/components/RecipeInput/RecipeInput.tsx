'use client';
import React from 'react'
import { Input, Label } from '@aws-amplify/ui-react';

const styles = {
  formField: {
    display: 'flex',
    // eslint-disable-next-line @typescript-eslint/prefer-as-const
    flexDirection: 'column' as 'column',
    marginBottom: '1rem',
  },
  label: {
    marginBottom: '0.5rem',
    color: 'white'
  },
}

interface MyInputProps {
  labelName: string,
   inputName: string,
   value: string,
   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }

const RecipeInput: React.FC<MyInputProps> = ({ labelName, inputName, value, onChange }) => (
<div style={styles.formField}>    
  <Label htmlFor={inputName} style={styles.label}>{labelName}</Label>
    <Input 
    name={inputName} 
    value={value}
    type="text" 
    onChange={onChange}
    />
  </div>
);

export default RecipeInput;