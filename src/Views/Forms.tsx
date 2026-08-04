import React, { useState } from "react";
import { Typography, IconButton } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import CloseIcon from "@mui/icons-material/Close";
import PrintIcon from "@mui/icons-material/Print";
import agreementForm from "../Gallery/documents/agreementforums.png";
import colorCorrectionForm from "../Gallery/documents/colorcorrectionforum.png";

type FormDoc = {
  id: string;
  title: string;
  src: string;
};

const forms: FormDoc[] = [
  { id: "agreement", title: "Cancellation & Card on File Agreement", src: agreementForm },
  { id: "color-correction", title: "Color Correction Service Agreement", src: colorCorrectionForm },
];

const useStyles = makeStyles()((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1.75rem",
    gap: "2rem",
  },
  headerStyle: {
    letterSpacing: ".15rem",
    fontFamily: "Georgia",
    fontSize: "2rem",
    textAlign: "center",
    color: theme.palette.text.black,
  },
  subText: {
    textAlign: "center",
    maxWidth: "500px",
    color: theme.palette.text.black,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "1.5rem",
    width: "100%",
    maxWidth: "700px",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: ".5rem",
    border: "none",
    background: "#fff",
    borderRadius: "10px",
    padding: "1rem",
    cursor: "pointer",
    boxShadow: theme.shadows[2],
    transition: "transform 0.15s ease",
    "&:hover": {
      transform: "scale(1.02)",
    },
  },
  thumb: {
    width: "100%",
    aspectRatio: "3 / 4",
    objectFit: "cover",
    objectPosition: "top",
    borderRadius: "6px",
    border: "1px solid #ddd",
  },
  cardTitle: {
    fontWeight: 600,
    textAlign: "center",
    color: theme.palette.text.black,
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
    padding: "1.25rem",
  },
  topBar: {
    position: "absolute",
    top: "1rem",
    right: "1rem",
    display: "flex",
    gap: ".5rem",
  },
  actionBtn: {
    background: "rgba(255,255,255,0.12)",
    border: "0.5px solid rgba(255,255,255,0.2)",
    color: "#fff",
  },
  imgWrap: {
    maxWidth: "900px",
    maxHeight: "85vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  fullImg: {
    maxWidth: "100%",
    maxHeight: "85vh",
    borderRadius: "6px",
    objectFit: "contain",
    display: "block",
  },
}));

function Forms() {
  const { classes, cx } = useStyles();
  const [activeForm, setActiveForm] = useState<FormDoc | null>(null);

  return (
    <div className={classes.root}>
      <Typography className={classes.headerStyle}>Client Forms</Typography>
      <Typography className={classes.subText}>
        View and print the forms below ahead of your appointment.
      </Typography>

      <div className={classes.grid}>
        {forms.map((form) => (
          <button
            key={form.id}
            className={classes.card}
            onClick={() => setActiveForm(form)}
          >
            <img src={form.src} alt={form.title} className={classes.thumb} />
            <Typography className={classes.cardTitle}>{form.title}</Typography>
          </button>
        ))}
      </div>

      {activeForm && (
        <div
          className={classes.backdrop}
          onClick={() => setActiveForm(null)}
          role="dialog"
          aria-modal="true"
          aria-label={activeForm.title}
        >
          <div className={classes.topBar} onClick={(e) => e.stopPropagation()}>
            <IconButton
              className={classes.actionBtn}
              onClick={() => window.print()}
              aria-label="Print"
            >
              <PrintIcon />
            </IconButton>
            <IconButton
              className={classes.actionBtn}
              onClick={() => setActiveForm(null)}
              aria-label="Close"
            >
              <CloseIcon />
            </IconButton>
          </div>
          <div className={classes.imgWrap} onClick={(e) => e.stopPropagation()}>
            <img
              src={activeForm.src}
              alt={activeForm.title}
              className={cx(classes.fullImg, "printable")}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Forms;
