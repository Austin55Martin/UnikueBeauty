import React, { useEffect, useState } from "react";
import { makeStyles } from "tss-react/mui";
import { Skeleton, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";

const useStyles = makeStyles()(() => ({
  root: {
    width: "200px", // remove this later when we actually get the images
  },
  skeletion: {
    opacity: ".5",
    width: "350px",
    height: "400px"
  }
}));

interface InstaItem {
  permalink: string;
  imageUrl: string;
}

function InstagramCarousel() {
  const { classes } = useStyles();
  const [images, setImages] = useState<InstaItem[]>();
  const accessToken = process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN;

  useEffect(() => {
    const items: InstaItem[] = [];

    const fetchImages = async () => {
      while (true) {
        const response = await fetch(
          `https://graph.instagram.com/me/media?access_token=${accessToken}&fields=media_url,permalink`
        );
        if (!response.ok || response.status !== 200) {
          break;
        }

        const json = (await response.json()).data;
        if (!json) {
          break;
        }

        const item: InstaItem = {
          permalink: json.permalink,
          imageUrl: json.media_url,
        };
        items.push(item);
      }
    };

    fetchImages();
    setImages(items);
  }, [accessToken]);

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

  if (!images || images.length === 0) {
    return <Skeleton className={classes.skeletion} variant="rounded" animation="wave"/>;
  }

  return (
    <Carousel
      autoPlay={true}
      swipe={true}
      animation="slide"
      duration={800}
      indicators={false}
      className={classes.root}
    >
      {items.map((item, i) => (
        <Typography key={i}>{item.name}</Typography>
      ))}
    </Carousel>
  );
}

export default InstagramCarousel;
