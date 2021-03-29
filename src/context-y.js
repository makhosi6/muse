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
      next: true,
      all:{},
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
    fetch(`http://localhost:8000/graphql?query={%20articles(first:%2020,%20page:%20${page})%20{%20paginatorInfo%20{%20lastPage%20currentPage%20total%20}%20data%20{%20id%20url%20headline%20lede%20thumbnail%20category%20catLink%20images%20src_name%20src_url%20src_logo%20isVid%20vidLen%20type%20tag%20tags%20author%20authors%20date%20}%20}%20}`)
      .then((response) => response.json())
      .then((x)=> console.log(x.data))
      .then((x) => articles.pages.push(x.data))
      .then((x)=> console.log(x))
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
      let all = {...this.state.all}
    fetch(`${process.env.REACT_APP_API}/articles`, {
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
      //
      fetch(`${process.env.REACT_APP_API}/filter/all`, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
        },
      })
        .then((response) => response.json())
        .then((x) => all.push(x.data))
        .then((e) => console.error("DONE FETCHING all"))
        .then(()=>this.setState({all}))
        .then((e) => console.error("DONE UPDATING all"))
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
