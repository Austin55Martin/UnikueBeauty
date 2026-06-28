import React from "react";
import { makeStyles } from "tss-react/mui";
import PhotoAlbum, { Photo } from "../Components/PhotoAlbum";
import { galleryImages } from "../Utils/ImportImages";

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

  const photos: Photo[] = Object.keys(galleryImages).map((key, i) => ({
    id: i + 1,
    url: galleryImages[key],
    thumb: galleryImages[key],
  }));

  return (
    <div className={classes.root}>
      <PhotoAlbum photos={photos} />
    </div>
  );
}

export default Gallery;
