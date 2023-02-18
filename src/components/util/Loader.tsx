import React, { useRef } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Paper from "@material-ui/core/Paper";

type Props = {

  }

export default function Loader(props: Props) {
  const el: any = useRef(null);

  return (
    <>
      <span style={{ lineHeight: "0 !important" }} ref={el}></span>
      <Paper component="div" className="muse-loader">
        <CircularProgress disableShrink />
      </Paper>
    </>
  );
}
