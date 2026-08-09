import { Box, Button, Typography } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { useNavigate } from "react-router-dom";
import cowboyfrog from "../Gallery/cowboyfrog.png";

const useStyles = makeStyles()((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
    padding: "2rem 1.5rem 3rem",
    color: theme.palette.text.black,
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      gap: "0.5rem",
      padding: "1rem 1.25rem 1.5rem",
    },
  },
  headerStyle: {
    fontFamily: "Georgia",
    letterSpacing: ".1rem",
    fontSize: "2rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  },
  imageWrap: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  cowboyImg: {
    width: "auto",
    height: "auto",
    maxWidth: "min(300px, 80vw)",
    maxHeight: "40vh",
    display: "block",
    [theme.breakpoints.down("sm")]: {
      maxHeight: "26vh",
    },
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
  },
  ctaButton: {
    marginTop: "0.5rem",
    fontFamily: "DM Sans",
    fontWeight: 600,
    color: "white",
    backgroundColor: "#b48c64",
    borderRadius: "10px",
    textTransform: "none",
    padding: "0.6rem 1.75rem",
    fontSize: "1rem",
    "&:hover": {
      backgroundColor: "#c99c6f",
    },
  },
}));

function NotFound() {
  const { classes } = useStyles();
  const navigate = useNavigate();

  return (
    <div className={classes.root}>
      <Typography className={classes.headerStyle}>
        Well, Partner... This Trail Went Cold.
      </Typography>

      <Box className={classes.imageWrap}>
        <img alt="" src={cowboyfrog} className={classes.cowboyImg} />
      </Box>

      <Button className={classes.ctaButton} onClick={() => navigate("/")}>
        Head On Home
      </Button>
    </div>
  );
}

export default NotFound;
