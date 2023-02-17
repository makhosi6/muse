import React, { useContext } from "react";
import { ArticlesContext, MainArticleContext } from "../../App";
import { BigStory } from "../articles/BigStory";

type Props = {};

const MainContent = (props: Props) => {
  const articles = useContext(ArticlesContext);

  const main = useContext(MainArticleContext) as {
    id: string;
    headline: string;
    src_name: string;
    url: string;
    src_url: string;
    thumbnail: string;
    category: string;
    tag: string;
  };

  return (
  <div>
    <BigStory story={main} />
  </div>
  );
};

export default MainContent;
