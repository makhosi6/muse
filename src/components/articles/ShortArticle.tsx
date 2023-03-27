import React from "react";
import { ArticleType } from "../util/helpers";
import { SubText } from "../util/SubText";
import Loader from "../util/Loader";
import { BiasIndicator } from "./BiasIndicator";

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
        <div className="muse-story-short-container">
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
                  { label: "Left 50%", key: "left", color: "#204986", textColor: "white"  },
                  { label: "Centre 50%", key: "centre", color: "#ffffff", },
                  { label: "Right 10%", key: "right", color: "#802727", textColor: "white" },
                  
                ]}
              />
              <time className="muse-time">09:17</time>
            </div>

          
          </div>
          
        </div>
      </div>
    </article>
  );
};
