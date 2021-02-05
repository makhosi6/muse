import React,{useRef} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from "@material-ui/core/Paper";

export default function Loader(props) {
  const el = useRef(null);
  let page = sessionStorage.page || 1;

  window.onscroll = function (ev) {
    const vh = window.innerHeight;
    const top = () => el.current.getBoundingClientRect().top;
    if (vh >= top()) {
     page++;
     sessionStorage.setItem("page", page );
      console.log(ev);
      console.info(vh >= top(), vh, top(), { page });
      console.log("you're at the bottom of the page");
      //
      props.flip(page);
    }
  };

  return (
        <>
          <Paper component="div" className="loader" style={root}>
            <CircularProgress disableShrink />
          </Paper>
          <span ref={el}></span>
        </>
  );
}
const root = {
    maxWidth: 700,
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: '10px',
   
  };