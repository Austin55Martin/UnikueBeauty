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
    width: "60%",
    mindWidth: "600px",
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
    animation: "slideInRight 0.2s ease-in-out",
    "@keyframes slideInRight": {
      from: { transform: "translateX(100%)" },
      to: { transform: "translateX(0)" },
    },
  },
  header: {
    backgroundColor: theme.palette.background.default,
    display: "flex",
    width: "100%",
    height: "60px",
    alignItems: "center",
  },
  headerDesktop: {
    justifyContent: "flex-end",
  },
  headerMobile: {
    justifyContent: "flex-start",
    paddingLeft: "1rem",
  },
  iframe: {
    width: "100%",
    height: "calc(100% - 60px)",
    border: "none",
  },
}));

type Props = {
  open: boolean;
  onClose: () => void;
};

function ServicesView({ open, onClose }: Props) {
  const { classes, cx } = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const boxClass = isMobile ? classes.mobileRoot : classes.root;
  const headerClass = cx(
    classes.header,
    isMobile ? classes.headerMobile : classes.headerDesktop,
  );
  const CloseButtonIcon = isMobile ? ArrowBackIcon : CloseIcon;

  return (
    <Modal open={open} onClose={onClose}>
      <Box className={boxClass}>
        <Box className={headerClass}>
          <IconButton onClick={onClose}>
            <CloseButtonIcon
              fontSize={isMobile ? "medium" : "large"}
              sx={{ color: "#1f1f1f" }}
            />
          </IconButton>
        </Box>
        <iframe
          src="https://book.squareup.com/appointments/futz20cutwfvkg/location/LRBCSPHZEY29G/services"
          className={classes.iframe}
          title="Book Appointment"
          allow="payment"
        />
      </Box>
    </Modal>
  );
}

export default ServicesView;
