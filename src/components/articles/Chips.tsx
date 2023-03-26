import React, { useContext, useEffect, useRef } from "react";
import { TrendsContext } from "../../App";
import { animateScroll, hashCode } from "../util/helpers";

type Props = {};

const Chips = (props: Props) => {
  const trends = useContext(TrendsContext);
  const el: any = useRef(null);

  useEffect(() => {
    animateScroll(2000, el.current);
  }, []);

  return (
    <div ref={el} className="muse-chips">
      {trends.map((tr: any) => (
        <Chip key={tr.id} title={tr.headline} url={tr.url} />
      ))}
    </div>
  );
};
type ChipProps = {
  title: string;
  url: string;
};
const Chip = (props: ChipProps) => {
  return (
    <>
      <div className="muse-chip">
        <span className="muse-chip-label">
          <a href={props.url} target="_blank" rel="noopener noreferrer">
            #{props.title.replaceAll(" ", "")}
          </a>
        </span>
        <span className="muse-chip-divider"></span>
      </div>
    </>
  );
};

export default Chips;
