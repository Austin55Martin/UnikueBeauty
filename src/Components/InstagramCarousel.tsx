import React, { useEffect, useState } from "react";
import { makeStyles } from "tss-react/mui";
import axios from "axios";
import { CircularProgress, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";

const useStyles = makeStyles()(() => ({
    root: {
        width: "200px" // remove this later when we actually get the images
    }
}));

function InstagramCarousel() {
  const { classes } = useStyles();
  const [images, setImages] = useState([]);
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          `https://graph.instagram.com/me/media?fields=id,media_type,media_url&access_token=${accessToken}`
        );
        if (response.status == 200) {
          setImages(response.data.data);
        }
      } catch (error) {} // maybe loop this if it fails?
    };

    fetchImages();
  }, []);

  let items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
  ];

  if (!images) {
    return <CircularProgress color="info" />;
  }

  return (
    <Carousel autoPlay={true} swipe={true} animation="slide" duration={800} indicators={false} className={classes.root}>
      {items.map((item, i) => (
        <Typography key={i}>{item.name}</Typography>
      ))}
    </Carousel>
  );
}

export default InstagramCarousel;
