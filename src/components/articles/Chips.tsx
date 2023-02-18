import React, { useContext } from "react";
import { TrendsContext } from "../../App";
import { hashCode } from "../util/helpers";

type Props = {};

const Chips = (props: Props) => {
  const trends = useContext(TrendsContext);
  return (
    <div className="muse-chips">
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
          #{props.title}
          </a>
          </span>
        <span className="muse-chip-divider"></span>
      </div>
    </>
  );
};

export default Chips;
