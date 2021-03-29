import React, { useRef } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Paper from "@material-ui/core/Paper";

export default function Loader(props) {
  const el = useRef(null);
  if(props.value === 100){
  let page = Number(sessionStorage.page) || 1;

  window.onscroll = function (ev) {
    const vh = window.innerHeight;
    const top = () => el.current.getBoundingClientRect().top;
    if (vh >= top()) {
      console.info(
        vh >= top(),
        { vh },
        top(),
        { page },
        { position: el.current.getBoundingClientRect() }
      );
      page++;
      console.info(vh >= top(), vh, top(), { page });
      console.log("you're at the bottom of the page");
      //
      props.flip(page);
    }
  };}
  return (
    <>
    <span style={{ lineHeight: "0 !important" }} ref={el}></span>
      <Paper
        component="div"
        className="loader"
        style={root}
      >
        <CircularProgress disableShrink />
      </Paper>
    </>
  );
}
const root = {
  marginTop: '10px',
  maxWidth: 700,
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  listStyle: "none",
  padding: "10px",
};
