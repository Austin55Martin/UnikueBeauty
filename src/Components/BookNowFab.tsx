import React from "react";
import { Fab, useMediaQuery, useTheme } from "@mui/material";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  floatingButtonStyle: {
    position: "fixed",
    right: "1.25rem",
    bottom: "1.25rem",
    top: "auto",
    left: "auto",
    color: "white",
    backgroundColor: "#b48c64",
    "&:hover": {
      backgroundColor: "#c99c6f",
    },
    textTransform: "none",
    padding: "0.5rem 1.5rem",
  },
}));

function BookNowFab() {
  const { classes } = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  if (!isMobile) {
    return null;
  }

  return (
    <Fab
      variant="extended"
      size="large"
      className={classes.floatingButtonStyle}
    >
      Schedule
    </Fab>
  );
}

export default BookNowFab;
