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
lee: 0,
      articles: {
        pages: [[ [
          {
            "id": "50s8n9tpafs5tnl1hs2lap1vqtri1kw6",
            "url": "https://citizen.co.za/news/south-africa/local-news/2421175/r12m-bronkhorstspruit-hospital-upgrade-makes-no-sense/",
            "headline": "R12m Bronkhorstspruit hospital upgrade ‘makes no sense’",
            "lede": "Last June, BMW Germany announced the company would partner with the government to upgrade…",
            "thumbnail": "https://citizen.co.za/wp-content/uploads/2018/02/bronks-389x259.jpg?x79228",
            "category": "sport",
            "catLink": "local news",
            "images": null,
            "key": null,
            "label": null,
            "subject": null,
            "format": null,
            "about": null,
            "src_name": "Citizen",
            "src_url": "https://citizen.co.za",
            "src_logo": "https://citizen.co.za/wp-content/themes/citizen-v5-2/images/citizen_logo_footer_v2.png",
            "isVid": false,
            "vidLen": null,
            "type": "strip",
            "tag": "local news",
            "tags": null,
            "author": null,
            "authors": null,
            "date": null,
            "created_at": "2021-01-18T04:36:55.000000Z",
            "updated_at": "2021-01-18T04:36:55.000000Z"
        },
        {
            "id": "hkzdcrod52f0kuw7hqqgwwv5yflx60u7",
            "url": "https://www.bbc.com/news/business-55669168",
            "headline": "Scottish fishermen 'landing fish in Denmark'",
            "lede": null,
            "thumbnail": "https://ichef.bbci.co.uk/news/490/cpsprodpb/73AE/production/_116541692_scottishfishermen.jpg",
            "category": "Business",
            "catLink": null,
            "images": null,
            "key": null,
            "label": null,
            "subject": null,
            "format": null,
            "about": null,
            "src_name": "BBC",
            "src_url": "https://www.bbc.com",
            "src_logo": "https://nav.files.bbci.co.uk/orbit/db9d3ece642dbb01f23f791064ec1502/img/blq-orbit-blocks_grey_alpha.png",
            "isVid": false,
            "vidLen": null,
            "type": "card",
            "tag": "Business",
            "tags": null,
            "author": null,
            "authors": null,
            "date": "2 days ago",
            "created_at": "2021-01-18T10:08:45.000000Z",
            "updated_at": "2021-01-18T10:08:45.000000Z"
        },
        {
            "id": "hf0yuveunh48xpdrfn3g6rorlibynpbo",
            "url": "https://www.bbc.com/news/business-55158959",
            "headline": "Smart locks: Convenience comes with security doubts",
            "lede": null,
            "thumbnail": "https://ichef.bbci.co.uk/news/490/cpsprodpb/175F0/production/_115982759_phone.lock.gettyimages-922685814.jpg",
            "category": null,
            "catLink": null,
            "images": null,
            "key": null,
            "label": null,
            "subject": null,
            "format": null,
            "about": null,
            "src_name": "BBC",
            "src_url": "https://www.bbc.com",
            "src_logo": "https://nav.files.bbci.co.uk/orbit/db9d3ece642dbb01f23f791064ec1502/img/blq-orbit-blocks_grey_alpha.png",
            "isVid": false,
            "vidLen": null,
            "type": "card",
            "tag": "tech",
            "tags": null,
            "author": null,
            "authors": null,
            "date": null,
            "created_at": "2021-01-18T10:09:18.000000Z",
            "updated_at": "2021-01-18T10:09:18.000000Z"
        },
        ],
        {
          "id": "1s2aqfzd388g0rd91q6joujqdvvujaas",
          "url": "https://news.cgtn.com/news/2021-01-18/-Days-and-Nights-in-Wuhan-documents-ordinary-people-s-COVID-19-battle-X94xngLN9C/index.html",
          "headline": "'Days and Nights in Wuhan' documents ordinary people's COVID-19 battle",
          "lede": null,
          "thumbnail": null,
          "category": "Movie/TV",
          "catLink": null,
          "images": null,
          "key": null,
          "label": null,
          "subject": null,
          "format": null,
          "about": null,
          "src_name": "CGTN",
          "src_url": "https://www.cgtn.com",
          "src_logo": "https://ui.cgtn.com/static/ng/resource/images/icon/logo@3x.png",
          "isVid": true,
          "vidLen": "6:29",
          "type": "title-only",
          "tag": "Movie/TV",
          "tags": null,
          "author": null,
          "authors": null,
          "date": "12:15, 18-Jan-2021",
          "created_at": "2021-01-18T09:21:40.000000Z",
          "updated_at": "2021-01-18T09:21:40.000000Z"
      },]],
      },
    };
    this.flip = this.flip.bind(this);
  }

  flip = (page = 1) => {};

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
          fetch(`http://localhost:8000/graphql?query={%20filtered(first:5%20page:${page}%20type:%22strip%22)%20{%20paginatorInfo%20{%20lastPage%20currentPage%20total%20}%20data%20{%20id%20url%20headline%20lede%20thumbnail%20category%20catLink%20images%20src_name%20src_url%20src_logo%20type%20tags%20}%20}%20}`)
            .then((res) => res.json())
            .then((y) => {
              console.log({y});
              (y.data.filtered.data == false)? console.warn("Cant get more slides") : x.data.filtered.data.push(y.data.filtered.data);
              
            });
          let articles = { ...this.state.articles };
          articles.pages.push(x.data.filtered.data);
          this.setState({ articles, page });
        }
      });
  };
  async componentDidMount() {
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
