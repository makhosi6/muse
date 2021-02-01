import { DriveEtaOutlined } from "@material-ui/icons";
import React, { Component } from "react";
import Article from "../article/Article";
import Slide from "../article/Slides";

export default class Presentation extends Component {
  render() {
    return (
      <div className="page">
        {this.props.data.map((obj) =>
          obj.headline === undefined ? (
            <Slide key={obj.id || obj[0].id} data={obj} />
          ) : (
            <Article key={obj.id || obj[0].id} data={obj} />
          )
        )}
      </div>
    );
  }
}