import React from "react";
import { AppBar, Box, Button, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import { useDynamicWindowDimensions } from "../Theme/DynamicDisplay";
import MainLogo from "../Gallery/MainLogo.PNG";
import cowboy from "../Gallery/cowboy.PNG";
import cow from "../Gallery/cow.PNG";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
  contactInfoContainer: {
    display: "flex",
    flexDirection: "column",
    marginBottom: ".5rem",
    marginTop: ".5rem",
    gap: ".25rem",
  },
}));

function DesktopViewAppBar() {
  let dynamicView = useDynamicWindowDimensions();
  const { classes } = useStyles();

  const buttonStyles = {
    fontFamily: "DM Sans",
    fontSize: dynamicView.dynamicSizes.fontSize,
    fontWeight: "600",
    color: "#554a2e", // orange color: "#c6a10e"
    borderRadius: "10px",
    textTransform: "none",
  };

  return (
    <AppBar
      position="static"
      sx={{
        boxShadow: 2,
        padding: "8px 8px",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#eae5d2",
      }}
    >
      <Box
        sx={{
          height: "auto",
          maxWidth: "300px",
          minWidth: "200px",
          width: "calc(20vw - 20px)",
          position: "absolute",
          left: "10%",
          top: "5%",
        }}
      >
        <img
          alt=""
          src={cowboy}
          style={{
            maxWidth: "100%",
            height: "100%",
            imageRendering: "crisp-edges",
          }}
        />
      </Box>

      <Box
        sx={{
          height: "auto",
          minWidth: "300",
          width: "380px",
          display: "flex",
          justifyContent: "center",
          zIndex: 10,
        }}
      >
        <img
          alt=""
          src={MainLogo}
          style={{
            maxWidth: "100%",
            height: "100%",
            imageRendering: "crisp-edges",
          }}
        />
      </Box>

      <Box
        sx={{
          height: "auto",
          minWidth: "200px",
          maxWidth: "300px",
          width: "calc(20vw - 50px)",
          position: "absolute",
          right: "10%",
          top: "12vh",
        }}
      >
        <img
          alt=""
          src={cow}
          style={{
            maxWidth: "70%",
            height: "100%",
            imageRendering: "crisp-edges",
          }}
        />
      </Box>

      <div className={classes.contactInfoContainer}>
        <Typography
          variant="h2"
          fontSize="1.25rem"
          sx={{
            textAlign: "center",
            color: "#554a2e",
            fontWeight: "600",
          }}
        >
          (360) • 901 • 6678
        </Typography>
        <Typography
          variant="h2"
          fontSize="1.25rem"
          sx={{
            textAlign: "center",
            color: "#554a2e",
            fontWeight: "600",
          }}
        >
          Battle Ground • WA
        </Typography>
      </div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          mb: 2,
        }}
      >
        <Button
          size={dynamicView.dynamicSizes.buttonSize}
          variant="text"
          sx={{ ...buttonStyles }}
        >
          Services
        </Button>
        <Divider
          orientation="vertical"
          flexItem
          sx={{ marginRight: "1.5rem", marginLeft: "1.5rem" }}
        ></Divider>
        <Button
          size={dynamicView.dynamicSizes.buttonSize}
          variant="text"
          sx={{ ...buttonStyles }}
        >
          Gallery
        </Button>
        <Divider
          orientation="vertical"
          flexItem
          sx={{ marginRight: "1.5rem", marginLeft: "1.5rem" }}
        ></Divider>
        <Button
          size={dynamicView.dynamicSizes.buttonSize}
          variant="text"
          sx={{ ...buttonStyles }}
        >
          About
        </Button>
      </Box>
    </AppBar>
  );
}

export default DesktopViewAppBar;
