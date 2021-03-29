import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon"
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import { Link } from "@material-ui/core";
import { ArrowDownwardOutlined, ViewArray } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  title: {
    color: "#3f51b5",
    flexGrow: 1,
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
}));

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });
  const items = [
    {
      text: "politics",
      key: "Inbox",
    },
    {
      text: "africa",
      key: "Draft",
    },
    {
      text: "tech",
      key: "Send email",
    },
    {
      text: "lifestyle",
      key: "Drafts",
    },
    {
      text: "business",
      key: "Inbox",
    },
    {
      text: "politics",
      key: "All mail",
    },
  ];
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      key={`${Math.random() * 1000}`}
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem key={`${Math.random() * 1000}`} button>
          <Typography className={classes.title} variant="inherit" noWrap>
            <Link href="/">
              <img
                style={{ alignItems: "centre", objectFit: "contain" }}
                src="https://raw.githubusercontent.com/makhosi6/my_projects_links/master/blue_logo.svg"
                alt="logo"
                width="100"
                height="30"
                sizes=""
                srcSet="//raw.githubusercontent.com/makhosi6/my_projects_links/master/blue_logo.svg"
              />
            </Link>
          </Typography>
        </ListItem>
        <Divider />

    
        {items.map((item) => (
          <>

            <Link href={item.text}>
            <ListItem button key={`${Math.random() * 1000}${item.key}`}>
              <ListItemIcon>
                    {/* //  <ViewArray/>
                    //  {} */}
                    </ListItemIcon>
                  
              <ListItemText className="caps" primary={item.text} />
            
            </ListItem>
            <Divider />{" "}
          </Link>
          </>
        ))}
        <Divider />
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment key="left">
        <MenuIcon onClick={toggleDrawer("left", true)} />
        <Drawer
          component="div"
          anchor="left"
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
