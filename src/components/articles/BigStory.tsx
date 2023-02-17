import React from "react";

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
  return (
    <article className="muse-big-story">
      <div key={story.id} className="muse-big-img">
        <img
          src={story.thumbnail}
          alt={story.src_name}
          srcSet={story.thumbnail}
        />
      </div>
      <div className="muse-story">
        <div className="muse-story-container">
          <div className="muse-story-textarea">
            <div className="muse-overline-time">
              {story.category ? (
                <span className="muse-overline">
                  {story.category?.toUpperCase()}{" "}
                  {story.tag && <SubText slot={story.tag} />}
                </span>
              ) : null}
              <span className="muse-time">{story.src_name}</span>
            </div>
            <span
              title="As Stocks Stagnate, Many Look To Currency"
              className="muse-title ellipsis"
            >
              {story.headline}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};
type SubTextProps = {
  slot: string;
};
function SubText(props: SubTextProps) {
  return (
    <>
      <span className="muse-lite-text">/ </span>
      <span>{props.slot}</span>
    </>
  );
}
