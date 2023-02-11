import React, { ChangeEventHandler, useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { SearchOutlined as SearchIcon } from "@material-ui/icons";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Logo from "./Logo";
import NavigationBtn from "./NavigationBtn";
import NavMenu from "./NavMenu";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  };
});
type Props = {};

export const TopAppBar = (props: Props) => {
  const classes = useStyles();

  const button = useRef(null);

  const [didScroll, setDidScroll] = useState(false);

  const openMenu = (event: any) => {
    if (button.current)
      //@ts-ignore
      button.current?.click();
  };
  const closeMenu = (event: any) => {
    if (button.current)
      //@ts-ignore
      button.current?.click();
  };
  const handleSearch = (event: any) => {};
  const onScrollEv = (event: any) => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      setDidScroll(true);
    } else {
      setDidScroll(false);
    }
  };

  useEffect(() => {
    //on effect
    window.addEventListener("scroll", onScrollEv);
    return () => {
      // on tear off
      window.removeEventListener("scroll", onScrollEv);
    };
  }, []);

  return (
    <div className="nav-menu">
      <div className={classes.root}>
        <NavMenu closeMenu={closeMenu} />
        {/* <main className="cd-content"></main> */}
        <div className="cd-overlay-nav">
          <span></span>
        </div>
        <div className="cd-overlay-content">
          <span></span>
        </div>

        <NavigationBtn
          openMenu={openMenu}
          clasName={`${!didScroll ? "unshow" : ""}`}
        />

        <AppBar
          elevation={0}
          className={`app-bar ${didScroll ? "unshow" : ""}`}
          position="sticky"
        >
          <Toolbar>
            <a href="#"></a>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <a ref={button} className="cd-nav-trigger">
                <MenuIcon />
              </a>
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              <Logo />
            </Typography>

            <IconButton
              aria-label="search"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleSearch}
              color="inherit"
            >
              <SearchIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
};
