import React from "react";

type Props = {};

export const Story = (props: Props) => {
  return (
    <div className="muse-story">
      <div className="muse-story-container">
        <div className="muse-story-textarea">
          <div className="muse-overline-time">
            <span className="muse-overline">Art</span>
            <span className="muse-time">24m</span>
          </div>
          <span title="As Stocks Stagnate, Many Look To Currency" className="muse-title ellipsis">
            As Stocks Stagnate, Many Look To Currency
          </span>
        </div>
        <div className="muse-story-img-area"></div>
      </div>
    </div>
  );
};
