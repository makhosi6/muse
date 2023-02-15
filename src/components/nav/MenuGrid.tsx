import { useContext, useEffect, useRef, useState } from "react";
import { imgData, _rgbToHex, hashCode } from "../util/helpers";
import logoSrc from "../../assets/images/ewn-logo.png";
import { Link, Theme, createStyles, makeStyles } from "@material-ui/core";
import { TopicsContext } from "../../App";
//@ts-ignore
// import ColorThief from "../../../node_modules/colorthief/dist/color-thief.mjs"

const ENV = import.meta.env.MODE;
type Props = {};



export const MenuGrid = (props: Props) => {
  const topics = useContext(TopicsContext);
  return (
    <div className="muse-grid-layout">
      {topics.map((t) => (
        <MenuGridItem
          url={`/topic/${t}`}
          title={t}
          uid={hashCode(t)}
          key={hashCode(t)}
        />
      ))}
    </div>
  );
};



type ItemProps = {
  title: string;
  uid: string;
  url: string;
};

type ColorObj = {
  hex: string;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      ...theme.typography.button,
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(1),
      overflow: "hidden"
    },
  })
);

export default function MenuGridItem(props: ItemProps) {
  const classes = useStyles();
  const img = useRef(null);

  return (
    <div className={"image-cont-" + props.uid}>
      <Link color="inherit" href={props.url}>
        <span className={classes.root}>{props.title.toUpperCase()}</span>
      </Link>
    </div>
  );
}
