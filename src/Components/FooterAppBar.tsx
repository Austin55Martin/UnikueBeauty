import React from "react";
import { makeStyles } from "tss-react/mui";
import InstagramIcon from "@mui/icons-material/Instagram";
import TikTokIcon from "./TikTokIcon";
import MainLogo from "../Gallery/logos/Unikue_Beauty_Icon_Logo.png";
import { ButtonGroup, Button, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { showServicesMenu } from "../Atoms/DisplayStateAtoms";

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
  },
  linkContainer: {
    display: "flex",
    flexDirection: "row",
  },
  buttonGroup: {
    color: "transparent",
    "& .MuiButtonGroup-firstButton": {
      borderRight: "none",
      marginRight: "2rem",
    },
    "& .MuiButtonGroup-middleButton": {
      borderRight: "none",
      marginRight: "2rem",
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
    fontSize: "1.5rem",
  },
  copyright: {
    fontFamily: "DM Sans",
    fontSize: ".75rem",
    color: "#f2f2f2",
    opacity: ".5",
  },
}));

function FooterAppBar() {
  const { classes } = useStyles();
  const navigate = useNavigate();
  const setShowServicesMenu = useRecoilState(showServicesMenu)[1];

  return (
    <div className={classes.container}>
      <div id="logo-container" className={classes.logoContainer}>
        <img id="logo" alt="" className={classes.logo} src={MainLogo} />
      </div>
      <div className={classes.linkContainer}>
        <ButtonGroup
          variant="text"
          disableFocusRipple
          className={classes.buttonGroup}
        >
          <Button
            className={classes.links}
            onClick={() => setShowServicesMenu(true)}
          >
            Services
          </Button>
          <Button
            className={classes.links}
            onClick={() => navigate("/gallery")}
          >
            Gallery
          </Button>
          <Button className={classes.links} onClick={() => navigate("/forms")}>
            Forms
          </Button>
        </ButtonGroup>
      </div>
      <div className={classes.linkContainer}>
        <ButtonGroup
          variant="text"
          disableFocusRipple
          className={classes.buttonGroup}
        >
          <IconButton
            href="https://www.instagram.com/unikuebeauty/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <InstagramIcon className={classes.socialIcons} />
          </IconButton>
          <IconButton
            href="https://www.tiktok.com/@jennicamartin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <TikTokIcon className={classes.socialIcons} />
          </IconButton>
        </ButtonGroup>
      </div>
      <Typography className={classes.copyright}>
        &copy; {new Date().getFullYear()} Unikue Beauty. All rights reserved.
      </Typography>
    </div>
  );
}

export default FooterAppBar;
