import React from "react";
import TopAppBar from "./Components/TopAppBar";
import { RecoilRoot } from "recoil";
import { Routes, Route } from "react-router-dom";
import Home from "./Views/Home";
import "@fontsource/dm-sans";
import "@fontsource/sacramento";
import FooterAppBar from "./Components/FooterAppBar";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Theme/Theme";
import { makeStyles } from "tss-react/mui";
import BookNowFab from "./Components/BookNowFab";

const useStyles = makeStyles()((theme) => ({
  mainAppStyles: {
    //backgroundColor: "#f2f2f2"
    backgroundColor: "#eae5d2",
  },
}));

function App() {
  const { classes } = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.mainAppStyles}>
        <RecoilRoot>
          <TopAppBar />
          <BookNowFab />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <FooterAppBar />
        </RecoilRoot>
      </div>
    </ThemeProvider>
  );
}

export default App;
