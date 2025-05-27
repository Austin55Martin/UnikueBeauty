import { createTheme } from "@mui/material/styles";
import { DisplayProperty } from "./DynamicDisplay";

declare module "@mui/material/styles" {
  interface Theme {
    displaySettings: {
      sm: DisplayProperty;
      md: DisplayProperty;
      lg: DisplayProperty;
    };
  }
  interface ThemeOptions {
    displaySettings?: {
      sm?: DisplayProperty;
      md?: DisplayProperty;
      lg?: DisplayProperty;
    };
  }
}

export const theme = createTheme({
  //@ts-ignore:
  typography: {
    fontFamily: `"DM Sans", sans-serif`,
  },
  palette: {
    divider: "#3d3d3d",
  },
  displaySettings: {
    sm: { variant: "h6", fontSize: "0.875rem", buttonSize: "small" },
    md: { variant: "h4", fontSize: "1rem", buttonSize: "medium" },
    lg: { variant: "h3", fontSize: "1.15rem", buttonSize: "large" },
  },
});
