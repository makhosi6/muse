import React from "react";
import "./css/main.css";
import Home from "./pages/Home";
import Style from "./pages/Style";
import Error from "./pages/Error";
import Navbar from "./comp/nav/Navbar";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:slug" component={Style} />
        <Route exact path="/error" component={Error} />
      </Switch>
    </>
  );
}

export default App;
