import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import { useDynamicViewSizes, useDynamicWindowDimensions } from "../Theme/DynamicDisplay";
import headshot from "../Gallery/JennHomePage.PNG";
import { makeStyles } from "tss-react/mui";
import InstagramCarousel from "../Components/InstagramCarousel";

const centeredFlexColumnBox = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  //backgroundColor: '#eae5d2',
  backgroundColor: 'transparent',
  padding: "1.5rem 1.75rem",
};

const wordBoxStyles = {
  ...centeredFlexColumnBox,
  backgroundColor: "#ccdcc1",
};

const typographyStyles = {
  fontFamily: "DM Sans",
  wordWrap: "break-word",
  marginBottom: ".25rem",
};

const headerStyles = {
  ...typographyStyles,
  letterSpacing: ".15rem",
  fontSize: "20px",
  marginBottom: ".75rem",
  fontWeight: "600"
};

const useStyles = makeStyles()(() => ({
  carouselContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  }
}));

function Home() {
  const { classes } = useStyles();
  const dynamicView = useDynamicViewSizes();
  const { IsMobileView } = useDynamicWindowDimensions();

  const headerText = "THE SALON";
  const paragraphText =
    "Indulge in a salon experience that leaves you feeling welcomed and radiant, from the moment you book your appointment to the instant you step out with a fresh new style.";
  const mottoText = "Its your own look that makes you, you!";
  const welcomText = `Here, I believe that everyone deserves to feel confident and beautiful. As the sole owner and stylist, I am dedicated to providing personalized hair care tailored to your unique style and needs. Whether you're looking for a fresh cut, vibrant color, or a stunning new look, I am here to make your vision a reality.`

  return (
    <>
      <Box sx={{ ...centeredFlexColumnBox, flexDirection: "row", justifyContent: 'center', flexWrap: "wrap"}}>
        <Box
          sx={{
            height: "auto",
            minWidth: "200px",
            width: "350px",
            display: "flex",
            zIndex: 10,
          }}
        >
          <img
            src={headshot}
            style={{ maxWidth: "100%", height: "100%", imageRendering: 'crisp-edges' }}
          />
        </Box>
        <Box sx={{display: 'flex', flexDirection: "column", maxWidth: "550px", marginLeft: IsMobileView ? "unset" : "2rem", marginTop: IsMobileView ? "2rem" : "unset"}}>
          <Typography sx={{...typographyStyles, fontSize: "1.25rem", fontWeight: "600"}}>
            {"Welcome to Unikue Beauty Hair Salon!"}
          </Typography>
          <br />
          <Typography sx={{...typographyStyles, fontSize: "1.15rem"}}>
            {welcomText}
          </Typography>
          <br />
          <Typography sx={{...typographyStyles, fontSize: "1.15rem"}}>
            {"Come in, relax, and let me take care of you in my warm and welcoming salon. I can't wait to help you look and feel your best!"}
          </Typography>
        </Box>
      </Box>

      <div className={classes.carouselContainer}>
        <InstagramCarousel/>
      </div>

      <Box sx={{ ...wordBoxStyles }}>
        <Box sx={{ ...wordBoxStyles, padding: 0, maxWidth: "800px" }}>
          <Box sx={{ ...wordBoxStyles}}>
            <Typography
              variant="h5"
              sx={{ ...typographyStyles, ...headerStyles, }}
            >
              {headerText}
            </Typography>
            <Divider sx={{ width: "100%", marginTop: ".25rem", marginBottom: "1rem" }} />
          </Box>
          <Typography variant="body1" sx={{ ...typographyStyles }}>
            {paragraphText}
          </Typography>
          <Typography
            variant="body1"
            sx={{ ...typographyStyles, fontWeight: "600", marginTop: "1.25rem", }}
          >
            {mottoText}
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default Home;
