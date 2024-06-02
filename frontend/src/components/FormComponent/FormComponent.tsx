"use client";

import React from "react";
import RecipeButton, { MyButtonProps } from "../Button/RecipeButton";
 
export interface MyFormComponentProps extends Omit<MyButtonProps, 'onSubmit'> {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}
const FormComponent: React.FC<MyFormComponentProps> = ({
  onSubmit,
  children,
  type = "submit",
  ...props
}) => {

  return (
      <form onSubmit={onSubmit}>
        {children}
        <RecipeButton
          type={type}
          {...props}
        >
          Submit
        </RecipeButton>
      </form>
  );
};

export default FormComponent;
