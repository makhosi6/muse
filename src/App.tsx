import { useState } from "react";
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

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TopAppBar/>
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
        <LoadMore/>
      </MobileWrapper>
    </>
  );
}

export default App;
