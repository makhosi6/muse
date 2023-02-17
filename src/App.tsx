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
export const MainArticleContext = React.createContext({});
MainArticleContext.displayName = "MainArticleContext";
/**
 * List of all other articles
 */
export const ArticlesContext = React.createContext([]);
ArticlesContext.displayName = "ArticlesContext";
/**
 * Trending key words/phrases, extracted from google trends
 */
export const TrendsContext = React.createContext([]);
TrendsContext.displayName = "TrendsContext";
/**
 * Latest articles
 */
export const LatestContext = React.createContext([]);
LatestContext.displayName = "LatestsContext";

/**
 * Topics
 */
export const TopicsContext = React.createContext([]);
TopicsContext.displayName = "TopicsContext";

function App() {
  const [count, setCount] = useState(0);
  const [articles, setArticles] = useState([]);
  const [trends, setTrends] = useState([]);
  const [latest, setLatest] = useState([]);
  const [main, setMain] = useState({});
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetchArticleData((l) => {
      ///
      let list = l.data.filtered.data;
      ///
      let main: {} | null = null;
      ///
      let topics: string[] = [];
      list.map((article: Object) => {
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
      //@ts-ignore
      setTopics(topics.filter(onlyUnique));
      ///
      setArticles(list);
      if (main) setMain(main);
    });
    fetchLatestData((l) => setLatest(l.data.filtered.data));
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
                  <Switch>
                    <Route exact path="/" component={MainContent} />
                    <Route
                      exact
                      path="/topic/:topics"
                      component={TopicContent}
                    />
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
                  <LoadMore />
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
