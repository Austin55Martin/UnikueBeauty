import * as React from "react";
import { Button, Divider, IconButton, Typography } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import CloseIcon from "@mui/icons-material/Close";
import {
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import "@fontsource/dm-sans";
import InfoIcon from "@mui/icons-material/Info";
import CollectionsIcon from "@mui/icons-material/Collections";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { showServicesMenu } from "../Atoms/DisplayStateAtoms";
import { useRecoilState } from "recoil";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  drawerHeader: {
    display: "flex",
    marginTop: "8px",
    alignItems: "center",
    paddingLeft: 8,
    paddingRight: 8,
    justifyContent: "space-between",
  },
  listItemButton: {
    margin: "8px 0px",
    height: "3.5rem",
  },
  icon: {
    color: "#1f1f1f",
  },
  toggleButton: {
    boxShadow: theme.shadows[3],
    padding: ".1rem",
    width: "100%",
    backgroundColor: "#b48c64",
  },
  toggleIcon: {
    color: "#f2f2f2",
  },
  drawerPaper: {
    padding: "8px 16px",
    backgroundColor: "#f2f2f2",
    boxShadow: theme.shadows[3],
  },
  phoneNumber: {
    fontSize: "1.25rem",
    textAlign: "center",
    fontFamily: "DM Sans",
    color: theme.palette.text.black,
    fontWeight: "600",
  },
  divider: {
    margin: "4px 0px",
  },
}));

type Props = {
  toggleDrawer: (open: boolean) => (event: any) => void;
};

function SideDrawerList({ toggleDrawer }: Props) {
  const { classes } = useStyles();
  const navigate = useNavigate();
  const setShowServicesMenuState = useRecoilState(showServicesMenu)[1];

  const IconDictionary = {
    Home: { icon: <HomeIcon />, onClick: () => navigate("/") },
    Services: {
      icon: <MenuBookIcon />,
      onClick: () => setShowServicesMenuState(true),
    },
    Gallery: { icon: <CollectionsIcon />, onClick: () => navigate("/gallery") },
    About: { icon: <InfoIcon />, onClick: null },
  };

  return (
    <List>
      {Object.entries(IconDictionary).map(([text, { icon, onClick }]) => (
        <ListItem disablePadding={true}>
          <ListItemButton
            onClick={(e) => {
              e.stopPropagation();
              onClick && onClick();
              toggleDrawer(false)(e);
            }}
            className={classes.listItemButton}
          >
            <ListItemIcon className={classes.icon}>{icon}</ListItemIcon>
            <ListItemText
              primary={text}
              primaryTypographyProps={{
                fontSize: "1.15rem",
                fontFamily: "DM Sans",
                fontWeight: "bold",
                textTransform: "none",
              }}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}

export default function SideDrawerButtonToggle() {
  const { classes } = useStyles();
  const [isDrawerOpen, setDrawerState] = React.useState(false);

  const toggleDrawer = (open: boolean) => (event: any) => {
    setDrawerState(open);
  };

  return (
    <>
      <Button
        size="large"
        variant="text"
        onClick={toggleDrawer(true)}
        className={classes.toggleButton}
      >
        <KeyboardDoubleArrowDownIcon
          fontSize="large"
          className={classes.toggleIcon}
        />
      </Button>
      <Drawer
        anchor="top"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        variant="temporary"
        classes={{ paper: classes.drawerPaper }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={toggleDrawer(false)}>
            <CloseIcon fontSize="large" className={classes.icon} />
          </IconButton>
          <Typography className={classes.phoneNumber}>
            360-901-6678
          </Typography>
        </div>
        <Divider className={classes.divider} />
        <SideDrawerList toggleDrawer={toggleDrawer} />
      </Drawer>
    </>
  );
}
