import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import headshot from "../Gallery/JennHomePage.PNG";
import { makeStyles } from "tss-react/mui";
import InstagramCarousel from "../Components/InstagramCarousel";

const useStyles = makeStyles()((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingLeft: "1.75rem",
    paddingRight: "1.75rem",
    paddingTop: "1rem",
    gap: "3rem",
  },
  centeredFlexRowBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "2rem",
  },
  centeredFlexColumnBox: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: '#eae5d2',
    backgroundColor: "transparent",
    padding: "1rem",
  },
  tealBackgroundColor: {
    backgroundColor: "#ccdcc1",
  },
  typographyStyles: {
    //fontFamily: theme.typography.fontFamily,
    wordWrap: "break-word",
    marginBottom: ".25rem",
  },
  headerStyles: {
    letterSpacing: ".15rem",
    fontSize: "20px",
    marginBottom: ".75rem",
    fontWeight: "600",
  },
  headshotImg: {
    height: "auto",
    minWidth: "200px",
    width: "350px",
    display: "flex",
    zIndex: 10,
    imageRendering: "crisp-edges",
  },
  welcomeTextContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    maxWidth: "650px",
    height: "auto",
  },
}));

function Home() {
  const { classes, cx } = useStyles();

  const headerText = "THE SALON";
  const paragraphText =
    "Indulge in a salon experience that leaves you feeling welcomed and radiant, from the moment you book your appointment to the instant you step out with a fresh new style.";
  const mottoText = "It's your own look that makes you, you!";
  const welcomeText = `Here, I believe that everyone deserves to feel confident and beautiful. As the sole owner and stylist, I am dedicated to providing personalized hair care tailored to your unique style and needs. Whether you're looking for a fresh cut, vibrant color, or a stunning new look, I am here to make your vision a reality.`;

  return (
    <div className={classes.root}>
      <Box className={classes.centeredFlexRowBox}>
        <img alt="" src={headshot} className={classes.headshotImg} />
        <Box className={classes.welcomeTextContainer}>
          <Typography
            className={classes.typographyStyles}
            sx={{ fontSize: "1.25rem", fontWeight: "600" }}
          >
            {"Welcome to Unikue Beauty Hair Salon!"}
          </Typography>
          <br />
          <Typography
            className={classes.typographyStyles}
            sx={{ fontSize: "1.15rem" }}
          >
            {welcomeText}
          </Typography>
          <br />
          <Typography
            className={classes.typographyStyles}
            sx={{ fontSize: "1.15rem" }}
          >
            {
              "Come in, relax, and let me take care of you in my warm and welcoming salon. I can't wait to help you look and feel your best!"
            }
          </Typography>
        </Box>
      </Box>
      <InstagramCarousel />
      <div
        className={cx(
          classes.centeredFlexColumnBox,
          classes.tealBackgroundColor
        )}
      >
        <Box
          className={cx(classes.centeredFlexColumnBox)}
          sx={{ padding: 0, maxWidth: "800px" }}
        >
          <Box className={cx(classes.centeredFlexColumnBox)}>
            <Typography
              variant="h5"
              className={cx(classes.typographyStyles, classes.headerStyles)}
            >
              {headerText}
            </Typography>
            <Divider
              sx={{ width: "75%", marginTop: ".25rem", marginBottom: "1rem" }}
            />
          </Box>
          <Typography variant="body1" className={classes.typographyStyles}>
            {paragraphText}
          </Typography>
          <Typography
            variant="body1"
            className={classes.typographyStyles}
            sx={{ fontWeight: "600", marginTop: "1.25rem" }}
          >
            {mottoText}
          </Typography>
        </Box>
      </div>
    </div>
  );
}

export default Home;
