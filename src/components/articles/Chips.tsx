import React from "react";

type Props = {};

const Chips = (props: Props) => {
  return (
    <div className="muse-chips">
      <Chip />
      <Chip />
      <Chip />
      <Chip />
      <Chip />
      <Chip />
      <Chip />
      <Chip />
      <Chip />
      <Chip />
      <Chip />
      <Chip />
      <Chip />
      <Chip />
    </div>
  );
};

const Chip = (props: Props) => {
  return (
    <>
      <div className="muse-chip">
        <span className="muse-chip-label">#news</span>
      <span className="muse-chip-divider"></span>

      </div>
    </>
  );
};

export default Chips;
