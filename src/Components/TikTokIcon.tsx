import React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

function TikTokIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path d="M16.6 5.82c-1.01-.98-1.56-2.32-1.56-3.7h-3.13v13.42c0 1.63-1.33 2.96-2.96 2.96a2.96 2.96 0 0 1-2.96-2.96 2.96 2.96 0 0 1 2.96-2.96c.31 0 .61.05.89.13V9.4a6.1 6.1 0 0 0-.89-.06A6.1 6.1 0 0 0 3 15.44a6.1 6.1 0 0 0 6.1 6.1 6.1 6.1 0 0 0 6.1-6.1V8.7a7.83 7.83 0 0 0 4.57 1.47V7.05a4.83 4.83 0 0 1-3.17-1.23Z" />
    </SvgIcon>
  );
}

export default TikTokIcon;
