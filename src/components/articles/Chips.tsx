import React, { useContext } from "react";
import { TrendsContext } from "../../App";
import { hashCode } from "../util/helpers";

type Props = {};

const Chips = (props: Props) => {
  const trends = useContext(TrendsContext);
  return (
    <div className="muse-chips">
      {trends.map((tr: any) => (
        <Chip key={hashCode(tr.headline)} title={tr.headline} />
      ))}
    </div>
  );
};
type ChipProps = {
  title: string;
};
const Chip = (props: ChipProps) => {
  return (
    <>
      <div className="muse-chip">
        <span className="muse-chip-label">#{props.title}</span>
        <span className="muse-chip-divider"></span>
      </div>
    </>
  );
};

export default Chips;
