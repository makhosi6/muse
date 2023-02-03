import { useState } from "react";
import "./App.css";
import TopAppBar from "./components/TopAppBar";
import { MobileFriendly } from "@material-ui/icons";
import { MobileWrapper } from "./components/layout/MobileWrapper";
import { Story } from "./components/articles/Story";
import Chips from "./components/articles/Chips";
import { BigStory } from "./components/articles/BigStory";
import NewsCategory from "./components/NewsCategory";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TopAppBar />
      <MobileWrapper>
        <Chips/>
        <BigStory/>
        <NewsCategory/>
        <Story />
        <Story />
        <Story />
      </MobileWrapper>
    </>
  );
}

export default App;
