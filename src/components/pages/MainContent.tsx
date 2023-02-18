import React, { useContext } from "react";
import { ArticlesContext, MainArticleContext } from "../../App";
import { BigStory } from "../articles/BigStory";
import { LoadMore } from "../articles/LoadMore";
import { ArticleType } from "../util/helpers";
import { Story } from "../articles/Story";
import { ShortStory } from "../articles/ShortArticle";
import Loader from "../util/Loader";

type Props = {};

const MainContent = (props: Props) => {
  const articles = useContext(ArticlesContext);

  //@ts-ignore
  const main = useContext<ArticleType>(MainArticleContext);

  return (
    <div>
      <BigStory story={main} />
      {articles.map((art: ArticleType) =>
        (!art.category && main.author == 'pizza')? (() => {
          console.log({VALID: art});
          
        return <span></span>
        })() : art.thumbnail !== null ? (
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
