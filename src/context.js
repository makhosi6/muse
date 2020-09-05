import React, { Component } from "react";

const MyContext = React.createContext();

export default class MyProvider extends Component {
  state = {
    trends: [
      { key: 0, label: "trends", url: "" },
      //everything will be pushed, thus the "trend" obj will be the only permanent item of the arr
      //PUPPETS WILL LOAD DATA TO THE DATAbase
      {
        url: "https://www.aljazeera.com/ajimpact/",
        key: `${Math.random()}`,
        label: "Pitch Black Afro",
      },
      {
        url: "https://www.aljazeera.com/ajimpact/",
        key: `${Math.random()}`,
        label: "Taxi Strike",
      },
      {
        url: "https://www.aljazeera.com/ajimpact/",
        key: `${Math.random()}`,
        label: "Twitter",
      },
      {
        url: "https://www.aljazeera.com/ajimpact/",
        key: `${Math.random()}`,
        label: "Zara",
      },
      {
        url: "https://www.aljazeera.com/ajimpact/",
        key: `${Math.random()}`,
        label: "Soccer",
      },
      {
        url: "https://www.aljazeera.com/ajimpact/",
        key: `${Math.random()}`,
        label: "Jazz Fes",
      },
      {
        url: "https://www.aljazeera.com/ajimpact/",
        key: `${Math.random()}`,
        label: "BLM",
      },
      {
        url: "https://www.aljazeera.com/ajimpact/",
        key: `${Math.random()}`,
        label: "Heuwei",
      },
      {
        url: "https://www.aljazeera.com/ajimpact/",
        key: `${Math.random()}`,
        label: "Covid-19",
      },
    ],
    arr: [
      {
        url: "https://www.aljazeera.com/topics/country/malawi.html",
        headline: "Malawi presidential election: Who are the candidates?",
        lede:
          "Southern African country returns to the polls on June 23 after the Constitutional Court annulled last year's vote.",
        thumbnail:
          "https://www.aljazeera.com/mritems/imagecache/mbdresplarge/mritems/Images/2020/6/16/c8896851a8834751baef7cc39e33a4ae_18.jpg",
        src: "https://www.aljazeera.com/assets/images/AljazeeraLogo.png",
        category: "MALAWI",
        catLink: "https://www.aljazeera.com/topics/country/malawi.html",
        tag: null,
        images: "",
        isVid: false,
        vidLen: null,
        author: null,
        date: "17 hours ago",
      },
      [
        {
          src:
            "https://www.enca.com/sites/all/themes/custom/enca/images/eNCA_logo.svg",
          src_name: "enca",
          url_src: "https://www.enca.com/watch",
          url:
            "https://www.enca.com/news/chinese-researchers-warn-new-virus-pigs-human-pandemic-risk",
          headline:
            "Chinese researchers warn of new virus in pigs with human pandemic risk",
        },
        {
          src:
            "https://www.enca.com/sites/all/themes/custom/enca/images/eNCA_logo.svg",
          src_name: "enca",
          url_src: "https://www.enca.com/watch",
          url:
            "https://www.enca.com/news/a-third-of-covid-19-patients-have-at-least-one-comorbidity",
          headline:
            "A third of COVID-19 patients have at least one comorbidity",
        },
        {
          src:
            "https://www.enca.com/sites/all/themes/custom/enca/images/eNCA_logo.svg",
          src_name: "enca",
          url_src: "https://www.enca.com/watch",
          url: "https://www.enca.com/news/worst-covid-19-pandemic-yet-come-who",
          headline: "Worst of COVID-19 pandemic 'yet to come': WHO",
        },
        {
          src:
            "https://www.enca.com/sites/all/themes/custom/enca/images/eNCA_logo.svg",
          src_name: "enca",
          url_src: "https://www.enca.com/watch",
          url:
            "https://www.enca.com/news/reopening-schools-dates-announced-other-grades",
          headline: "Reopening of schools: Dates announced for other grades",
        },
        {
          src:
            "https://www.enca.com/sites/all/themes/custom/enca/images/eNCA_logo.svg",
          src_name: "enca",
          url_src: "https://www.enca.com/watch",
          url:
            "https://www.enca.com/news/livestream-mbalula-briefs-media-aviation-industry-operations",
          headline:
            "WATCH: Mbalula briefs media on aviation industry operations",
        },
      ],
      {
        url_src: "https://www.enca.com/sports",
        src_name: "enca",
        url:
          "https://www.enca.com/sport/bayern-agree-deal-sign-sane-man-city-reports",
        headline: "Bayern agree deal to sign Sane from Man City: reports",
        lede: null,
        thumbnail:
          "https://www.enca.com/sites/default/files/styles/news_listing/public/2020-07/000_1j553n.jpg?itok=CC1rS1kM",
        src:
          "https://www.enca.com/sites/all/themes/custom/enca/images/eNCA_logo.svg",
        category: null,
        catLink: null,
        tag: null,
        images: "",
        isVid: false,
        vidLen: null,
        author: null,
        date: null,
      },
      {
        url_src: "https://www.enca.com/sports",
        src_name: "enca",
        url:
          "https://www.enca.com/news/game-changer-fernandes-fires-man-utd-masterclass",
        headline: "'Game-changer' Fernandes fires Man Utd masterclass",
        lede: null,
        thumbnail:
          "https://www.enca.com/sites/default/files/styles/news_listing/public/2020-07/000_1UD9L0.jpg?itok=fKDeMESL",
        src:
          "https://www.enca.com/sites/all/themes/custom/enca/images/eNCA_logo.svg",
        category: null,
        catLink: null,
        tag: null,
        images: "",
        isVid: false,
        vidLen: null,
        author: null,
        date: null,
      },
      {
        url_src: "https://www.enca.com/sports",
        src_name: "enca",
        url:
          "https://www.enca.com/sport/australia-postpone-zimbabwe-one-day-series-august",
        headline: "Australia postpone Zimbabwe one-day series in August",
        lede: null,
        thumbnail:
          "https://www.enca.com/sites/default/files/styles/news_listing/public/2020-01/web_photo_finch_190120.jpg?itok=EujL0cjM",
        src:
          "https://www.enca.com/sites/all/themes/custom/enca/images/eNCA_logo.svg",
        category: null,
        catLink: null,
        tag: null,
        images: "",
        isVid: false,
        vidLen: null,
        author: null,
        date: null,
      },
      {
        url_src: "https://www.enca.com/sports",
        src_name: "enca",
        url:
          "https://www.enca.com/sport/2021-africa-cup-nations-postponed-year",
        headline: "2021 Africa Cup of Nations postponed by a year",
        lede: null,
        thumbnail:
          "https://www.enca.com/sites/default/files/styles/news_listing/public/web_photo_afcon_trophy_8415.jpg?itok=dBeAFWHc",
        src:
          "https://www.enca.com/sites/all/themes/custom/enca/images/eNCA_logo.svg",
        category: null,
        catLink: null,
        tag: null,
        images: "",
        isVid: false,
        vidLen: null,
        author: null,
        date: null,
      },
      {
        url_src: "https://www.enca.com/sports",
        src_name: "enca",
        url: "https://www.enca.com/sport/nz-sevens-crowned-champions",
        headline: "NZ Sevens crowned champions",
        lede: null,
        thumbnail:
          "https://www.enca.com/sites/default/files/styles/news_listing/public/web_photo_Sevens7_NZ_23072018.JPG?itok=NDBunSfa",
        src:
          "https://www.enca.com/sites/all/themes/custom/enca/images/eNCA_logo.svg",
        category: null,
        catLink: null,
        tag: null,
        images: "",
        isVid: false,
        vidLen: null,
        author: null,
        date: null,
      },
      {
        url_src: "https://www.enca.com/sports",
        src_name: "enca",
        url: "https://www.enca.com/sport/renault-retain-sirotkin-f1-reserve",
        headline: "Renault retain Sirotkin as F1 reserve",
        lede: null,
        thumbnail:
          "https://www.enca.com/sites/default/files/styles/news_listing/public/2020-06/web_photo_sergey_300620.jpg?itok=Cq3cJ8kI",
        src:
          "https://www.enca.com/sites/all/themes/custom/enca/images/eNCA_logo.svg",
        category: null,
        catLink: null,
        tag: null,
        images: "",
        isVid: false,
        vidLen: null,
        author: null,
        date: null,
      },
      [
        {
          src:
            "https://www.enca.com/sites/all/themes/custom/enca/images/eNCA_logo.svg",
          src_name: "enca",
          url_src: "https://www.enca.com/watch",
          url:
            "https://www.enca.com/news/chinese-researchers-warn-new-virus-pigs-human-pandemic-risk",
          headline:
            "Chinese researchers warn of new virus in pigs with human pandemic risk",
        },
        {
          src:
            "https://www.enca.com/sites/all/themes/custom/enca/images/eNCA_logo.svg",
          src_name: "enca",
          url_src: "https://www.enca.com/watch",
          url:
            "https://www.enca.com/news/a-third-of-covid-19-patients-have-at-least-one-comorbidity",
          headline:
            "A third of COVID-19 patients have at least one comorbidity",
        },
        {
          src:
            "https://www.enca.com/sites/all/themes/custom/enca/images/eNCA_logo.svg",
          src_name: "enca",
          url_src: "https://www.enca.com/watch",
          url: "https://www.enca.com/news/worst-covid-19-pandemic-yet-come-who",
          headline: "Worst of COVID-19 pandemic 'yet to come': WHO",
        },
        {
          src:
            "https://www.enca.com/sites/all/themes/custom/enca/images/eNCA_logo.svg",
          src_name: "enca",
          url_src: "https://www.enca.com/watch",
          url:
            "https://www.enca.com/news/reopening-schools-dates-announced-other-grades",
          headline: "Reopening of schools: Dates announced for other grades",
        },
        {
          src:
            "https://www.enca.com/sites/all/themes/custom/enca/images/eNCA_logo.svg",
          src_name: "enca",
          url_src: "https://www.enca.com/watch",
          url:
            "https://www.enca.com/news/livestream-mbalula-briefs-media-aviation-industry-operations",
          headline:
            "WATCH: Mbalula briefs media on aviation industry operations",
        },
      ],
      {
        url_src: "https://www.enca.com/sports",
        src_name: "enca",
        url:
          "https://www.enca.com/sport/coronavirus-depleted-pakistan-cricket-squad-leave-england",
        headline: "COVID-19: Depleted Pakistan cricket squad leave for England",
        lede: null,
        thumbnail:
          "https://www.enca.com/sites/default/files/styles/news_listing/public/2020-06/web_photo_pakistan_290620.jpg?itok=4ue1H_OR",
        src:
          "https://www.enca.com/sites/all/themes/custom/enca/images/eNCA_logo.svg",
        category: null,
        catLink: null,
        tag: null,
        images: "",
        isVid: false,
        vidLen: null,
        author: null,
        date: null,
      },

      {
        url:
          "https://edition.cnn.com/videos/world/2020/01/16/ghana-science-epilepsy-inside-africa.cnn",
        headline: "The innovators driving Ghana next generation of scientists",
        lede: null,
        thumbnail: null,
        category: "Inside Africa",
        catLink: null,
        tag: "Inside Africa",
        src:
          "https://civiliansinconflict.org/wp-content/uploads/2017/09/Colors-CNN-Logo.jpg",
        images: "",
        isVid: true,
        vidLen: null,
        author: null,
        date: null,
      },
      {
        url:
          "https://edition.cnn.com/2020/06/12/media/netflix-nigeria-deal/index.html",
        headline: "Netflix partners with Nigerian filmmaker in new major deal",
        lede: null,
        thumbnail:
          "//cdn.cnn.com/cnnnext/dam/assets/200612105728-01-mo-abudu-file-restricted-large-tease.jpg",
        category: "Marketplace Africa ",
        catLink: null,
        tag: "Marketplace Africa ",
        src:
          "https://civiliansinconflict.org/wp-content/uploads/2017/09/Colors-CNN-Logo.jpg",
        images: "",
        isVid: false,
        vidLen: null,
        author: null,
        date: null,
      },
      {
        url:
          "https://edition.cnn.com/2020/05/28/africa/flutterwave-coronavirus-africa/index.html",
        headline:
          "Keeping the 'lights on' for small businesses in Africa despite pandemic",
        lede: null,
        thumbnail: null,
        category: "Marketplace Africa ",
        catLink: null,
        tag: "Marketplace Africa ",
        src:
          "https://civiliansinconflict.org/wp-content/uploads/2017/09/Colors-CNN-Logo.jpg",
        images: "",
        isVid: false,
        vidLen: null,
        author: null,
        date: null,
      },
      {
        url:
          "https://edition.cnn.com/2020/02/25/africa/west-africas-largest-wind-plant/index.html",
        headline: "Senegal opens West Africa's largest wind power plant",
        lede: null,
        thumbnail: null,
        category: "Marketplace Africa ",
        catLink: null,
        tag: "Marketplace Africa ",
        src:
          "https://civiliansinconflict.org/wp-content/uploads/2017/09/Colors-CNN-Logo.jpg",
        images: "",
        isVid: false,
        vidLen: null,
        author: null,
        date: null,
      },
      {
        url:
          "https://edition.cnn.com/style/article/kyle-weeks-photography-africa/index.html",
        headline:
          "Photographer Kyle Weeks uses his medium to show that manhood in Africa is not a singular image",
        lede: null,
        thumbnail:
          "//cdn.cnn.com/cnnnext/dam/assets/200227174248-kyle-weeks-5-large-tease.jpg",
        category: "Africa Avant Garde",
        catLink: null,
        tag: "Africa Avant Garde",
        src:
          "https://civiliansinconflict.org/wp-content/uploads/2017/09/Colors-CNN-Logo.jpg",
        images: "",
        isVid: false,
        vidLen: null,
        author: null,
        date: null,
      },
      {
        url:
          "https://edition.cnn.com/style/article/african-photographers-nataal-everyday-africa-tokini-peterside/index.html",
        headline: "Seven leading African photographers",
        lede: null,
        thumbnail: null,
        category: "Africa Avant Garde",
        catLink: null,
        tag: "Africa Avant Garde",
        src:
          "https://civiliansinconflict.org/wp-content/uploads/2017/09/Colors-CNN-Logo.jpg",
        images: "",
        isVid: false,
        vidLen: null,
        author: null,
        date: null,
      },
      {
        url:
          "https://edition.cnn.com/style/article/mariam-kamara-architecture/index.html",
        headline:
          "How architect Mariam Kamara is masterminding a sustainable future for Niger",
        lede: null,
        thumbnail: null,
        category: "Africa Avant Garde",
        catLink: null,
        tag: "Africa Avant Garde",
        src:
          "https://civiliansinconflict.org/wp-content/uploads/2017/09/Colors-CNN-Logo.jpg",
        images: "",
        isVid: false,
        vidLen: null,
        author: null,
        date: null,
      },
      {
        url:
          "https://edition.cnn.com/travel/article/kenya-things-to-do/index.html",
        headline: "Here are the best things to do in Kenya",
        lede: null,
        thumbnail:
          "//cdn.cnn.com/cnnnext/dam/assets/180918170435-11-mother-and-baby-rhino-at-lewa-conservancy-photo-by-shannon-yogerst-1-large-tease.jpg",
        category: "Destination Kenya ",
        catLink: null,
        tag: "Destination Kenya ",
        src:
          "https://civiliansinconflict.org/wp-content/uploads/2017/09/Colors-CNN-Logo.jpg",
        images: "",
        isVid: false,
        vidLen: null,
        author: null,
        date: null,
      },
      {
        url:
          "https://edition.cnn.com/travel/article/rare-elephant-pictures-kenya/index.html",
        headline: "Photos capture rare 'Elephant Queen'",
        lede: null,
        thumbnail: null,
        category: "Destination Kenya ",
        catLink: null,
        tag: "Destination Kenya ",
        src:
          "https://civiliansinconflict.org/wp-content/uploads/2017/09/Colors-CNN-Logo.jpg",
        images: "",
        isVid: false,
        vidLen: null,
        author: null,
        date: null,
      },
      {
        url:
          "https://edition.cnn.com/travel/article/kenyan-food-dishes/index.html",
        headline: "Kenya's best food is a kaleidoscope of flavors",
        lede: null,
        thumbnail: null,
        category: "Destination Kenya ",
        catLink: null,
        tag: "Destination Kenya ",
        src:
          "https://civiliansinconflict.org/wp-content/uploads/2017/09/Colors-CNN-Logo.jpg",
        images: "",
        isVid: false,
        vidLen: null,
        author: null,
        date: null,
      },
      {
        url:
          "https://edition.cnn.com/2019/08/26/business/mami-wata-surfing-intl/index.html",
        headline:
          "The company cementing Africa's place in the world of surfing",
        lede: null,
        thumbnail:
          "//cdn.cnn.com/cnnnext/dam/assets/190822162145-01-mami-wata-large-tease.jpg",
        category: "In the Making: South Africa",
        catLink: null,
        tag: "In the Making: South Africa",
        src:
          "https://civiliansinconflict.org/wp-content/uploads/2017/09/Colors-CNN-Logo.jpg",
        images: "",
        isVid: false,
        vidLen: null,
        author: null,
        date: null,
      },
      {
        url:
          "https://edition.cnn.com/2019/07/25/business/gourmet-grubb-insect-ice-cream-intl/index.html",
        headline: "This luxury ice cream is made from insects in South Africa",
        lede: null,
        thumbnail: null,
        category: "In the Making: South Africa",
        catLink: null,
        tag: "In the Making: South Africa",
        src:
          "https://civiliansinconflict.org/wp-content/uploads/2017/09/Colors-CNN-Logo.jpg",
        images: "",
        isVid: false,
        vidLen: null,
        author: null,
        date: null,
      },
      {
        url:
          "https://edition.cnn.com/videos/business/2019/05/31/bos-iced-tea-itm-south-africa-lon-orig.cnn-business",
        headline: "The iced tea harnessing South Africa's miracle plant",
        lede: null,
        thumbnail: null,
        category: "In the Making: South Africa",
        catLink: null,
        tag: "In the Making: South Africa",
        src:
          "https://civiliansinconflict.org/wp-content/uploads/2017/09/Colors-CNN-Logo.jpg",
        images: "",
        isVid: true,
        vidLen: null,
        author: null,
        date: null,
      },
    ],
  };
  render() {
    return (
      <MyContext.Provider value={this.state}>
        {" "}
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
const MyConsumer = MyContext.Consumer;

export { MyProvider, MyConsumer, MyContext };
