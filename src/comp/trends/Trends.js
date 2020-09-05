import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import WhatshotIcon from '@material-ui/icons/Whatshot';

const useStyles = makeStyles(theme => ({
  root: {
    margin: "10px auto",
    maxWidth: 700,
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(0.5),
   
  },
  chip: {
    margin: theme.spacing(0.5),
      cursor: "pointer"
     }
}));

export default function Trends(props) {
  const classes = useStyles();

  return (
    <Paper component="div" className={classes.root}>
      {" "}
      {props.data.map(data => {
        let icon;
        let color;

        if (data.label === "trends") {
          icon = <WhatshotIcon />;
          color="primary";

        }

        return (
          
          <a 
         className="trend-tag"
         href={data.url}
           key={data.key}>
            <Chip variant="outlined"
            color={color}
              icon={icon}
              label={data.label}
              className={classes.chip}
            ></Chip>{" "}
          </a>
        );
      })}{" "}
    </Paper>
  );
}
