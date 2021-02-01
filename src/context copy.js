import React, { Component } from "react";

const MyContext = React.createContext();

export default class MyProvider extends Component {
  state = {
    current_page: 1,
    trends: [
      { key: 0, label: "trends", url: "" }
      //everything will be pushed, thus the "trend" obj will be the only permanent item of the arr
      //PUPPETS WILL LOAD DATA TO THE DATAbase
    ],
    articles: {
      pages: [[], []],
    },
  };
  flip(){
      
  }

  render() {
    return (
      <MyContext.Provider flip={this.flip} value={this.state}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
const MyConsumer = MyContext.Consumer;

export { MyProvider, MyConsumer, MyContext };
