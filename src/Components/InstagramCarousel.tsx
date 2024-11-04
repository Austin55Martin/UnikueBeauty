import React, { useEffect, useState } from "react";
import { makeStyles } from "tss-react/mui";
import { Skeleton, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import images from "../Utils/ImportAllImages";

const useStyles = makeStyles()(() => ({
  root: {
    width: "700px", // remove this later when we actually get the images
    height: "auto"
  },
  img: {
    height: "auto",
    minWidth: "200px",
    width: "600px",
  },
  skeletion: {
    opacity: ".5",
    width: "350px",
    height: "400px"
  }
}));

function InstagramCarousel() {
  const { classes } = useStyles();

  return (
    <Carousel
      autoPlay={true}
      swipe={true}
      animation="slide"  
      duration={500}
      indicators={false}
      className={classes.root}
      fullHeightHover={true}
    >
      {Object.keys(images).map((key, i) => (
        <img key={i} src={images[key]} alt={key} className={classes.img} />
      ))}
    </Carousel>
  );
}

export default InstagramCarousel;
