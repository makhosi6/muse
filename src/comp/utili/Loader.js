import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from "@material-ui/core/Paper";

export default function CircularUnderLoad() {
  return (
    <Paper component="div" className='loader' style={root}>
     <CircularProgress disableShrink />
    </Paper>
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