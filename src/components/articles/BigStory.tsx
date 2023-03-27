import React from "react";
import { SubText } from "../util/SubText";
import Loader from "../util/Loader";
import { BiasIndicator } from "./BiasIndicator";

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

  if (!story.hasOwnProperty("category")) return <Loader />;

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
                <a href={"/topic/" + story.category?.toLowerCase()}>
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
