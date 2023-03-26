import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";

const useStyles = makeStyles((theme) => ({
  root: {
    // border: "1px solid",
    // margin: "0 auto",
    maxWidth: 700,
    display: "flex",
    justifyContent: "left",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(0),
    color: "green"
  },
  chip: {
    margin: theme.spacing(0.0),
    // cursor: "pointer",
    // color: 'red'
  },
}));

type Props = {
  data: Array<{
    key: string;
    label: string;
  }>;
};

export const BiasIndicator = (props: Props) => {
  const classes = useStyles();



  return (
    <Paper
      elevation={0}
      component="section"
      className={`muse-bs-indicator ` + classes.root}
    >
      {props.data.map((data) => {
        let icon;
        let color;
        /**
         * a random number within range of [accentColors]
         */
        let index = Math.floor(Math.random() * accentColors.length);

 
        // if (index === 3 || index == 10) {
        //   icon = index > 5 ? <AccessAlarmIcon/> : <WhatshotIcon />;
        //   color = "secondary";
        // }
        return (
          <span className="muse-bias-tag" key={data.key}>
            <Chip
              style={{
                backgroundColor: accentColors[index]
              }}
              variant="outlined"
              icon={icon}
              //@ts-ignore
              color={color}
              label={data.label + " "  + index}
              className={classes.chip}
            ></Chip>
          </span>
        );
      })}
    </Paper>
  );
};

let accentColors = [
  "#EDF4F2",
  "#CADCFC",
  "#E1E5EB",
  "#D9DAD9",
  "#EEEDEE",
  "#CEE6F2",
  "#DDDBDE",
  "#CAD4DF",
  "#FAF6E7",
  "#F4F7F7",
  "#F4F2EE",
  "#DDE1E3",
];
