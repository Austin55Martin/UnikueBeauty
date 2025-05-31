import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { useMediaQuery, useTheme } from "@mui/material";
import { viewportWidthState } from "../Atoms/DynamicDisplayAtoms";

let IsMobileView = false;

export type DisplayProperty = {
  variant: string;
  fontSize: string;
  buttonSize: "small" | "large" | "medium";
};

function useDynamicViewSizes(): DisplayProperty {
  const theme = useTheme();

  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.between("sm", "lg"));

  if (isSmall) {
    IsMobileView = true;
    return theme.displaySettings.sm;
  } else if (isMedium) {
    IsMobileView = false;
    return theme.displaySettings.md;
  } else {
    IsMobileView = false;
    return theme.displaySettings.lg;
  }
}

export function useDynamicWindowDimensions() {
  const [, setWindowDimensions] = useRecoilState(viewportWidthState);
  let dynamicSizes = useDynamicViewSizes();

  useEffect(() => {
    window.addEventListener("resize", () =>
      setWindowDimensions(window.innerWidth)
    );

    // remove the listener when we unmount
    return () =>
      window.removeEventListener("resize", () =>
        setWindowDimensions(window.innerWidth)
      );
  }, [setWindowDimensions]);

  return { IsMobileView, dynamicSizes };
}
