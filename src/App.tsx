import React, { useEffect, useState } from "react";
import "./App.css";
import { MobileFriendly } from "@material-ui/icons";
import { MobileWrapper } from "./components/layout/MobileWrapper";
import { Story } from "./components/articles/Story";
import Chips from "./components/articles/Chips";
import { BigStory } from "./components/articles/BigStory";
import NewsCategory from "./components/util/NewsCategory";
import { LoadMore } from "./components/articles/LoadMore";
import { TopAppBar } from "./components/nav/TopAppBar";
import {
  ArticleType,
  fetchArticleData,
  fetchLatestData,
  fetchTrendsData,
  onlyUnique,
} from "./components/util/helpers";
import { Switch, Route } from "react-router-dom";
import { TopicContent } from "./components/pages/TopicContent";
import MainContent from "./components/pages/MainContent";
import { NoMatch } from "./components/pages/NoMatch";

/**
 * top trending article
 */
//@ts-ignore
export const MainArticleContext = React.createContext<ArticleType>({});
MainArticleContext.displayName = "MainArticleContext";
/**
 * List of all other articles
 */
export const ArticlesContext = React.createContext<Array<ArticleType>>([]);
ArticlesContext.displayName = "ArticlesContext";
/**
 * Trending key words/phrases, extracted from google trends
 */
export const TrendsContext = React.createContext<Array<ArticleType>>([]);
TrendsContext.displayName = "TrendsContext";
/**
 * Latest articles
 */
export const LatestContext = React.createContext<Array<ArticleType>>([]);
LatestContext.displayName = "LatestsContext";

/**
 * Topics
 */
export const TopicsContext = React.createContext<Array<ArticleType>>([]);
TopicsContext.displayName = "TopicsContext";

function App() {
  const [count, setCount] = useState(0);
  const [articles, setArticles] = useState<Array<ArticleType>>([]);
  const [trends, setTrends] = useState<Array<ArticleType>>([]);
  const [latest, setLatest] = useState([]);
  //@ts-ignore
  const [main, setMain] = useState<ArticleType>({});
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetchArticleData((l) => {
      ///
      let list = l.data.filtered.data;
      ///
      let main: ArticleType | null = null;
      ///
      let topics: string[] = [];
      list.map((article: ArticleType) => {
        //@ts-ignore
        let topicOne = article["category"];
        //@ts-ignore
        let topicTwo = article["tag"];

        if (topicOne) topics.push(topicOne.toLowerCase());
        if (topicTwo) topics.push(topicTwo.toLowerCase());

        //@ts-ignore
        if (main === null && article.thumbnail !== null) {
          main = article;
        }
      });

      // console.log({list});
      
      //@ts-ignore
      setTopics(topics.filter(onlyUnique));
      ///
      setArticles(list.filter((a: ArticleType) => a.id !== main?.id));
      if (main) setMain(main);
    });
    fetchLatestData((l) => {
      ///
      let list = l.data.filtered.data;

      let topics: string[] = [];
      list.map((article: ArticleType) => {
        //@ts-ignore
        let topicOne = article["category"];
        //@ts-ignore
        let topicTwo = article["tag"];

        if (topicOne) topics.push(topicOne.toLowerCase());
        if (topicTwo) topics.push(topicTwo.toLowerCase());
      });
      // console.log({listOne: list});
      
      //@ts-ignore
      setTopics(topics.filter(onlyUnique));
      setLatest(list);
    });

    fetchTrendsData((l) => setTrends(l.data.filtered.data));
  }, []);

  return (
    <>
      <ArticlesContext.Provider value={articles}>
        <MainArticleContext.Provider value={main}>
          <TrendsContext.Provider value={trends}>
            <LatestContext.Provider value={latest}>
              <TopicsContext.Provider value={topics}>
                {/* https://youtu.be/UjjtvroahBU?list=PLC3y8-rFHvwisvxhZ135pogtX7_Oe3Q3A&t=60 */}
                {/* break-line */}
                <TopAppBar />
                <MobileWrapper>
                  <Chips />
                  {/*
                     // @ts-ignore */}
                  <Switch>
                    {/*
                       // @ts-ignore */}
                    <Route exact path="/" component={MainContent} />
                    {/*
                      // @ts-ignore */}
                    <Route
                      exact
                      path="/topic/:topic"
                      component={TopicContent}
                    />
                    {/*
                      // @ts-ignore */}
                    <Route path="*">
                      <NoMatch />
                    </Route>
                  </Switch>
                  {/* / */}
                  {/* <BigStory />
                  <NewsCategory />
                  <Story />
                  <Story />
                  <Story />
                  <BigStory />
                  <NewsCategory />
                  <Story />
                  <Story />
                  <Story />
                  <BigStory />
                  <NewsCategory />
                  <Story />
                  <Story />
                  <Story /> <BigStory />
                  <NewsCategory />
                  <Story />
                  <Story />
                  <Story /> */}
                  {/*  */}
                </MobileWrapper>
              </TopicsContext.Provider>
            </LatestContext.Provider>
          </TrendsContext.Provider>
        </MainArticleContext.Provider>
      </ArticlesContext.Provider>
    </>
  );
}

export default App;
