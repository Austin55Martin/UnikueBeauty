import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { useTheme } from "@mui/material";
import { viewportWidthState } from "../Atoms/DynamicDisplayAtoms";

const PhoneWidth = 600;
let IsMobileView = false;

type DisplayProperty = {
  variant: string;
  fontSize: string;
  buttonSize: "small" | "large" | "medium";
};

const dynamicDisplayProperties: DisplayProperty[] = [
  { variant: "h3", fontSize: "1.15rem", buttonSize: "large" },
  { variant: "h4", fontSize: "1rem", buttonSize: "medium" },
  { variant: "h6", fontSize: "0.875rem", buttonSize: "small" },
];

function useCalcIfMobileView(widthInPixels: number): void {
  const theme = useTheme();

  if (widthInPixels < PhoneWidth) {
    IsMobileView = true;
  } else if (widthInPixels < theme.breakpoints.values.sm) {
    IsMobileView = false;
  } else if (widthInPixels < theme.breakpoints.values.md) {
    IsMobileView = false;
  } else if (widthInPixels < theme.breakpoints.values.lg) {
    IsMobileView = false;
  } else {
    IsMobileView = false;
  }
}

export function useDynamicViewSizes() {
  const width = useRecoilValue(viewportWidthState);
  const theme = useTheme();
  useCalcIfMobileView(width);

  if (width <= theme.breakpoints.values.sm) {
    return dynamicDisplayProperties[2]; // Return sizing object for small screens
  } else if (width <= theme.breakpoints.values.lg) {
    return dynamicDisplayProperties[1]; // Return sizing object for medium screens
  } else {
    return dynamicDisplayProperties[0]; // Return sizing object for large screens and above
  }
}

export function useDynamicWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useRecoilState(viewportWidthState);
  let dynamicSizes = useDynamicViewSizes();

  function windowResizeCallback() {
    setWindowDimensions(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener("resize", windowResizeCallback);

    // remove the listener when we unmount
    return () => window.removeEventListener("resize", windowResizeCallback);
  }, []);

  return { IsMobileView, dynamicSizes };
}
