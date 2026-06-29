import React from "react";
import { makeStyles } from "tss-react/mui";
import Carousel from "react-material-ui-carousel";
import { carouselImages } from "../Utils/ImportImages";

const useStyles = makeStyles()(() => ({
  root: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
  },
  carousel: {
    flex: "1",
    minWidth: "100px",
    maxWidth: "500px",
    height: "auto",
    // The wrapper div for the "next" button
    "& > div:nth-of-type(2)": {
      width: "33%",
      right: "0",
    },
    // The wrapper div for the "previous" button
    "& > div:nth-of-type(3)": {
      width: "33%",
      left: "0",
    },
    // The right ("next") button
    "& > div:nth-of-type(2) button": {
      left: "auto !important",
      right: "0 !important",
      position: "absolute",
    },
    // The left ("previous") button
    "& > div:nth-of-type(3) button": {
      right: "auto !important",
      left: "0 !important",
      position: "absolute",
    },
  },
  imgWrap: {
    width: "100%",
    height: 650, // fixed height — every slide is this tall
    position: "relative",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  fullHeightHoverWrapper: {
    height: "100%",
    top: "0",
    width: "30%",
  },
}));

function InstagramCarousel() {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <Carousel
        swipe={true}
        animation="slide"
        indicators={true}
        className={classes.carousel}
        autoPlay={false}
      >
        {Object.keys(carouselImages).map((key, i) => (
          <div className={classes.imgWrap} key={i}>
            <img
              key={i}
              src={carouselImages[key]}
              alt={key}
              className={classes.img}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default InstagramCarousel;
