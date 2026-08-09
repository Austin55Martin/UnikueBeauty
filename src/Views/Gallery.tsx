import React from "react";
import { makeStyles } from "tss-react/mui";
import PhotoAlbum, { Photo } from "../Components/PhotoAlbum";
import { galleryFullImages, galleryThumbImages } from "../Utils/ImportImages";

const useStyles = makeStyles()((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1rem 2rem",
  },
}));

function Gallery() {
  const { classes } = useStyles();

  const photos: Photo[] = Object.keys(galleryThumbImages).map((key, i) => ({
    id: i + 1,
    url: galleryFullImages[key],
    thumb: galleryThumbImages[key],
  }));

  return (
    <div className={classes.root}>
      <PhotoAlbum photos={photos} />
    </div>
  );
}

export default Gallery;
