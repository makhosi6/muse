import React, { Component } from "react";
const MyContext = React.createContext();

export default class MyProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flip: this.flip,
      trends: [
        { key: 0, label: "trends", url: "" },
        //everything will be pushed, thus the "trend" obj will be the only permanent item of the arr
        //PUPPETS WILL LOAD DATA TO THE DATAbase
      ],
      articles: {
        pages: []
      },
    };
    this.flip = this.flip.bind(this);
  }
  
  flip = (page=1) => {
    
    let articles = {...this.state.articles}
    sessionStorage.setItem("page", `${page}`);
    //
    fetch(`${process.env.REACT_APP_API}?page=${page}`, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
      },
    })
      .then((response) => response.json())
      .then((x) => articles.pages.push(x.data))
      .then((e) => console.error("DONE FETCHING f"))
      .then(()=> this.setState({articles,page}))
      .then((e) => console.error("DONE UPDATING f"))
      .catch((e) => console.error(e));
    //
  
  };
  async componentDidMount() {
    // fetch trends
    console.log("DID MOUNT");
      let articles = {...this.state.articles}
    fetch(`${process.env.REACT_APP_API}`, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
      },
    })
      .then((response) => response.json())
      .then((x) => articles.pages.push(x.data))
      .then((e) => console.error("DONE FETCHING"))
      .then(()=>this.setState({articles}))
      .then((e) => console.error("DONE UPDATING"))
      .catch((e) => console.error(e));
      
  }
  componentDidUpdate() {
    console.log("DID UPDATE");
    console.log(this.state.articles);
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
