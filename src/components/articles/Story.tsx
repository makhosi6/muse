import React from "react";
import { ArticleType } from "../util/helpers";
import { SubText } from "../util/SubText";
import Loader from "../util/Loader";
import { BiasIndicator } from "./BiasIndicator";

type Props = {
  story: ArticleType;
};

export const Story = (props: Props) => {
  const { story } = props;

  if (!story.hasOwnProperty("category")) {
    console.log({ story });

    return <Loader />;
  }

  return (
    <article className="muse-story">
      <div className="muse-story-container">
        <div className="muse-story-textarea">
          <div className="muse-overline-time">
            {story.category ? (
              <a href={"/topic/" + story.category?.toLowerCase()}>
                {story.category ? (
                  <span className="muse-overline">
                    {story.category?.toUpperCase()}
                    {story.tag &&
                      story.category?.toLowerCase() !==
                        story.category?.toLowerCase() && (
                        <SubText slot={story.tag} />
                      )}
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
            <div className="muse-story-footer">
              <BiasIndicator
                data={[
                  { label: "centre", key: "centre" },
                  { label: "far left", key: "far-left" },
                  
                ]}
              />
              <time className="muse-time">09:17</time>
            </div>
        </div>
        <div className="muse-story-img-area">
        <a href={story.url} target="_blank" rel="noopener noreferrer">
          <img
            src={story.thumbnail}
            alt={story.src_name}
            srcSet={story.thumbnail}
          /></a>
        </div>
        
      </div>
    </article>
  );
};
