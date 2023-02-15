import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import "./assets/css/styles.css";
import { createTheme, MuiThemeProvider } from '@material-ui/core/styles';

// console.log(import.meta.env);

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
  },
});
ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById("root") as HTMLElement
);

