import React from "react";

type Props = {};

export const BigStory = (props: Props) => {
  return (
    <article className="muse-big-story">
      {Boolean(Math.floor(Math.random() * 3)) ? (
        <div className="muse-big-img"></div>
      ) : null}{" "}
      <div className="muse-story">
        <div className="muse-story-container">
          <div className="muse-story-textarea">
            <div className="muse-overline-time">
              <span className="muse-overline">Art</span>
              <span className="muse-time">24m</span>
            </div>
            <span
              title="As Stocks Stagnate, Many Look To Currency"
              className="muse-title ellipsis"
            >
              As Stocks Stagnate, Many Look To Currency
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};
