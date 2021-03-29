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
    lee: "loading",
      articles: {
        pages:[],
      },
    };

    this.flip = this.flip.bind(this);
  }

  flip = (page = 1) => {
    console.log('flipped');
  };

  set = (item, link = "", page = 1) => {
    fetch(link)
      .then((res) => res.json())
      .then((x) => {
        if (item === "search") {
          this.setState({ search: x.data.articles.data });
        }
        if (item === "trends") {
          let a = this.state.trends;
          let b = x.data.filtered.data;
          b.map((y) => {
            a.push(y);
          });
          this.setState({ trends: a });
        }
        if (item === "articles") {
          let articles = { ...this.state.articles };
          fetch(`http://localhost:8000/graphql?query={%20filtered(first:6%20page:1%20type:%22card%22)%20{%20data%20{%20id%20url%20headline%20lede%20thumbnail%20category%20catLink%20images%20key%20label%20subject%20format%20about%20src_name%20src_url%20src_logo%20isVid%20vidLen%20type%20tag%20tags%20author%20authors%20date%20}%20}%20}`)
            .then((res) => res.json())
            .then((y) => {
              (y.data.filtered.data == false)? console.warn("Cant get more slides") : articles.pages.push([y.data.filtered.data]);
              
            });
          articles.pages.push(x.data.filtered.data);
          this.setState({ articles, page });
        }
      })
      .then(()=>this.setState({'lee': 'loaded'}));
  };
  async componentDidMount() {
    console.log("DID MOUNT");
    this.set(
      "search",
      "http://localhost:8000/graphql?query={%20articles(first:%20200,%20page:%201)%20{%20data%20{%20id%20url%20headline%20}%20}%20}"
    );
    this.set(
      "trends",
      "http://localhost:8000/graphql?query={%20filtered(first:10%20page:1%20type:%22hot-trends%22){%20paginatorInfo{%20count%20currentPage%20lastPage%20total%20}%20data{%20id%20label%20url%20headline%20}%20}%20}"
    );
    this.set(
      "articles",
      "http://localhost:8000/graphql?query={%20filtered(first:7%20page:1%20type:%22card%22)%20{%20paginatorInfo%20{%20lastPage%20currentPage%20total%20}%20data%20{%20id%20url%20headline%20lede%20thumbnail%20category%20catLink%20images%20src_name%20src_url%20src_logo%20isVid%20vidLen%20type%20tag%20tags%20author%20authors%20date%20}%20}%20}"
    );
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


let obj = [{
  "id": "g1iotzv3t3y16g81flirpilys",
  "url": "https://ewn.co.za/2021/03/26/the-law-must-simply-take-its-course-when-dealing-with-zuma-say-analysts",
  "headline": "THE LAW MUST SIMPLY TAKE ITS COURSE WHEN DEALING WITH ZUMA, SAY ANALYSTS",
  "lede": "null",
  "thumbnail": "https://static.euronews.com/articles/stories/05/29/37/30/320x180_cmsv2_9909e89b-09bc-567b-999a-7b1404fac44c-5293730.jpg?1610803925",
  "category": "null",
  "catLink": null,
  "images": "null",
  "key": "null",
  "label": "null",
  "subject": "null",
  "format": "null",
  "about": "null",
  "src_name": "Africanews",
  "src_url": "https://ewn.co.za/",
  "src_logo": "https://ewn.co.za/wp-content/uploads/2018/04/Africanews-logo.png",
  "isVid": true,
  "vidLen": "03:10",
  "type": "strip",
  "tag": null,
  "tags": null,
  "author": "null",
  "authors": "null",
  "date": "16/01 - 17:58"
}];