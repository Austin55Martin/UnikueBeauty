import { Box, IconButton, Modal, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { makeStyles } from "tss-react/mui";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const useStyles = makeStyles()((theme) => ({
  root: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -55%)",
    width: "80%",
    height: "80vh",
    backgroundColor: theme.palette.background.paper,
    boxShadow: "24",
    borderRadius: "12px",
    overflow: "hidden",
  },
  mobileRoot: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: theme.palette.background.paper,
    borderRadius: 0,
    overflow: "hidden",
  },
  header: {
    backgroundColor: theme.palette.background.default,
    display: "flex",
    width: "100%",
    height: "60px",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  mobileHeader: {
    backgroundColor: theme.palette.background.default,
    display: "flex",
    width: "100%",
    height: "60px",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: "1rem",
  },
}));

type Props = {
  open: boolean;
  onClose: () => void;
};

function ServicesView({ open, onClose }: Props) {
  const { classes } = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  if (isMobile) {
    return (
      <Modal open={open} onClose={onClose}>
        <Box
          sx={{
            animation: "slideInRight 0.2s ease-in-out",
            "@keyframes slideInRight": {
              from: { transform: "translateX(100%)" },
              to: { transform: "translateX(0)" },
            },
          }}
          className={classes.mobileRoot}
        >
          <Box className={classes.mobileHeader}>
            <IconButton onClick={onClose}>
              <ArrowBackIcon fontSize="medium" sx={{ color: "#1f1f1f" }} />
            </IconButton>
          </Box>
          <iframe
            src="https://book.squareup.com/appointments/futz20cutwfvkg/location/LRBCSPHZEY29G/services"
            style={{
              width: "100%",
              height: "calc(100% - 60px)",
              border: "none",
            }}
            title="Book Appointment"
            allow="payment"
          />
        </Box>
      </Modal>
    );
  }

  return (
    <Modal open={open} onClose={onClose}>
      <Box className={classes.root}>
        <Box className={classes.header}>
          <IconButton onClick={onClose}>
            <CloseIcon fontSize="large" sx={{ color: "#1f1f1f" }} />
          </IconButton>
        </Box>
        <iframe
          src="https://book.squareup.com/appointments/futz20cutwfvkg/location/LRBCSPHZEY29G/services"
          style={{ width: "100%", height: "100%", border: "none" }}
          title="Book Appointment"
          allow="payment"
        />
      </Box>
    </Modal>
  );
}

export default ServicesView;
