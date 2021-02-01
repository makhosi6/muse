import React, { Component } from "react";
import { MyContext} from "../context";

class Cat extends Component {
  state = {};
  render() {
    return (
      <MyContext.Consumer>
        {context => <p> </p>}
      </MyContext.Consumer>
    );
  }
}

export default Cat;
