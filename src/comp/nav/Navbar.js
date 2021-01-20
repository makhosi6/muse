import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchDrawer from "../drawer/SearchDrawer";
import OptBtn from '../utili/OptBtn';
import { Link } from "@material-ui/core";
import Drawer from "../drawer/Drawer";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch"
      }
    }
  }
}));

export default function Nav() {
  const classes = useStyles();
  return (
      <AppBar id="nav" style={{zIndex:"100"}} className={classes.root} position="sticky">
        <Toolbar>
          {/* <div style={{border: "1px solid red",margin:"auto", maxWidth:"700px"}}> */}
        <IconButton aria-label="search" color="inherit">
          <Drawer p={2} />
          </IconButton>
          <Typography className={classes.title} variant="div" noWrap>
            <Link href="/">
              <img
                style={{ alignItems: "centre"}}
                src="https://raw.githubusercontent.com/makhosi6/my_projects_links/master/white_logo.svg"
                alt="logo"
                width="100"
                height="30"
                sizes=""
                srcset="//raw.githubusercontent.com/makhosi6/my_projects_links/master/white_logo.svg"
              />
            </Link>
          </Typography>
          <IconButton aria-label="search" color="inherit">
            <SearchDrawer />
          </IconButton>
          <IconButton aria-label="search" color="inherit">
          <OptBtn />
          </IconButton>
          {/* </div> */}
        </Toolbar>
      </AppBar>
  );
}
