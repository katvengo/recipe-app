"use client";

import React, { CSSProperties } from "react";
import RecipeButton, { MyButtonProps } from "../Button/RecipeButton";
import MainDiv from '../MainDivComponent/MainDiv';
 
export interface MyFormComponentProps extends Omit<MyButtonProps, 'onSubmit'> {
  formName?: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}
const FormComponent: React.FC<MyFormComponentProps> = ({
  formName,
  onSubmit,
  children,
  type = "submit",
  ...props
}) => {

  return (
    <MainDiv>
      <h1>{formName}</h1>
      <form onSubmit={onSubmit}>
        {children}
        <RecipeButton
          type={type}
          {...props}
        >
          Submit
        </RecipeButton>
      </form>
    </MainDiv>
  );
};

export default FormComponent;
