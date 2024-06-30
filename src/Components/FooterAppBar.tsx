import React from "react";
import { makeStyles } from "tss-react/mui";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MainLogo from "../Gallery/MainLogo.PNG";
import { ButtonGroup, Button, IconButton, Typography } from "@mui/material";

const useStyles = makeStyles()(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#2a2a2a",
    padding: "1rem",
    alignItems: "center",
  },
  logoContainer: {
    height: "4rem",
    display: "flex",
    zIndex: 10,
  },
  logo: {
    maxWidth: "100%",
    height: "100%",
    imageRendering: "crisp-edges",
  },
  linkContainer: {
    display: "flex",
    flexDirection: "row",
  },
  buttonGroup: {
    color: "transparent",
    "& .MuiButtonGroup-firstButton": {
      borderRight: "none",
      marginRight: "2rem"
    },
    "& .MuiButtonGroup-middleButton": {
      borderRight: "none",
      marginRight: "2rem"
    },
  },
  links: {
    fontFamily: "DM Sans",
    fontSize: ".9rem",
    color: "#f2f2f2",
    textTransform: "none",
  },
  socialIcons: {
    color: "#f2f2f2", 
    fontSize: "1.5rem"
  },
  copyright: {
    fontFamily: "DM Sans",
    fontSize: ".75rem",
    color: "#f2f2f2",
    opacity: ".5"
  },
}));

;
function FooterAppBar() {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <div id="logo-container" className={classes.logoContainer}>
        <img id="logo" alt="" className={classes.logo} src={MainLogo} />
      </div>
      <div className={classes.linkContainer}>
        <ButtonGroup variant="text" disableFocusRipple className={classes.buttonGroup}>
          <Button className={classes.links}>Link 1</Button>
          <Button className={classes.links}>Link 2</Button>
          <Button className={classes.links}>Link 3</Button>
        </ButtonGroup>
      </div>
      <div className={classes.linkContainer}>
        <ButtonGroup variant="text" disableFocusRipple className={classes.buttonGroup}>
            <IconButton><InstagramIcon className={classes.socialIcons}/></IconButton>
            <IconButton><FacebookIcon className={classes.socialIcons}/></IconButton>
            <IconButton><LinkedInIcon className={classes.socialIcons}/></IconButton>
        </ButtonGroup>
      </div>
      <Typography className={classes.copyright}>&copy; 2024 Unikue Beauty. All rights reserved.</Typography>
    </div>
  );
}

export default FooterAppBar;
