import React from "react";
import TopAppBar from "./Components/TopAppBar";
import { RecoilRoot } from "recoil";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Views/Home";
import { Fab } from "@mui/material";
import "@fontsource/dm-sans";
import "@fontsource/sacramento";
import FooterAppBar from "./Components/FooterAppBar";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Theme/Theme";
import ServicesView from "./Views/ServicesView";

const mainAppStyles = {
  //backgroundColor: "#f2f2f2"
  backgroundColor: "#eae5d2",
};

const floatingButtonStyle = {
  position: "fixed",
  right: "1.25rem",
  bottom: "1.25rem",
  top: "auto",
  left: "auto",
  color: "white",
  backgroundColor: "#b48c64",
  "&:hover": {
    backgroundColor: "#c99c6f",
  },
  textTransform: "none",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={mainAppStyles}>
        <RecoilRoot>
          <TopAppBar />
          <Fab variant="extended" size="large" sx={{ ...floatingButtonStyle }}>
            Book Now
          </Fab>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesView />} />
          </Routes>
          <FooterAppBar />
        </RecoilRoot>
      </div>
    </ThemeProvider>
  );
}

export default App;
