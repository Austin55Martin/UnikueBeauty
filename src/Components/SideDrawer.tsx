import * as React from "react";
import { Button, Divider, IconButton, Typography } from "@mui/material";
import { SxProps, styled } from "@mui/material/styles";
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

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  marginTop: "8px",
  alignItems: "center",
  paddingLeft: 8,
  paddingRight: 8,
  justifyContent: "space-between",
}));

type Props = {
  toggleDrawer: (open: boolean) => (event: any) => void;
};

function SideDrawerList({ toggleDrawer }: Props) {
  const navigate = useNavigate();
  const setShowServicesMenuState = useRecoilState(showServicesMenu)[1];

  const IconDictionary = {
    Home: { icon: <HomeIcon />, onClick: null },
    Services: {
      icon: <MenuBookIcon />,
      onClick: () => setShowServicesMenuState(true),
    },
    Gallery: { icon: <CollectionsIcon />, onClick: null },
    About: { icon: <InfoIcon />, onClick: null },
  };

  const handleDrawerAndNavigate =
    (path: string) => (event: React.MouseEvent) => {
      toggleDrawer(false)(event);
      navigate(
        path === "Home" || path === "Services" ? "/" : `/${path.toLowerCase()}`,
      );
    };

  return (
    <List>
      {Object.entries(IconDictionary).map(([text, { icon, onClick }]) => (
        <ListItem disablePadding={true}>
          <ListItemButton
            onClick={handleDrawerAndNavigate(text)}
            style={{ margin: "8px 0px", height: "3.5rem" }}
          >
            <ListItemIcon sx={{ color: "#1f1f1f" }}>{icon}</ListItemIcon>
            <ListItemText
              primary={text}
              primaryTypographyProps={{
                fontSize: "1.15rem",
                fontFamily: "DM Sans",
                fontWeight: "bold",
                textTransform: "none",
              }}
              onClick={() => onClick && onClick()}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}

export default function SideDrawerButtonToggle() {
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
        sx={{
          boxShadow: 3,
          padding: ".1rem",
          width: "100%",
          backgroundColor: "#b48c64",
        }}
      >
        <KeyboardDoubleArrowDownIcon
          fontSize="large"
          sx={{ color: "#f2f2f2" }}
        />
      </Button>
      <Drawer
        anchor="top"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        variant="temporary"
        sx={
          {
            "& .MuiDrawer-paper": {
              padding: "8px 16px",
              backgroundColor: "#f2f2f2",
              boxShadow: 3,
            },
          } as SxProps
        }
      >
        <DrawerHeader>
          <IconButton onClick={toggleDrawer(false)}>
            <CloseIcon fontSize="large" sx={{ color: "#1f1f1f" }} />
          </IconButton>
          <Typography
            sx={{
              fontSize: "1.25rem",
              textAlign: "center",
              fontFamily: "DM Sans",
              color: "#554a2e",
              fontWeight: "600",
            }}
          >
            360-901-6678
          </Typography>
        </DrawerHeader>
        <Divider sx={{ margin: "4px 0px" }} />
        <SideDrawerList toggleDrawer={toggleDrawer} />
      </Drawer>
    </>
  );
}
