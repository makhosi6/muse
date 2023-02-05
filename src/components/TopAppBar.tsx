import React, { ChangeEventHandler } from "react";
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

const useStyles = makeStyles((theme) => {
  console.log(theme);

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
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event: any) => {};

  const handleMenu = (event: any) => {};

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="nav-menu">
      <div className={classes.root}>
        <nav>
          <ul className="cd-primary-nav">
            <li>
              <a href="#0">The team</a>
            </li>
            <li>
              <a href="#0">Our services</a>
            </li>
            <li>
              <a href="#0">Our projects</a>
            </li>
            <li>
              <a href="#0">Start a project</a>
            </li>
            <li>
              <a href="#0">Join In</a>
            </li>
            <li>
              <a href="#0">Create an account</a>
            </li>
          </ul>
        </nav>

        {/* <main className="cd-content"></main> */}
        <div className="cd-overlay-nav">
          <span></span>
        </div>
        <div className="cd-overlay-content">
          <span></span>
        </div>

        <NavigationBtn />
        <AppBar elevation={0} className="app-bar" position="sticky">
          <Toolbar>
            <a href="#"></a>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <a className="cd-nav-trigger">
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
              onClick={handleMenu}
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
