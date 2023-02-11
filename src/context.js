import { Info } from "@material-ui/icons";
import React, { Component } from "react";
const MyContext = React.createContext();

export default class MyProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flip: this.flip,
      trends: [
        { key: 0, label: "trends", url: "" },
      ],
      lee: "jus a rndm value",
      articles: {
        pages: [],
      },
    };

    this.flip = this.flip.bind(this);
  }

  flip = (page = 1) => {
    console.info(`page loading...`);
  };

  set = (item, link = "", page = 1) => {
    console.log('Loading page: ', page);
    this.setState({ lee: "loading" })
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

          fetch(
            `${API}graphql?query={%20filtered(first:6%20page:${page}%20type:%22card%22)%20{%20data%20{%20id%20url%20headline%20lede%20thumbnail%20category%20catLink%20images%20key%20label%20subject%20format%20about%20src_name%20src_url%20src_logo%20isVid%20vidLen%20type%20tag%20tags%20author%20authors%20date%20}%20}%20}`
          )
            .then((res) => res.json())
            .then((y) => {
              // console.log({y});
              y.data.filtered.data == false
                ? console.warn("Cant get more slides")
                : x.data.filtered.data.push([y.data.filtered.data]);
              this.setState({
                more: x.data.filtered.paginatorInfo.hasMorePages,
                _: {
                  lastPage: x.data.filtered.paginatorInfo.lastPage,
                  currentPage: x.data.filtered.paginatorInfo.currentPage,
                },
              });
            });

          articles.pages.push(x.data.filtered.data);
          this.setState({ articles, page });
        }
      })
      .then(() => this.setState({ lee: "loaded" }));
  };
  async componentDidMount() {
    console.log("DID MOUNT");
    this.set(
      "search",
      `${API}graphql?query={%20articles(first:%20200,%20page:%201)%20{%20data%20{%20id%20url%20headline%20}%20}%20}`
    );
    this.set(
      "trends",
      `${API}graphql?query={%20filtered(first:10%20page:1%20type:%22hot-trends%22){%20paginatorInfo{%20count%20currentPage%20lastPage%20total%20}%20data{%20id%20label%20url%20headline%20}%20}%20}`
    );
    this.set(
      "articles",
      `${API}graphql?query={%20filtered(first:40%20page:4%20type:%22card%22)%20{%20paginatorInfo%20{%20lastPage%20hasMorePages%20currentPage%20total%20}%20data%20{%20id%20url%20headline%20lede%20thumbnail%20category%20catLink%20images%20src_name%20src_url%20src_logo%20isVid%20vidLen%20type%20tag%20tags%20author%20authors%20date%20}%20}%20}`, 3
    );
    this.set(
      "articles",
      `${API}graphql?query={%20filtered(first:40%20page:3%20type:%22card%22)%20{%20paginatorInfo%20{%20lastPage%20hasMorePages%20currentPage%20total%20}%20data%20{%20id%20url%20headline%20lede%20thumbnail%20category%20catLink%20images%20src_name%20src_url%20src_logo%20isVid%20vidLen%20type%20tag%20tags%20author%20authors%20date%20}%20}%20}`,
      2
    );
  }

  componentDidUpdate() {
    console.log("DID UPDATE");
    // console.log(this.state.articles);
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
let API = process.env.REACT_APP_API;
let arr = [
  {
    id: "1s2aqfzd388g0rd91q6joujqdvvujaas",
    url: "https://news.cgtn.com/news/2021-01-18/-Days-and-Nights-in-Wuhan-documents-ordinary-people-s-COVID-19-battle-X94xngLN9C/index.html",
    headline:
      "'Days and Nights in Wuhan' documents ordinary people's COVID-19 battle",
    lede: null,
    thumbnail: null,
    category: "Movie/TV",
    catLink: null,
    images: null,
    key: null,
    label: null,
    subject: null,
    format: null,
    about: null,
    src_name: "CGTN",
    src_url: "https://www.cgtn.com",
    src_logo: "https://ui.cgtn.com/static/ng/resource/images/icon/logo@3x.png",
    isVid: true,
    vidLen: "6:29",
    type: "title-only",
    tag: "Movie/TV",
    tags: null,
    author: null,
    authors: null,
    date: "12:15, 18-Jan-2021",
    created_at: "2021-01-18T09:21:40.000000Z",
    updated_at: "2021-01-18T09:21:40.000000Z",
  },
  {
    id: "rnf2jfxt5eoftxjvx922fsvv4cvgr9i5",
    url: "https://news.cgtn.com/news/2021-01-18/-Elves-of-the-Yangtze-River-show-up-in-central-China-X96xcACSLS/index.html",
    headline: "'Elves of the Yangtze River' show up in central China",
    lede: null,
    thumbnail: "https://ui.cgtn.com/static/ng/resource/images/icon/zwt-bg.png",
    category: "Animal",
    catLink: null,
    images: null,
    key: null,
    label: null,
    subject: null,
    format: null,
    about: null,
    src_name: "CGTN",
    src_url: "https://www.cgtn.com",
    src_logo: "https://ui.cgtn.com/static/ng/resource/images/icon/logo@3x.png",
    isVid: true,
    vidLen: "6:29",
    type: "title-only",
    tag: "Animal",
    tags: null,
    author: null,
    authors: null,
    date: "13:11, 18-Jan-2021",
    created_at: "2021-01-18T09:22:01.000000Z",
    updated_at: "2021-01-18T09:22:01.000000Z",
  },
  {
    id: "p3lcleiza9kk3vemmhokeou8l9xh1fq4",
    url: "https://www.bbc.com/news/business-55636774",
    headline: "'I couldn't build a company on my own'",
    lede: null,
    thumbnail:
      "https://ichef.bbci.co.uk/news/490/cpsprodpb/53D2/production/_116485412_p093sm9b.jpg",
    category: null,
    catLink: null,
    images: null,
    key: null,
    label: null,
    subject: null,
    format: null,
    about: null,
    src_name: "BBC",
    src_url: "https://www.bbc.com",
    src_logo:
      "https://nav.files.bbci.co.uk/orbit/db9d3ece642dbb01f23f791064ec1502/img/blq-orbit-blocks_grey_alpha.png",
    isVid: true,
    vidLen: "1:19",
    type: "card",
    tag: null,
    tags: null,
    author: null,
    authors: null,
    date: null,
    created_at: "2021-01-18T10:09:30.000000Z",
    updated_at: "2021-01-18T10:09:30.000000Z",
  },
  {
    id: "l8xndmg9nbiqyaunzeue5zu0t5p4g5mr",
    url: "https://www.bbc.com/news/business-55638969",
    headline: "'Putting UK, not GB, delayed my fish for 24 hours'",
    lede: "New trading rules are causing problems for some firms, creating backlogs and uncertainty.",
    thumbnail:
      "https://ichef.bbci.co.uk/news/490/cpsprodpb/0DDF/production/_116515530_2972d877-3cb0-428a-be41-53425c776870.jpg",
    category: "Business",
    catLink: null,
    images: null,
    key: null,
    label: null,
    subject: null,
    format: null,
    about: null,
    src_name: "BBC",
    src_url: "https://www.bbc.com",
    src_logo:
      "https://nav.files.bbci.co.uk/orbit/db9d3ece642dbb01f23f791064ec1502/img/blq-orbit-blocks_grey_alpha.png",
    isVid: false,
    vidLen: "6:29",
    type: "card",
    tag: "Business",
    tags: null,
    author: null,
    authors: null,
    date: "9 hours ago",
    created_at: "2021-01-18T10:06:23.000000Z",
    updated_at: "2021-01-18T10:06:23.000000Z",
  },
];
