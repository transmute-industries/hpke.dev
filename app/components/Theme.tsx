"use client";

import { teal, deepPurple } from "@mui/material/colors";
import {
  experimental_extendTheme as extendTheme,
  Experimental_CssVarsProvider as CssVarsProvider,
} from "@mui/material/styles";

import * as React from 'react';

export const theme = extendTheme({
  cssVarPrefix: "md-demo",
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: deepPurple[400],
        },
        secondary: {
          main: teal[600],
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: deepPurple[300],
        },
        secondary: {
          main: teal[600],
        },
      },
    },
  },
});


export const Theme = ({ children }: any) => {
  return (
    <CssVarsProvider theme={theme}>
      {children}
    </CssVarsProvider>
  );
}
