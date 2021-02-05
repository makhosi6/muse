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
      pages: [[1,2], [3,4]],
    },
  }
  this.flip = this.flip.bind(this);
};
  
  flip = (page=1) => {
    this.setState({page})
    console.log(this,{page});

    this.setState({
      articles: Object.assign({}, this.state.articles, {
        pages: this.state.articles.pages.push([(Math.floor(Math.random()*2000))]),
      }),
    });
}
async componentDidMount(){
// fetch trends
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
