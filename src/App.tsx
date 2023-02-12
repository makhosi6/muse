import React, { useEffect, useState } from "react";
import "./App.css";
import { MobileFriendly } from "@material-ui/icons";
import { MobileWrapper } from "./components/layout/MobileWrapper";
import { Story } from "./components/articles/Story";
import Chips from "./components/articles/Chips";
import { BigStory } from "./components/articles/BigStory";
import NewsCategory from "./components/util/NewsCategory";
import MoneyCharts from "./components/util/MoneyCharts";
import { LoadMore } from "./components/articles/LoadMore";
import { TopAppBar } from "./components/nav/TopAppBar";

/**
 * top trending article
 */
export const MainArticleContext = React.createContext({});

/**
 * List of all other articles
 */
export const ArticlesContext = React.createContext([]);

/**
 * Trending key words/phrases, extracted from google trends
 */
export const TrendsContext = React.createContext([]);

/**
 * Latest articles
 */
export const LatestContext = React.createContext([]);

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {}, []);

  return (
    <>
      <ArticlesContext.Provider value={[]}>
        <MainArticleContext.Provider value={[]}>
          <TrendsContext.Provider value={[]}>
            <LatestContext.Provider value={[]}>

            {/* https://youtu.be/UjjtvroahBU?list=PLC3y8-rFHvwisvxhZ135pogtX7_Oe3Q3A&t=60 */}
              {/* break-line */}
              <TopAppBar />
              <MobileWrapper>
                <Chips />
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
                <Story /> <BigStory />
                <NewsCategory />
                <Story />
                <Story />
                <Story />
                <LoadMore />
              </MobileWrapper>
            </LatestContext.Provider>
          </TrendsContext.Provider>
        </MainArticleContext.Provider>
      </ArticlesContext.Provider>
    </>
  );
}

export default App;
