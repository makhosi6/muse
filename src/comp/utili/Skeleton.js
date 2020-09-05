import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles(theme => ({
  hid:{
    [theme.breakpoints.down("xs")]: {
        display: "none"
    },
  },
  skeleton: {
    padding: theme.spacing(1),
    width: 408,
    [theme.breakpoints.down("xs")]: {
      width: 300
    },
    zIndex: "0"
  },
  details: {
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    width: "auto",
    zIndex: "0"
  },
  root: {
    margin: "10px auto",
    display: "flex",
    maxWidth: 700,
    zIndex: "0"
  }
}));

export default function Animations() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <div className={classes.skeleton}>
          <Skeleton
            style={{ backgroundColor: "#3e323254" }}
            width={100}
            animation="wave"
          />
          <Skeleton
            variant="text"
            style={{ backgroundColor: "#3e323254" }}
            animation="wave"
            height={30}
          />{" "}
          <Skeleton
            variant="text"
            style={{ backgroundColor: "#3e323254" }}
            animation="wave"
          />
          <Skeleton
            variant="text"
            style={{ backgroundColor: "#3e323254" }}
            animation="wave"
          />
          <Skeleton
        variant="text"
            style={{ backgroundColor: "#3e323254" }}
            animation="wave"
          />
          <Skeleton
            variant="text"
            style={{ backgroundColor: "#3e323254" }}
            width={70}
            animation="wave"
          />
        </div>{" "}
      </div>{" "}
      <Skeleton    
        className={classes.hid}
        style={{ backgroundColor: "#3e323254" }}
        variant="rect"
        animation="wave"
        width={210}
        height={170}
      />{" "}
    </Card>
  );
}
