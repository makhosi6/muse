import React from "react";
import { SubText } from "../util/SubText";
import Loader from "../util/Loader";

type Props = {
  story: {
    id: string;
    headline: string;
    src_name: string;
    url: string;
    src_url: string;
    thumbnail: string;
    category: string;
    tag: string;
  };
};

export const BigStory = (props: Props) => {
  const { story } = props;

  if (!story.hasOwnProperty("category")) return <Loader />

  return (
    <article className="muse-big-story">
      <div key={story.id} className="muse-big-img">
        <a href={story.url} target="_blank" rel="noopener noreferrer">
          <img
            src={story.thumbnail}
            alt={story.src_name}
            srcSet={story.thumbnail}
          />
        </a>
      </div>
      <div className="muse-story">
        <div className="muse-story-container">
          <div className="muse-story-textarea">
            <div className="muse-overline-time">
            {story.category ? (
                <a href={"/topics/" + story.category?.toLowerCase()}>
                  {story.category ? (
                    <span className="muse-overline">
                      {story.category?.toUpperCase()}
                      {story.tag && <SubText slot={story.tag} />}
                    </span>
                  ) : null}
                </a>
              ) : (
                <span className="muse-overline">NEWS</span>
              )}
              <a href={story.src_url} target="_blank" rel="noopener noreferrer">
                <span className="muse-src-name">{story.src_name}</span>
              </a>
            </div>
            <span title={story.headline} className="muse-title ellipsis">
              <a href={story.url} target="_blank" rel="noopener noreferrer">
                {story.headline}
              </a>
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};
