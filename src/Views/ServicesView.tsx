import { Box, IconButton, Modal } from "@mui/material";
import React from "react";
import { makeStyles } from "tss-react/mui";
import CloseIcon from "@mui/icons-material/Close";

const useStyles = makeStyles()((theme) => ({
  root: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -55%)",
    width: "70%",
    height: "80vh",
    backgroundColor: theme.palette.background.paper,
    boxShadow: "24",
  },
  header: {
    backgroundColor: theme.palette.background.default,
    display: "flex",
    width: "100%",
    height: "60px",
    justifyContent: "flex-end",
    alignItems: "center",
  },
}));

type Props = {
  open: boolean;
  onClose: () => void;
};

function ServicesView({ open, onClose }: Props) {
  const { classes } = useStyles();

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
        />
      </Box>
    </Modal>
  );
}

export default ServicesView;
