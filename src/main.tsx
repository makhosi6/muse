import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import "./assets/css/styles.css";
import { createTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter } from "react-router-dom";

// console.log(import.meta.env);

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    // error: {
    //   main: "#f44336"
    // }
  },
});


ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      {/* 
      //@ts-ignore */}
    <BrowserRouter>
      <App />
      </BrowserRouter>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById("root") as HTMLElement
);

