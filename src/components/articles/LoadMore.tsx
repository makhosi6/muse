import React from "react";

type Props = {
  left?: number;
  center?: number;
  right?: number;
};

export const LoadMore = (props: Props) => {
  return (
    <div style={{ alignItems: "start" }} className="muse-more-btn">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: "5px",
          borderRadius: "4px",
          border: "1px solid grey",
          width: "100%",
        }}
      >
        <span
          style={{
            backgroundColor: "#204986",
            height: "100%",
            minWidth: "50%",
            width: "50%",
          }}
        ></span>
        <span
          style={{
            backgroundColor: "white",
            height: "100%",
            minWidth: "30%",
            width: "50%",
          }}
        ></span>
        <span
          style={{
            backgroundColor:  "#802727",
            height: "100%",
            minWidth: "20%",
            width: "50%",
          }}
        ></span>
      </div>
      <div>
        <small style={{ textAlign: "start", }}>
          left:90 ;right;10;centre:0%
        </small>
      </div>
      <a href="#">
        <span className="muse-title">Load More</span>
      </a>
    </div>
  );
};
