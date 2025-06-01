import React from "react";
import { makeStyles } from "tss-react/mui";
import Carousel from "react-material-ui-carousel";
import images from "../Utils/ImportAllImages";

const useStyles = makeStyles()(() => ({
  root: {
    display: "flex",
    flexDirection: "row",
    width: "40%",
    justifyContent: "center",
  },
  carousel: {
    flex: "1",
    minWidth: "100px",
    maxWidth: "700px",
    height: "auto",
  },
  img: {
    height: "auto",
    width: "100%",
  },
  skeletion: {
    opacity: ".5",
    width: "350px",
    height: "400px",
  },
}));

function InstagramCarousel() {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <Carousel
        swipe={true}
        animation="slide"
        duration={500}
        indicators={true}
        className={classes.carousel}
        fullHeightHover={true}
      >
        {Object.keys(images).map((key, i) => (
          <img key={i} src={images[key]} alt={key} className={classes.img} />
        ))}
      </Carousel>
    </div>
  );
}

export default InstagramCarousel;
