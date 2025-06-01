import { Box, IconButton, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
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

function ServicesView() {
  const { classes } = useStyles();
  const [open, setOpen] = useState(true);
  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Box className={classes.root}>
        <Box className={classes.header}>
          <IconButton>
            <CloseIcon
              onClick={() => setOpen(false)}
              fontSize="large"
              sx={{ color: "#1f1f1f" }}
            />
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
