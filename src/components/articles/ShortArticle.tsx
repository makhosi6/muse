import React from "react";
import { ArticleType } from "../util/helpers";
import { SubText } from "../util/SubText";
import Loader from "../util/Loader";

type Props = {
  story: ArticleType;
};

export const ShortStory = (props: Props) => {
  const { story } = props;

  return !story.hasOwnProperty("category") ? (
    <Loader />
  ) : (
    <article className="muse-big-story">
      <div className="muse-story">
        <div className="muse-story-container">
          <div className="muse-story-textarea">
            <div className="muse-overline-time">
              {story.category ? (
                <a href={"/topic/" + story.category?.toLowerCase()}>
                  {story.category ? (
                    <span className="muse-overline">
                      {story.category?.toUpperCase()}
                      {story.tag && (story.category?.toLowerCase() !== story.category?.toLowerCase()) &&  <SubText slot={story.tag} />}
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
            <a href={story.url} title={story.headline} className="muse-title ellipsis">
              {props.story.headline}
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};
