import React from "react";
import "@fontsource/dm-sans";
import {
  useDynamicWindowDimensions,
} from "../Theme/DynamicDisplay";
import DesktopViewAppBar from "./DesktopViewAppBar";
import MobileViewAppBar from "./MobileViewAppBar";

function TopAppBar() {
  let dynamicView = useDynamicWindowDimensions();

  return (
    <>
      {dynamicView.IsMobileView ? <MobileViewAppBar /> : <DesktopViewAppBar />}
    </>
  );
}

export default TopAppBar;
