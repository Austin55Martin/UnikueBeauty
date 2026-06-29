import React from "react";
import TopAppBar from "./Components/TopAppBar";
import { useRecoilState } from "recoil";
import { Routes, Route } from "react-router-dom";
import Home from "./Views/Home";
import "@fontsource/dm-sans";
import "@fontsource/sacramento";
import FooterAppBar from "./Components/FooterAppBar";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Theme/Theme";
import { makeStyles } from "tss-react/mui";
import BookNowFab from "./Components/BookNowFab";
import Gallery from "./Views/Gallery";
import { showServicesMenu } from "./Atoms/DisplayStateAtoms";
import ServicesView from "./Views/ServicesView";

const useStyles = makeStyles()((theme) => ({
  mainAppStyles: {
    //backgroundColor: "#f2f2f2"
    backgroundColor: "#eae5d2",
  },
}));

function App() {
  const { classes } = useStyles();
  const [showServices, setShowServices] = useRecoilState(showServicesMenu);

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.mainAppStyles}>
        <TopAppBar />
        <BookNowFab />
        {showServices && (
          <ServicesView
            open={showServices}
            onClose={() => setShowServices(false)}
          />
        )}
        {showServices && (
          <ServicesView
            open={showServices}
            onClose={() => setShowServices(false)}
          />
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <FooterAppBar />
      </div>
    </ThemeProvider>
  );
}

export default App;
