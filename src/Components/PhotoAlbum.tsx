import React, { useState, useEffect, useCallback } from "react";
import { makeStyles } from "tss-react/mui";
import { useDynamicWindowDimensions } from "../Theme/DynamicDisplay";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { showBookNowFab } from "../Atoms/DisplayStateAtoms";
import { useRecoilState } from "recoil";

export interface Photo {
  id: number;
  url: string;
  thumb: string;
  alt?: string;
}

interface PhotoAlbumProps {
  photos: Photo[];
}

const useStyles = makeStyles()({
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
    gap: 10,
  },
  card: {
    position: "relative",
    aspectRatio: "1",
    borderRadius: 10,
    overflow: "hidden",
    border: "none",
    padding: 0,
    cursor: "pointer",
    background: "#e5e5e5",
    transition: "transform 0.15s ease",
    "&:hover": {
      transform: "scale(1.02)",
    },
  },
  cardImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  backdrop: {
    position: "fixed",
    inset: 0,
    zIndex: 1000,
    background: "rgba(0,0,0,0.90)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    overflowY: "auto",
  },
  closeBtn: {
    position: "absolute",
    top: 20,
    background: "rgba(255,255,255,0.12)",
    border: "0.5px solid rgba(255,255,255,0.2)",
    color: "#fff",
    borderRadius: "50%",
    cursor: "pointer",
    lineHeight: 1,
  },
  imgWrap: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    maxWidth: 860,
    minHeight: 0,
    overflowY: "hidden",
  },
  lbImg: {
    maxWidth: "100%",
    maxHeight: "70vh",
    borderRadius: 10,
    objectFit: "contain",
    display: "block",
  },
  nav: {
    display: "flex",
    alignItems: "center",
    gap: 16,
    marginTop: 18,
  },
  navBtn: {
    background: "rgba(255, 255, 255, 0.05)",
    border: "0.5px solid rgba(255, 255, 255, 0.15)",
    color: "#fff",
    borderRadius: 8,
    width: "3rem",
    height: "2.5rem",
    cursor: "pointer",
    lineHeight: 1,
    transition: "background 0.15s",
    "&:disabled": {
      opacity: 0.7,
      cursor: "default",
    },
  },
  counter: {
    fontSize: 13,
    color: "rgba(255,255,255,0.5)",
    minWidth: 48,
    textAlign: "center",
    fontFamily: "DM Sans",
  },
  strip: {
    display: "flex",
    gap: 8,
    marginTop: 18,
    overflowX: "auto",
    maxWidth: 700,
    paddingBottom: 4,
  },
  thumb: {
    width: 52,
    height: 52,
    flexShrink: 0,
    borderRadius: 6,
    objectFit: "cover",
    cursor: "pointer",
    transition: "opacity 0.15s, border-color 0.15s",
  },
  thumbActive: {
    opacity: 1,
    border: "2px solid #fff",
  },
  thumbInactive: {
    opacity: 0.4,
    border: "2px solid transparent",
  },
});

function PhotoAlbum({ photos }: PhotoAlbumProps) {
  const { classes, cx } = useStyles();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const currentPhoto = lightboxIndex !== null ? photos[lightboxIndex] : null;
  const isOpen = lightboxIndex !== null;
  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevCallback = useCallback(() => {
    setLightboxIndex((i) => (i !== null && i > 0 ? i - 1 : i));
  }, []);
  const nextCallback = useCallback(() => {
    setLightboxIndex((i) => (i !== null && i < photos.length - 1 ? i + 1 : i));
  }, [photos.length]);

  let isMobile = useDynamicWindowDimensions().IsMobileView;

  const setShowBookNowFab = useRecoilState(showBookNowFab)[1];
  setShowBookNowFab(!isOpen);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevCallback();
      if (e.key === "ArrowRight") nextCallback();
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, closeLightbox, prevCallback, nextCallback]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Grid */}
      <div className={classes.grid}>
        {photos.map((photo, index) => (
          <button
            key={photo.id}
            onClick={() => openLightbox(index)}
            aria-label={photo.alt ?? `Photo ${index + 1}`}
            className={classes.card}
          >
            <img
              src={photo.thumb}
              alt={photo.alt ?? `Photo ${index + 1}`}
              className={classes.cardImg}
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {isOpen && currentPhoto && (
        <div
          className={classes.backdrop}
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
        >
          <IconButton className={classes.closeBtn} onClick={closeLightbox}>
            <CloseIcon fontSize={"medium"} aria-label="Close" />
          </IconButton>

          {/* Main image */}
          <div className={classes.imgWrap} onClick={(e) => e.stopPropagation()}>
            <img
              src={currentPhoto.url}
              alt={currentPhoto.alt ?? `Photo ${lightboxIndex! + 1}`}
              className={classes.lbImg}
            />
          </div>

          {/* Nav */}
          <div className={classes.nav} onClick={(e) => e.stopPropagation()}>
            <IconButton
              className={classes.navBtn}
              onClick={prevCallback}
              disabled={lightboxIndex === 0}
              aria-label="Previous photo"
            >
              <NavigateBeforeIcon fontSize={isMobile ? "medium" : "large"} />
            </IconButton>
            <span className={classes.counter}>
              {lightboxIndex! + 1} / {photos.length}
            </span>
            <IconButton
              className={classes.navBtn}
              onClick={nextCallback}
              disabled={lightboxIndex === photos.length - 1}
              aria-label="Next photo"
            >
              <NavigateNextIcon fontSize={isMobile ? "medium" : "large"} />
            </IconButton>
          </div>

          {/* Filmstrip */}
          <div className={classes.strip} onClick={(e) => e.stopPropagation()}>
            {photos.map((photo, index) => (
              <img
                key={photo.id}
                src={photo.thumb}
                alt={photo.alt ?? `Photo ${index + 1}`}
                onClick={() => setLightboxIndex(index)}
                className={cx(
                  classes.thumb,
                  index === lightboxIndex
                    ? classes.thumbActive
                    : classes.thumbInactive,
                )}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default PhotoAlbum;
