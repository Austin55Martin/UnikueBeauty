import React from "react";
import { AppBar, Box, Divider, Toolbar } from '@mui/material';
import "@fontsource/dm-sans";
import SideDrawerButtonToggle from "./SideDrawer";
import MainLogo from "../Gallery/MainLogo.PNG";
import cowboy from "../Gallery/cowboy.PNG";
import cow from "../Gallery/cow.PNG";
import { useDynamicWindowDimensions } from "../Theme/DynamicDisplay";

function MobileViewAppBar() {
  const dynamicView = useDynamicWindowDimensions();
  
  const typographyStyles = {
    fontFamily: "DM Sans",
    fontSize: dynamicView.dynamicSizes.fontSize,
    fontWeight: "600",
    color: "#554a2e", // orange color: "#c6a10e"
  };

  return (
    <>
      <AppBar position="static" elevation={0} sx={{ boxShadow: 2, display: 'flex', alignItems: 'center', padding: '1rem 1rem .25rem 1rem', minWidth: '235px', backgroundColor: '#eae5d2'}}>
      <Box sx={{
          height: "80px",
          position: "absolute",
          left: "5%",
          top: "3rem",
        }}>
        <img
          src={cowboy}
          style={{ maxWidth: "100%", height: "100%", imageRendering: 'crisp-edges', }}
        />
      </Box>
        
        <Box
          sx={{
            height: "140px",
            display: "flex",
            zIndex: 10,
          }}
        >
          <img
            src={MainLogo}
            style={{ maxWidth: "100%", height: "100%", imageRendering: 'crisp-edges' }}
            alt=""
          />
        </Box>

        <Box sx={{
          height: "45px",
          position: "absolute",
          right: "5%",
          top: "5rem",
        }}>
        <img
          src={cow}
          style={{ maxWidth: "100%", height: "100%", imageRendering: 'crisp-edges', }}
        />
      </Box>
        <Toolbar sx={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '.5rem'}}>
          <SideDrawerButtonToggle />
        </Toolbar>
      </AppBar>  
    </>
  );
}

export default MobileViewAppBar;