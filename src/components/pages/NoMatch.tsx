import { Button } from "@material-ui/core";
import React from "react";

type Props = {};

export function NoMatch({}: Props) {
  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1 className="muse-h3" > Error Occurred! </h1>
      <p className="muse-text" >Please refresh the page!</p>
      <Button variant="outlined">
        <a
          style={{ textDecoration: "none", color: "#4f4f4f" }}
          className="btn"
          href="/"
        >
          Refresh
        </a>
      </Button>
    </div>
  );
}
