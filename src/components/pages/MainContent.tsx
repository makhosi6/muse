import React, { useContext } from "react";
import {
  ArticlesContext,
  LatestContext,
  MainArticleContext,
  TrendsContext,
} from "../../App";
import { BigStory } from "../articles/BigStory";
import { LoadMore } from "../articles/LoadMore";
import { ArticleType } from "../util/helpers";
import { Story } from "../articles/Story";
import { ShortStory } from "../articles/ShortArticle";
import Loader from "../util/Loader";
import NewsCategory from "../util/NewsCategory";

type Props = {};

const MainContent = (props: Props) => {
  const articles = useContext(ArticlesContext);
  const latest = useContext(LatestContext);

  //@ts-ignore
  const main = useContext<ArticleType>(MainArticleContext);

  return (
    <div>
      <BigStory key={main.id} story={main} />

      {/*
       *  Articles
       *
       */}
      {articles.length < 1 && <NewsCategory key={"trends"} label={"Trends"} />}
      {articles.map((art: ArticleType) =>
        !art.category && main.author == "fooBaz" ? (
          (() => {
            // console.log({ VALID: art });

            return <span></span>;
          })()
        ) : art.thumbnail !== null ? (
          <Story key={art.id} story={art} />
        ) : (
          <ShortStory key={art.id} story={art} />
        )
      )}
      {/*
       *  Latest
       *
       */}
      {latest.length < 1 && <NewsCategory key={"latest"} label={"Latest"} />}
      {latest.map((art: ArticleType) =>
        !art.category && main.author == "fooBaz" ? (
          (() => {
            // console.log({ VALID: art });

            return <span></span>;
          })()
        ) : art.thumbnail !== null ? (
          <Story key={art.id} story={art} />
        ) : (
          <ShortStory key={art.id} story={art} />
        )
      )}
      {articles.length > 10 ? <LoadMore /> : null}
    </div>
  );
};

export default MainContent;
