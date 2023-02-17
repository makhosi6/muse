import React from "react";

type Props = {
  story: {
    id: string;
    headline: string;
    src_name: string;
    url: string;
    src_url: string;
    img: string;
    category: string;
  };
};

export const ShortStory = (props: Props) => {
  return (
    <article className="muse-big-story">
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
