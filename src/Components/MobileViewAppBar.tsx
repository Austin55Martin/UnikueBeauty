import { AppBar, Box, Toolbar } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import MainLogo from "../Gallery/MainLogo.PNG";
import cowboy from "../Gallery/cowboy.PNG";
import cow from "../Gallery/cow.PNG";
import React from "react";
import SideDrawerButtonToggle from "./SideDrawer";

const useStyles = makeStyles()(() => ({
  appBar: {
    boxShadow: "2",
    display: "flex",
    alignItems: "center",
    padding: "1rem 1rem .25rem 1rem",
    minWidth: "235px",
    backgroundColor: "#eae5d2",
  },
  cowboyImgDiv: {
    height: "80px",
    position: "absolute",
    left: "5%",
    top: "3rem",
  },
  mainLogoDiv: {
    height: "140px",
    display: "flex",
    zIndex: "10",
  },
  cowImgDiv: {
    height: "45px",
    position: "absolute",
    right: "5%",
    top: "5rem",
  },
  img: {
    maxWidth: "100%",
    height: "100%",
    imageRendering: "crisp-edges",
  },
  toolbar: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: ".5rem",
  },
}));

export default function MobileViewAppBar() {
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
        <img alt="" src={cow} className={classes.img} />
      </Box>

      <Toolbar className={classes.toolbar}>
        <SideDrawerButtonToggle />
      </Toolbar>
    </AppBar>
  );
}
