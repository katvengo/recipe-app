'use client';

import React from 'react'
import { ThemeProvider } from "@aws-amplify/ui-react";
import customTheme from "../../theme";

interface MyThemeProviderProps {
  children?: React.ReactNode,
  theme?: string
}
const ThemeProviderComponent: React.FC<MyThemeProviderProps>= ({children}) => {
  return (
    <>
    <ThemeProvider theme={customTheme}>
    {children}
    </ThemeProvider>
    </>    )
}

export default ThemeProviderComponent