"use client";

import React, { CSSProperties } from "react";
import RecipeButton, { MyButtonProps } from "../Button/RecipeButton";

export interface MyFormComponentProps extends Omit<MyButtonProps, 'onSubmit'> {
  formName?: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  styles?: {
    container?: CSSProperties;
  };
}

const defaultStyles = {
  container: {
    borderRadius: "1em",
    padding: "20px",
    color: "white",
  } as CSSProperties,
};


const FormComponent: React.FC<MyFormComponentProps> = ({
  styles = defaultStyles,
  formName,
  onSubmit,
  children,
  type = "submit",
  ...props
}) => {
  const appliedStyles = { ...defaultStyles, ...styles };

  return (
    <div className="sub-container" style={appliedStyles.container}>
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
    </div>
  );
};

export default FormComponent;
