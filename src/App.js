import React from "react";
import "./css/main.css";
import Home from "../src/pages/Home";
import Style from "../src/pages/Style";
import Error from "../src/pages/Error";
import Navbar from "./comp/nav/Navbar";
import { Switch, Route } from "react-router-dom";
import Contact from "../src/pages/Contact";
import Button from '@material-ui/core/Button';

class App extends React.Component {
 state = {
       error: "",
  }
  componentDidCatch(error, info) {
    // Display fallback UI
    console.log({error})
    this.setState({ hasError: true });
    this.setState({ error: error.message });
  }
 
render() {
  if (this.state.hasError) {
    // You can render any custom fallback UI
    return (
        <div style={{border: "2px solid #a7a7a71c", width: "100%", textAlign: "center", alignItems: "center", height: "100vh"}}>
          <h1> Error Occurred! </h1>
           <p><b>Message:</b> {this.state.error}</p>
           <Button variant="outlined">
          <a style={{textDecoration:"none", color:'#4f4f4f'}} className="btn" href="/">Refresh</a>
          </Button>
        </div>
    );
  }
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/:slug" component={Style} /> */}
        <Route exact path="/contact" component={Contact} />
        <Route path="/:slug" component={Error} />
      </Switch>
    </>
  );
}}

export default App;
