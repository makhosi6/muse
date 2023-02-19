import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ArticlesContext } from "../../App";
import { LoadMore } from "../articles/LoadMore";
import { ArticleType, sortingFn } from "../util/helpers";
import { Story } from "../articles/Story";
import { ShortStory } from "../articles/ShortArticle";
import Loader from "../util/Loader";
import NewsCategory from "../util/NewsCategory";

type Props = {
  topic: string;
  match: {
    params: {
      topic: string;
    };
  };
};

export const TopicContent = (props: Props) => {
  const params = props.match.params;

  const articles = useContext(ArticlesContext).sort(sortingFn);;

  const topicRelated = [
    ...articles.filter((a) => a.tag === params.topic),
    ...articles.filter((a) => a.category === params.topic),
  ];

  console.log(topicRelated.length);

  //@ts-ignore

  if (topicRelated.length < 1) return <Loader />;

  return (
    <>
     {topicRelated.length !== 0 && <NewsCategory key={"news-category"} label={params.topic} />}
      {topicRelated.map((art: ArticleType) =>
        art.thumbnail !== null ? (
          <Story key={art.id} story={art} />
        ) : (
          <ShortStory key={art.id} story={art} />
        )
      )}
      {topicRelated.length > 10 ? <LoadMore key="loadmore" /> : null}
    </>
  );
};
