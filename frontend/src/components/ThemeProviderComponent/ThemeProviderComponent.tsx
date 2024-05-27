'use client';

import React from 'react'
import { Authenticator, ThemeProvider } from "@aws-amplify/ui-react";
import customTheme from "../../theme";

interface MyThemeProviderProps {
  children?: React.ReactNode,
  theme?: string
}
const ThemeProviderComponent: React.FC<MyThemeProviderProps>= ({children, theme = customTheme}) => {
  return (
    <>
    <ThemeProvider theme={customTheme}>
    {children}
    </ThemeProvider>
    </>    )
}

export default ThemeProviderComponent