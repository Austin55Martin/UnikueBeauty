import React from "react";
import TopAppBar from "./Components/TopAppBar";
import { RecoilRoot } from "recoil";
import { Routes, Route } from "react-router-dom";
import Home from "./Views/Home";
import { Fab } from "@mui/material";
import "@fontsource/dm-sans";
import "@fontsource/sacramento";
import FooterAppBar from "./Components/FooterAppBar";

const mainAppStyles = {
  //backgroundColor: "#f2f2f2"
  backgroundColor: '#eae5d2'
}

const floatingButtonStyle = {
  position: "fixed",
  right: "1.25rem",
  bottom: "1.25rem",
  top: "auto",
  left: "auto",
  color: "white",
  backgroundColor: "#b48c64",
  fontFamily: "DM Sans",
  "&:hover": {
    backgroundColor: "#c99c6f",
  },
};

function App() {
  
  return (
    <div style={mainAppStyles}>
      <RecoilRoot>
        <TopAppBar />
        <Fab
          variant="extended"
          size="large"
          sx={{ ...floatingButtonStyle }}
        >
          Book Now
        </Fab>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Bad route view
          <Route path="*" element={<NoMatch />} /> */}
        </Routes>
        <FooterAppBar />
      </RecoilRoot>
    </div>
  );
}

export default App;
