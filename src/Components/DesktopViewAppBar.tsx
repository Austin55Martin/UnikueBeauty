import React from "react";
import { AppBar, Box, Button, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import { useDynamicWindowDimensions } from "../Theme/DynamicDisplay";
import MainLogo from "../Gallery/MainLogo.PNG";
import cowboy from "../Gallery/cowboy.PNG";
import cow from "../Gallery/cow.PNG";
import { makeStyles } from "tss-react/mui";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles()((theme) => ({
  contactInfoContainer: {
    display: "flex",
    flexDirection: "column",
    marginBottom: ".5rem",
    marginTop: ".5rem",
    gap: ".25rem",
  },
  appBar: {
    boxShadow: "2",
    padding: "8px 8px",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#eae5d2",
  },
  cowboyImgDiv: {
    height: "auto",
    maxWidth: "300px",
    minWidth: "200px",
    width: "calc(20vw - 20px)",
    position: "absolute",
    left: "10%",
    top: "5%",
  },
  mainLogoDiv: {
    height: "auto",
    minWidth: "300",
    width: "380px",
    display: "flex",
    justifyContent: "center",
    zIndex: 10,
  },
  cowImgDiv: {
    height: "auto",
    minWidth: "200px",
    maxWidth: "300px",
    width: "calc(20vw - 50px)",
    position: "absolute",
    right: "10%",
    top: "12vh",
  },
  img: {
    maxWidth: "100%",
    height: "100%",
    imageRendering: "crisp-edges",
  },
  cowImg: {
    maxWidth: "70%",
    height: "100%",
    imageRendering: "crisp-edges",
  },
  text: {
    textAlign: "center",
    color: "#554a2e",
    fontWeight: "600",
  },
  button: {
    fontFamily: "DM Sans",
    fontSize: theme.displaySettings.lg.fontSize,
    fontWeight: "600",
    color: "#554a2e", // orange color: "#c6a10e"
    borderRadius: "10px",
    textTransform: "none",
    marginRight: "1rem",
    marginLeft: "1rem",
  },
}));

function DesktopViewAppBar() {
  let dynamicView = useDynamicWindowDimensions();
  const navigate = useNavigate();
  const { classes } = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Box className={classes.cowboyImgDiv}>
        <img alt="" src={cowboy} className={classes.img} />
      </Box>
      <Box className={classes.mainLogoDiv}>
        <img alt="" src={MainLogo} className={classes.img} />
      </Box>
      <Box className={classes.cowImgDiv}>
        <img alt="" src={cow} className={classes.cowImg} />
      </Box>

      <div className={classes.contactInfoContainer}>
        <Typography variant="h2" fontSize="1.25rem" className={classes.text}>
          (360) • 901 • 6678
        </Typography>
        <Typography variant="h2" fontSize="1.25rem" className={classes.text}>
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
          className={classes.button}
          onClick={() => navigate("/")}
        >
          Home
        </Button>
        <Divider orientation="vertical" flexItem></Divider>
        <Button
          size={dynamicView.dynamicSizes.buttonSize}
          variant="text"
          className={classes.button}
          onClick={() => navigate("/services")}
        >
          Services
        </Button>
        <Divider orientation="vertical" flexItem></Divider>
        <Button
          size={dynamicView.dynamicSizes.buttonSize}
          variant="text"
          className={classes.button}
        >
          Gallery
        </Button>
        <Divider orientation="vertical" flexItem></Divider>
        <Button
          size={dynamicView.dynamicSizes.buttonSize}
          variant="text"
          className={classes.button}
        >
          About
        </Button>
      </Box>
    </AppBar>
  );
}

export default DesktopViewAppBar;
