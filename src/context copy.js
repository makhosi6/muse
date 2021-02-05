import React, { Component } from "react";

const MyContext = React.createContext();

export default class MyProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
    flip: this.flip,
    trends: [
      { key: 0, label: "trends", url: "" }
      //everything will be pushed, thus the "trend" obj will be the only permanent item of the arr
      //PUPPETS WILL LOAD DATA TO THE DATAbase
    ],
    articles: {
      pages: [[], []],
    },
  }};
  
  flip = (page=1) => {
    this.setState({page})
    console.log(this,{page});
}
  render() {
    return (
      <MyContext.Provider value={this.state}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
const MyConsumer = MyContext.Consumer;

export { MyProvider, MyConsumer, MyContext };
