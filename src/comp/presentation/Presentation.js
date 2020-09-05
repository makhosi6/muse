import React, { Component } from "react";
import Article from "../article/Article";
import Slide from "../article/Slides";

export default class Presentation extends Component {
  render() {
    return this.props.data.map((obj) =>
      obj.headline === undefined ? (
        <Slide key={`${Math.random() * 1000}`} data={obj} />
      ) : (
        <Article key={`${Math.random() * 1000}`} data={obj} />
      )
    );
  }
}
