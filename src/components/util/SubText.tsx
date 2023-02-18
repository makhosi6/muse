import React from "react";

type SubTextProps = {
    slot: string;
  };
 export function SubText(props: SubTextProps) {
    return (
      <>
        <span className="muse-lite-text">/ </span>
        <span>{props.slot}</span>
      </>
    );
  }